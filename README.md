# nuast.github.io

> **NUAST Computer Science** – GitHub Pages homepage for the NUAST GitHub organisation.  
> This site acts as a gateway to student resources and repositories in the [`nuast-dev`](https://github.com/nuast-dev) organisation.

---

## 📁 Folder Structure

```
nuast.github.io/
├── index.html          ← Main homepage (edit content here)
├── css/
│   └── style.css       ← All styles (edit colours, fonts, layout here)
├── js/
│   └── main.js         ← Minimal JavaScript (mobile nav + footer year)
├── assets/
│   └── images/         ← Put school logo and images here
└── README.md           ← This file
```

---

## 🚀 Publishing with GitHub Pages

1. Go to **Settings → Pages** in this repository.
2. Under **Source**, select **Deploy from a branch**.
3. Choose the `main` branch and `/ (root)` folder.
4. Click **Save**.
5. Your site will be live at `https://nuast.github.io` within a minute or two.

> **Tip:** Any time you push a change to the `main` branch the site updates automatically.

---

## ✏️ How to Edit the Homepage

All editable areas in `index.html` are marked with an `<!-- EDIT: ... -->` comment.  
Below is a quick reference for the most common changes.

### Change the school logo

1. Save your logo file in `assets/images/`, e.g. `nuast-logo.png`.
2. In `index.html`, find the comment `<!-- EDIT: Replace the placeholder SVG with an <img> tag -->`.
3. Replace the `<svg>` placeholder with:

   ```html
   <img src="assets/images/nuast-logo.png" alt="NUAST logo" class="logo-img" />
   ```

### Change the welcome text

In `index.html`, find the `<!-- EDIT: Main headline -->` and `<!-- EDIT: Sub-heading -->` comments inside the `.hero` section and update the text.

### Change the hero background image

1. Save your image in `assets/images/`, e.g. `hero-bg.jpg`.
2. In `css/style.css`, find the comment `/* EDIT: hero background */`.
3. Update the `background` property of `.hero` to:

   ```css
   background: linear-gradient(135deg, rgba(13,27,53,.9) 0%, rgba(0,87,184,.7) 100%),
               url('../assets/images/hero-bg.jpg') center/cover no-repeat;
   ```

### Add or change a resource card

In `index.html`, find the **Featured Student Resources** section (look for `id="resources"`).  
Copy an existing `<article class="card">` block, paste it inside `.card-grid`, and update:

- The `aria-label` on `<article>`
- The emoji in `<div class="card-icon">`
- The text in `<h3 class="card-title">`
- The text in `<p class="card-desc">`
- The `href` and link text in `<a class="card-link">`

### Add or change a repository link

In `index.html`, find the **Key Repositories** section (look for `id="repositories"`).  
Copy an existing `<a class="repo-card">` block and update:

- The `href` with the real GitHub URL
- The `aria-label`
- The `<span class="repo-name">` text (organisation / **repo-name**)
- The `<span class="repo-desc">` text (short description)
- The `<span class="badge">` elements (language / topic tags)

Available badge colours: `badge-python`, `badge-javascript`, `badge-html`, `badge-markdown`.  
To add a new colour, define `.badge-yourname` in `css/style.css`.

### Add or change a platform link

In `index.html`, find the **Useful Platforms** section (look for `id="platforms"`).  
Copy an existing `<a class="platform-card">` block and update the `href`, emoji icon, name, and description.

### Change footer links

In `index.html`, find the `<!-- EDIT: footer links -->` comment inside `<footer>` and update the `<li>` items in `.footer-nav`.

### Change site colours

Open `css/style.css` and edit the **CSS custom properties** near the top of the file (inside `:root { ... }`):

| Variable | Default | Purpose |
|---|---|---|
| `--colour-primary` | `#0057b8` | Buttons, links, accents |
| `--colour-accent` | `#f5a623` | Highlight colour, "CS" wordmark |
| `--colour-dark` | `#0d1b35` | Header and footer background |
| `--colour-bg-alt` | `#f4f6fb` | Alternate section background |

---

## 🗂️ Adding a New Page

1. Create a new `.html` file in the root folder (e.g. `year12.html`).
2. Copy the `<head>`, `<header>`, and `<footer>` from `index.html`.
3. Add your content inside `<main>`.
4. Add a link to the new page in the nav and footer of `index.html`.

---

## ♿ Accessibility Notes

- All interactive elements have visible focus rings.
- Images should have meaningful `alt` text.
- The colour contrast meets WCAG AA for normal text.
- The page has a skip link for keyboard navigation.

---

## 🔗 Key Links

| Link | URL |
|---|---|
| NUAST organisation | <https://github.com/nuast> |
| nuast-dev organisation | <https://github.com/nuast-dev> |
| GitHub Pages docs | <https://docs.github.com/en/pages> |

---

*Maintained by the NUAST Computer Science Department.*