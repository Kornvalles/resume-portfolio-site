// Static support page for the Volo Cardio iOS app.
// Served as a standalone HTML document at https://kornval.com/volo
// (a Route Handler so it bypasses the site layout and resolves at the exact path).

export const dynamic = "force-static"

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Volo Cardio — Support</title>
  <meta name="description" content="Support for Volo Cardio. Get help with VO₂ Max readings, Apple Health access, and Volo Premium — or email us directly.">
  <meta name="robots" content="index,follow">
  <link rel="canonical" href="https://kornval.com/volo">
  <style>
    :root {
      --ground: #f7f8f6; --panel: #ffffff; --ink: #191b18; --ink-soft: #4f544a;
      --ink-faint: #838877; --line: #e4e7de; --accent: #1f9d4d; --accent-ink: #146b35;
      --accent-soft: #e6f5eb;
      --sans: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif;
    }
    @media (prefers-color-scheme: dark) {
      :root { --ground: #0a0b09; --panel: #131511; --ink: #eef0ea; --ink-soft: #a8ad9e;
        --ink-faint: #71776a; --line: #262a22; --accent: #30d158; --accent-ink: #7ce89b;
        --accent-soft: #142a1a; }
    }
    * { box-sizing: border-box; }
    html { -webkit-text-size-adjust: 100%; }
    body { margin: 0; background: var(--ground); color: var(--ink);
      font-family: var(--sans); line-height: 1.62; -webkit-font-smoothing: antialiased; }
    .wrap { max-width: 660px; margin: 0 auto; padding: clamp(28px,6vw,60px) clamp(18px,5vw,28px) 90px; }
    .head { display: flex; align-items: center; gap: 12px; padding-bottom: 22px;
      border-bottom: 1px solid var(--line); margin-bottom: 30px; }
    .glyph { width: 38px; height: 38px; border-radius: 10px; flex: none;
      background: radial-gradient(120% 120% at 30% 20%, #3ee06a, var(--accent) 70%);
      display: grid; place-items: center; box-shadow: 0 3px 12px -4px rgba(48,209,88,.5); }
    .glyph svg { width: 21px; height: 21px; }
    .head .name { font-weight: 650; font-size: 15px; letter-spacing: -.01em; }
    .head .sub { font-size: 12.5px; color: var(--ink-faint); }
    h1 { font-size: clamp(26px,5vw,32px); letter-spacing: -.02em; margin: 0 0 6px;
      text-wrap: balance; font-weight: 700; }
    .lede { color: var(--ink-soft); font-size: 15.5px; margin: 0 0 8px; }
    .contact { margin: 22px 0 8px; padding: 16px 18px; background: var(--accent-soft);
      border-radius: 12px; font-size: 14.5px; color: var(--ink); }
    .contact b { color: var(--accent-ink); }
    .contact a { color: var(--accent-ink); font-weight: 600; }
    h2 { font-size: 17px; letter-spacing: -.01em; margin: 34px 0 8px; font-weight: 650; }
    .q { font-size: 16px; letter-spacing: -.01em; margin: 26px 0 6px; font-weight: 650;
      text-wrap: balance; }
    p { color: var(--ink-soft); font-size: 15px; margin: 0 0 12px; }
    ul { margin: 0 0 12px; padding-left: 20px; color: var(--ink-soft); font-size: 15px; }
    li { margin-bottom: 6px; }
    strong { color: var(--ink); font-weight: 600; }
    a { color: var(--accent-ink); }
    .path { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 13.5px;
      color: var(--ink); }
    footer { margin-top: 44px; padding-top: 20px; border-top: 1px solid var(--line);
      color: var(--ink-faint); font-size: 13px; }
    :focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="head">
      <span class="glyph" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="#04210d" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13h3l2.5 5 4-13 2.5 8 2-3h4"/></svg>
      </span>
      <div>
        <div class="name">Volo Cardio</div>
        <div class="sub">iPhone &amp; Apple Watch</div>
      </div>
    </div>

    <h1>Support</h1>
    <p class="lede">Volo Cardio reads your VO<sub>2</sub> Max — Apple's "Cardio Fitness" measurement — from Apple Health and shows where it sits across five fitness levels. Below are answers to the most common questions. If yours isn't here, we're happy to help.</p>

    <div class="contact">
      <b>Get in touch:</b> Email <a href="mailto:support@kornval.com?subject=Volo%20Cardio%20support">support@kornval.com</a> and we'll get back to you, usually within a couple of days.
    </div>

    <h2>Frequently asked questions</h2>

    <p class="q">Why is my VO<sub>2</sub> Max blank or not showing?</p>
    <p>VO<sub>2</sub> Max (Cardio Fitness) isn't something you enter by hand — it's calculated by <strong>Apple Watch</strong> during <strong>outdoor</strong> Walking, Running, or Hiking workouts. If Volo shows no number yet, it usually means one of these:</p>
    <ul>
      <li>You haven't recorded an outdoor workout with your Apple Watch yet. Go for an outdoor walk or run with the Workout app, then check back — a reading can take a workout or two to appear.</li>
      <li>You're using an older Apple Watch. Cardio Fitness needs Apple Watch Series 3 or later, watchOS 4 or later.</li>
      <li>Volo doesn't have permission to read Health data (see the next question).</li>
    </ul>

    <p class="q">Volo isn't reading my Health data. How do I fix permissions?</p>
    <p>Open the iPhone <strong>Settings</strong> app → <strong>Health</strong> → <strong>Data Access &amp; Devices</strong> → <strong>Volo</strong>, and make sure <strong>Cardio Fitness</strong>, <strong>Date of Birth</strong>, and <strong>Biological Sex</strong> are turned on. You can also manage this from inside the Apple Health app. Volo only ever <strong>reads</strong> this data — it never writes to or changes anything in Apple Health.</p>

    <p class="q">Is my health data private?</p>
    <p>Yes, completely. Volo has no servers and no accounts — your data is read from Apple Health and used <strong>on your device</strong> to draw the screens you see. Nothing is uploaded, collected, tracked, or shared. Full details are in our <a href="https://kornval.com/volo/privacy">Privacy Policy</a>.</p>

    <p class="q">What does Volo Premium include?</p>
    <p>The Home screen — your current reading, level, and trend — is always <strong>free</strong>. Volo Premium unlocks the <strong>Levels</strong>, <strong>Trends</strong>, and <strong>Profile</strong> screens with an auto-renewable subscription (monthly or yearly), and new subscribers start with a <strong>1-month free trial</strong>. You can subscribe from any of those screens in the app.</p>

    <p class="q">How do I restore a subscription on a new device?</p>
    <p>Sign in with the same Apple Account you used to subscribe, open Volo, and tap <strong>Restore Purchases</strong> on the paywall or Profile screen. Your Premium access is tied to your Apple Account, so it follows you across your devices.</p>

    <p class="q">How do I cancel or manage my subscription?</p>
    <p>Subscriptions are handled by Apple, not by Volo. On your iPhone, open <strong>Settings</strong> → tap <strong>your name</strong> at the top → <strong>Subscriptions</strong> → <strong>Volo Cardio</strong>, then cancel or change your plan. If you cancel during the free trial you won't be charged, and you keep access until the current period ends.</p>

    <p class="q">Does Volo work on Apple Watch?</p>
    <p>Yes. Volo includes a watchOS app and complications so you can see your Cardio Fitness level right on your wrist. It reads the same Apple Health data, so a reading that appears on your iPhone will appear on your Watch too.</p>

    <p class="q">How do I delete my data?</p>
    <p>Because Volo stores nothing off your device, there's nothing for us to delete. To remove the app's local settings, simply delete the app — your Apple Health records are untouched and remain in Apple Health. You can also revoke Volo's Health access at any time from Settings.</p>

    <h2>Still need help?</h2>
    <p>Email <a href="mailto:support@kornval.com?subject=Volo%20Cardio%20support">support@kornval.com</a> with your question and, if it helps, which iPhone and Apple Watch you're using. We read every message.</p>

    <footer>Volo Cardio · com.kornval.volo · © 2026 Mikkel Kornval Christoffersen · <a href="https://kornval.com/volo/privacy">Privacy Policy</a></footer>
  </div>
</body>
</html>`

export function GET() {
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=86400",
    },
  })
}
