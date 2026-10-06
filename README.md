# Aarvi's 10th Birthday Invitation 🎂

A one-page website invitation built with plain **HTML, CSS and JavaScript** — no
frameworks, no build tools. Perfect for free hosting on **GitHub Pages**.

## What's inside

| File | What it is |
|---|---|
| `index.html` | The page itself (all the text lives here) |
| `style.css` | Colors, fonts and layout |
| `script.js` | QR code, countdown, confetti, buttons + your **settings** at the top |
| `images/` | The six memory photos (currently placeholder illustrations) |
| `README.md` | This guide |

## Make it yours (do this first)

1. **Photos** — replace the files in `images/` with real photos of Aarvi,
   keeping the same names (`memory-1.jpg` … `memory-6.jpg`).
2. **Details** — open `index.html` and edit the venue, date and any wording.
3. **WhatsApp RSVP** — open `script.js` and put your number in `whatsapp`
   (digits only, country code first, e.g. `"919876543210"`).
   Leave it as `""` to hide the button.

## Put it on GitHub Pages (free)

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Click the **+** (top right) → **New repository**.
   Name it something like `aarvi-birthday-invite`, keep it **Public**, and click **Create repository**.
3. On the new repo page, click **uploading an existing file** (or **Add file → Upload files**).
4. Drag in **index.html, style.css, script.js, README.md and the images folder**
   (everything in this folder), then click **Commit changes**.
5. Go to **Settings → Pages** (left sidebar). Under "Build and deployment",
   set **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)** → **Save**.
6. Wait 1–2 minutes. Your site will be live at:
   `https://YOUR-USERNAME.github.io/aarvi-birthday-invite/`

## Point the QR code at your site

1. Copy the live address from step 6 above.
2. In `script.js`, replace `YOUR-USERNAME` in the `siteUrl` line with your
   real address.
3. Upload the updated `script.js` to the same repo (Add file → Upload files → Commit).
   The QR code updates by itself — refresh the page to see it.

## Share it

- Open the live site on a phone and screenshot the QR card, or take a
  screenshot of the whole invitation and send it on WhatsApp.
- Anyone scanning the QR opens the website — no app needed.
