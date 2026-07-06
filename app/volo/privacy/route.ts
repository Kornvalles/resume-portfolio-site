// Static privacy policy for the Volo Cardio iOS app.
// Served as a standalone HTML document at https://kornval.com/volo/privacy
// (a Route Handler so it bypasses the site layout and resolves at the exact path).

export const dynamic = "force-static"

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Volo Cardio — Privacy Policy</title>
  <meta name="description" content="Privacy policy for Volo Cardio. The app reads your Cardio Fitness (VO₂ Max) from Apple Health, read-only and on-device. No servers, no accounts, no tracking.">
  <meta name="robots" content="index,follow">
  <link rel="canonical" href="https://kornval.com/volo/privacy">
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
    .eff { color: var(--ink-faint); font-size: 13.5px; margin: 0 0 8px;
      font-variant-numeric: tabular-nums; }
    .tldr { margin: 22px 0 8px; padding: 16px 18px; background: var(--accent-soft);
      border-radius: 12px; font-size: 14.5px; color: var(--ink); }
    .tldr b { color: var(--accent-ink); }
    h2 { font-size: 17px; letter-spacing: -.01em; margin: 34px 0 8px; font-weight: 650; }
    p { color: var(--ink-soft); font-size: 15px; margin: 0 0 12px; }
    ul { margin: 0 0 12px; padding-left: 20px; color: var(--ink-soft); font-size: 15px; }
    li { margin-bottom: 6px; }
    strong { color: var(--ink); font-weight: 600; }
    a { color: var(--accent-ink); }
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

    <h1>Privacy Policy</h1>
    <p class="eff">Effective 6 July 2026</p>

    <div class="tldr">
      <b>The short version:</b> Volo Cardio reads your Cardio Fitness data from Apple Health to show it to you, right on your device. There are no accounts and no servers — your health data is never sent to us or anyone else. We couldn't see it if we tried.
    </div>

    <h2>Who we are</h2>
    <p>Volo Cardio ("Volo", "the app", "we") is a fitness app for iPhone and Apple Watch that reads your VO<sub>2</sub> Max — Apple's "Cardio Fitness" measurement — and shows where it sits across five fitness levels. It is published by Mikkel Kornval Christoffersen. You can reach us at <a href="mailto:mikkel@kornval.com">mikkel@kornval.com</a>.</p>

    <h2>What data the app accesses</h2>
    <p>With your permission, Volo reads the following from Apple Health, and <strong>only reads</strong> — it never writes, changes, or deletes anything in Apple Health:</p>
    <ul>
      <li><strong>Cardio Fitness (VO<sub>2</sub> Max)</strong> — your current reading and past history, to display your number, trend, and fitness level.</li>
      <li><strong>Date of birth</strong> — to place your reading in the correct age band.</li>
      <li><strong>Biological sex</strong> — used together with age to pick the right classification thresholds.</li>
    </ul>
    <p>Volo requests this access the first time you open it. You can review or revoke it at any time in <strong>Settings → Health → Data Access &amp; Devices → Volo</strong>, or inside the Apple Health app. If you decline, the app simply has nothing to display.</p>

    <h2>Where your data goes</h2>
    <p><strong>Nowhere.</strong> All of the above is read from Apple Health and used on your device to render the screens you see. Volo has:</p>
    <ul>
      <li>No servers or backend of its own — nothing is uploaded.</li>
      <li>No user accounts, logins, or profiles.</li>
      <li>No analytics, tracking, advertising, or third-party SDKs.</li>
    </ul>
    <p>Your health data is never collected by us, never sold, and never shared. If your Apple Health data syncs across your own Apple devices, that is handled by Apple through your iCloud settings — it is governed by <a href="https://www.apple.com/legal/privacy/">Apple's Privacy Policy</a>, not by Volo.</p>

    <h2>Volo Premium subscriptions</h2>
    <p>Volo offers an optional auto-renewable subscription (Volo Premium) that unlocks the Levels, Trends, and Profile screens. Purchases are processed entirely by <strong>Apple</strong> through the App Store using your Apple Account. We never receive or store your name, payment card, or billing details — Apple shares only anonymous, aggregate sales data with us. Apple's handling of purchases is covered by <a href="https://www.apple.com/legal/privacy/">Apple's Privacy Policy</a>.</p>

    <h2>Children's privacy</h2>
    <p>Volo is not directed at children under 13 and does not knowingly collect data from them. Because the app has no servers and collects nothing, it holds no personal data about any user, regardless of age.</p>

    <h2>Your rights</h2>
    <p>Since Volo stores none of your data off your device, there is nothing for us to export or erase on your behalf. You remain in full control: revoke the app's Health access, or delete the app, at any time. Deleting the app removes its local settings from your device; your Apple Health records are untouched and stay in Apple Health.</p>

    <h2>Changes to this policy</h2>
    <p>If this policy changes, we will update the effective date above and post the revised version at this URL. Material changes will also be reflected in an app update.</p>

    <h2>Contact</h2>
    <p>Questions about privacy or this policy? Email <a href="mailto:mikkel@kornval.com">mikkel@kornval.com</a>.</p>

    <footer>Volo Cardio · com.kornval.volo · © 2026 Mikkel Kornval Christoffersen</footer>
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
