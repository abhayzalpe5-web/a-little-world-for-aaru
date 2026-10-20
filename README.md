# A Little World for Aaru ❤️

[![Live Website](https://img.shields.io/badge/Live%20Website-Visit%20Aaru's%20World-ff69b4?style=for-the-badge&logo=github)](https://abhayzalpe5-web.github.io/a-little-world-for-aaru/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-success?style=for-the-badge)](https://abhayzalpe5-web.github.io/a-little-world-for-aaru/)

> **Live Website URL**: **[https://abhayzalpe5-web.github.io/a-little-world-for-aaru/](https://abhayzalpe5-web.github.io/a-little-world-for-aaru/)**  
> **GitHub Repository**: **[https://github.com/abhayzalpe5-web/a-little-world-for-aaru](https://github.com/abhayzalpe5-web/a-little-world-for-aaru)**

A dreamy, romantic, premium digital birthday scrapbook created with love for **Arpita** (affectionately called **Aaru**).

Built entirely with React, Vite, and custom CSS/SVG illustrations. **Zero photographs of people** are used—every page, letter, card, and animation is handcrafted using romantic paper textures, washi tape, wax seals, stamps, flowers, hearts, stars, ribbons, and sweet doodles.

---

## 🎀 Features & Highlights

1. **Romantic Password Gate**:
   - Initial secret screen with an illustrated envelope, wax seal, and ribbon.
   - Secret Password: `2110` (with show/hide toggle and Enter key support).
   - Unlocks with an opening envelope animation and floating pink hearts.
   - *Note on Security*: The gate is implemented client-side in frontend React as a romantic decorative surprise. It does not provide server-side encryption.
2. **Welcome Scrapbook Page**:
   - Heading: *"Welcome to Your Little World, Aaru ❤️"*
   - Subtitle: *"A tiny corner of the universe, made with a whole lot of love."*
   - Bespoke CSS/SVG illustrations of a cute Teddy Bear holding a heart and an open vintage letter.
3. **Birthday Countdown (Asia/Kolkata IST)**:
   - Targets **21 October 2025** (Asia/Kolkata timezone).
   - Handles past dates gracefully without negative numbers, displaying:
     > *"Happy Birthday, My Beautiful Aaru! 🎂❤️"*  
     > *"Today, tomorrow, and every day, you deserve to feel special."*
   - Includes a one-click toggle to preview live countdown cards (Days | Hours | Minutes | Seconds) for the upcoming birthday.
4. **3-Tier Illustrated Birthday Cake**:
   - Three layers of blush frosting, scalloped cream, strawberries, hearts, sprinkles, and glowing candles.
   - *"Make a Wish, Aaru! ✨"* button blows out candles, triggers a double confetti burst, and reveals a heartfelt birthday wish.
   - *"Light the Candles Again 🎂"* button brings the flickering flames back to life.
5. **Four Functional Scrapbook Navigation Tabs**:
   - **Tab 1: Birthday Home 🎂** (Welcome story, Countdown, Cake, Special Journal Letter, Final Gift).
   - **Tab 2: Birthday Wishes 💌** (Open illustrated love letter with stamps, stickers, and interactive *"Send a Virtual Hug 🤗"* modal with a pulsating heart).
   - **Tab 3: 100 Reasons I Love You 💗** (Exactly 100 unique interactive flip cards, discovery progress bar, *"Give Me a Random Reason 🎲"*, *"Reveal All ✨"*, and *"One Last Reason... 💌"* secret modal).
   - **Tab 4: Our Love Scrapbook 🎀** (10 horizontal illustrated slides with touch swiping on mobile, arrow controls, pagination dots, and paper tilt).
6. **Full Handwritten Journal Section**:
   - *"Why You Will Always Be Special to Me, Aaru ❤️"* with warm, personal words celebrating her kindness, dreams, and individuality.
   - Concludes with the signature declarations:
     - `I LOVE YOU, AARU. ❤️`
     - `HAPPY BIRTHDAY, AARU! 🎂💗`
7. **Final Interactive Gift Box**:
   - Illustrated pink gift box with satin ribbon.
   - *"Open Your Final Gift ❤️"* button lifts the lid off, releases confetti, and reveals the final closing letter and glowing heart.
8. **Ambient Particles & Dreamy Music Box**:
   - Gentle falling flower petals, floating hearts, and sparkling stars via `<canvas>` with reduced-motion accessibility support.
   - Built-in Web Audio API soothing music-box lullaby synthesizer (plays offline with zero external audio files, with play/pause, mute, and volume slider).

---

## 🚀 Running the Website Locally

### Prerequisites
- Node.js (version 18 or newer recommended, verified on Node v24)
- npm (version 9 or newer)

### Step 1: Install Dependencies
Open your terminal in the project directory and run:
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```
Open the URL shown in your terminal (usually `http://localhost:5173`) in your web browser.

### Step 3: Test Production Build
```bash
npm run build
npm run preview
```

---

## 🎨 How to Customize the Website

All customizable text, dates, reasons, and settings are cleanly organized in the `src/data/` folder:

### 1. Change Aaru's Name, Nickname, or Secret Password
Open [`src/data/config.js`](./src/data/config.js):
```javascript
export const CONFIG = {
  fullName: "Arpita",        // Full name
  nickname: "Aaru",          // Nickname used across the website
  websiteTitle: "A Little World for Aaru ❤️",
  secretPassword: "2110",    // Secret passcode to enter
  passwordHint: "Hint: A very special date (DDMM) 🎀",
  birthdayDate: "2025-10-21T00:00:00+05:30", // Primary birthday date (IST)
  ...
};
```

### 2. Change the Birthday Date or Timezone
In [`src/data/config.js`](./src/data/config.js), modify `birthdayDate` or `nextBirthdayDate`:
```javascript
birthdayDate: "2026-10-21T00:00:00+05:30", // Format: YYYY-MM-DDTHH:mm:ss+05:30
timezone: "Asia/Kolkata",
```

### 3. Edit the Birthday Letters & Messages
Open [`src/data/loveLetter.js`](./src/data/loveLetter.js):
- `BIRTHDAY_WISHES_LETTER`: Edit the letter displayed under **Tab 2 (Birthday Wishes)**.
- `WHY_YOU_ARE_SPECIAL_LETTER`: Edit the journal entry displayed in the **Why You Are Special** section.
- `FINAL_GIFT_MESSAGE`: Edit the message revealed when opening the final gift box.

### 4. Edit or Add to the 100 Reasons
Open [`src/data/reasons.js`](./src/data/reasons.js):
Each reason is an object with an `id`, `text`, `color`, and `doodle`:
```javascript
{
  id: 1,
  text: "I love your smile because it can brighten an ordinary day.",
  color: "pink", // Options: pink, cream, lavender, peach, rose, mint
  doodle: "heart" // Options: heart, star, flower, bow, ribbon, sparkle
}
```

### 5. Customize the 10 Scrapbook Pages
Open [`src/data/scrapbookSlides.js`](./src/data/scrapbookSlides.js):
You can adjust the title, caption, message, sticker text, and paper color for any of the 10 slides.

---

## 📦 Deploying to GitHub & Render

### Step 1: Upload to GitHub
1. Initialize git and commit files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: A Little World for Aaru ❤️"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Push your repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   git push -u origin main
   ```

### Step 2: Deploy on Render (Static Site)
This project is pre-configured for seamless Render deployment with both `render.yaml` and `public/_redirects`:

1. Sign in to [Render](https://dashboard.render.com/).
2. Click **New +** → **Static Site**.
3. Connect your GitHub repository.
4. Fill in the following settings:
   - **Name**: `a-little-world-for-aaru`
   - **Branch**: `main`
   - **Root Directory**: *(leave blank)*
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. Click **Create Static Site**.
6. Render will build and deploy your website automatically with a secure `https://...` URL.

#### Client-Side Routing Note:
The file [`public/_redirects`](./public/_redirects) ensures that all single-page application requests are redirected to `/index.html`:
```text
/*    /index.html   200
```

---

## 💖 Signature Declarations
Throughout this digital scrapbook, the most important reminders are always front and center:
- **`I LOVE YOU, AARU. ❤️`**
- **`HAPPY BIRTHDAY, AARU! 🎂💗`**
- *Made with love, only for you. ♡*
