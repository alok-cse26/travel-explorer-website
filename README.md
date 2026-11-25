# Travel Explorer — Collect Moments. Explore the World.

A modern, responsive, and interactive frontend travel website built exclusively with **HTML5**, **CSS3**, and **Vanilla JavaScript**.

---

## Folder Structure

```text
travel-explorer-website/
│
├── index.html          # Main semantic HTML5 structure
├── style.css           # Complete responsive CSS3 styling & animations
├── script.js           # Vanilla JavaScript interactivity & budget calculator
├── assets/
│   └── images/         # High-resolution local travel photography
│       ├── hero-bg.jpg
│       ├── goa.jpg
│       ├── manali.jpg
│       ├── jaipur.jpg
│       ├── kerala.jpg
│       ├── bali.jpg
│       ├── dubai.jpg
│       ├── pkg-weekend.jpg
│       ├── pkg-explorer.jpg
│       └── pkg-beyond.jpg
└── README.md           # Project documentation & VS Code launch guide
```

---

## Key Features

1. **Homepage Hero Section**
   - Brand logo (**Travel Explorer**), sticky glassmorphism navigation bar, full-bleed background photography, editorial headline (*"Collect Moments. Explore the World."*), **Explore Destinations** and **Plan Your Trip** buttons, and live highlight statistics.
2. **Destinations Section with JavaScript Category Filters**
   - 6 curated destination cards (**Goa**, **Manali**, **Jaipur**, **Kerala**, **Bali**, **Dubai**) complete with local photography, country tags, descriptions, starting prices in Indian Rupees (`₹`), and interactive **Explore** modals.
   - Instant category filtering across **All**, **Beaches**, **Mountains**, **Cities**, and **Nature**.
3. **Curated Travel Packages**
   - 3 signature travel packages (**Weekend Wanderer**, **The Explorer**, **Beyond Borders**) displaying visuals, pricing, duration, included facilities, and interactive itinerary modals.
4. **Interactive Travel Budget Calculator**
   - Select destination, number of travellers (`1–20`), duration in days (`1–30`), and travel style (**Budget**, **Comfort**, **Premium**).
   - Calculates total estimated cost in **Indian Rupees (₹)** along with per-person cost, daily average, and an itemized breakdown (Accommodation, Transport, Dining, and Activities).
5. **Interactive Photo Gallery & Lightbox**
   - 6 high-resolution travel photographs with smooth hover animations, slide-up captions, and full-screen click-to-enlarge lightbox modal with Next/Previous and keyboard (`ArrowLeft`, `ArrowRight`, `Escape`) navigation.
6. **Responsive Navigation & Mobile Hamburger Drawer**
   - Mobile hamburger toggle menu, scroll-reveal animations, active navigation scrollspy, custom trip inquiry form, newsletter signup, and a floating **Back-to-Top** button.

---

## How to Open and Run in Visual Studio Code

No `npm install`, Node.js, or backend server is required.

### Option 1: Using VS Code Live Server (Recommended)
1. **Unzip** `travel-explorer-website.zip` (if starting from the ZIP archive).
2. Open **Visual Studio Code**.
3. Click **File → Open Folder...** and select the `travel-explorer-website` folder.
4. Open the **Extensions** panel (`Ctrl+Shift+X` on Windows/Linux or `Cmd+Shift+X` on macOS) and search for **Live Server** by *Ritwick Dey* (if not already installed).
5. In the VS Code Explorer sidebar, right-click on `index.html` and select **"Open with Live Server"** (or click the **"Go Live"** button in the bottom-right status bar).
6. The website will automatically open in your default browser at `http://127.0.0.1:5500/index.html`.

### Option 2: Direct Browser Launch
- Simply double-click `index.html` inside the `travel-explorer-website` folder to open it directly in Chrome, Safari, Edge, or Firefox.
