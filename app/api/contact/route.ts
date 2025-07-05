const RESEND_API_KEY = process.env.RESEND_API_KEY || "";

export async function POST(request: Request) {
  try {
    if (!RESEND_API_KEY) {
      return Response.json(
        { error: "RESEND_API_KEY is not set" },
        { status: 500 },
      );
    }

    let body;
    try {
      body = await request.json();
    } catch (error) {
      console.error("Failed to parse request body:", error);
      return Response.json(
        { error: "Invalid JSON in request body" },
        { status: 400 },
      );
    }

    console.log("Received body:", body);

    // Validate required fields
    if (!body || typeof body !== "object") {
      return Response.json(
        { error: "Request body must be a valid JSON object" },
        { status: 400 },
      );
    }

    if (!body.name || !body.email || !body.message) {
      return Response.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 },
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return Response.json({ error: "Invalid email format" }, { status: 400 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <noreply@kornval.com>", // Use your verified domain
        reply_to: body.email, // Set reply-to to user's email
        to: ["mikkel@kornval.com"],
        subject: `New Contact Form Submission from ${body.name}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Message:</strong></p>
          <p>${body.message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    let responseData;
    const responseText = await res.text();

    try {
      responseData = JSON.parse(responseText);
    } catch (parseError) {
      console.error(
        "Failed to parse Resend API response as JSON:",
        responseText,
      );
      return Response.json(
        { error: "Invalid response from email service", details: responseText },
        { status: 500 },
      );
    }

    if (!res.ok) {
      console.error("Error sending email:", responseData);
      return Response.json(
        { error: "Failed to send email", details: responseData },
        { status: res.status },
      );
    }

    console.log("Email sent successfully:", responseData);
    return Response.json({ success: true, data: responseData });
  } catch (error) {
    console.error("Unexpected error in contact API:", error);
    return Response.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
