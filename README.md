# Programmer — Full-Stack Developer Portfolio

A modern, animated portfolio website built with **React 19**, **Vite**, **Tailwind CSS v4**, and **shadcn/ui**.

## ✨ Features

- Modern shadcn/ui design with a zinc color theme
- Dark / light mode toggle (persisted to `localStorage`)
- Scroll-reveal animations powered by Motion (InView, Stagger, Collapse, Pressable)
- Fully responsive layout (mobile menu with animated collapse)
- Project cards with images (free-for-commercial-use from Unsplash, stored locally)
- Contact form with validation-ready UI
- Icons from react-icons (Tabler set)
- Inter + JetBrains Mono fonts
- Custom logo in the header, footer, and browser favicon

## 🛠 Tech Stack

| Category  | Technologies |
|-----------|--------------|
| Core      | React 19, Vite 6, JavaScript (JSX) |
| Styling   | Tailwind CSS v4, shadcn/ui, tw-animate-css |
| Icons     | react-icons (Tabler) |
| Animation | motion (formerly Framer Motion) |
| Radix     | @radix-ui/react-slot, -label, -separator |
| Utils     | class-variance-authority, clsx, tailwind-merge |

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

### Scripts

| Command            | Description                     |
|--------------------|---------------------------------|
| `npm run dev`      | Start the Vite dev server       |
| `npm run build`    | Create a production build       |
| `npm run preview`  | Preview the production build    |

## 📁 Project Structure

```
├── public/
│   └── images/            # Local images & logo
├── src/
│   ├── components/
│   │   ├── sections/      # Hero, About, Skills, Projects, Experience, Services, Contact
│   │   ├── ui/            # shadcn/ui components + motion primitives
│   │   ├── site-header.jsx
│   │   ├── site-footer.jsx
│   │   └── theme-provider.jsx
│   ├── lib/
│   │   └── utils.js       # cn() helper
│   ├── App.jsx
│   ├── index.css          # Tailwind v4 + shadcn theme
│   └── main.jsx
├── index.html
├── jsconfig.json
├── package.json
└── vite.config.js
```

## 📦 Customizing

- **Colors / theme**: edit CSS variables in `src/index.css`
- **Content**: edit the data arrays in `src/components/sections/*.jsx`
- **Logo**: replace `public/images/logo.png`
- **Fonts**: update the Google Fonts link in `index.html` and tokens in `src/index.css`

## 📄 License

Images are from Unsplash (Unsplash License — free for commercial use). The rest of the code is free to use for your own portfolio.
