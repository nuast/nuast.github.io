# NUAST Curriculum Hub (`nuast.github.io`)

A GitHub Pages site for NUAST curriculum resources, designed for students, staff, and parents.

## Site purpose

This site is a clean landing page for NUAST curriculum repositories, with a focus on:

- six core curriculum repositories
- browsing by Key Stage (KS3 / KS4 / KS5)
- quick access to featured resources

## Folder tree

```text
.
├── _config.yml
├── _data/
│   └── resources.yml
├── _includes/
│   ├── footer.html
│   ├── nav.html
│   └── resource-card.html
├── _layouts/
│   ├── default.html
│   └── page.html
├── about.md
├── assets/
│   ├── css/
│   │   └── site.css
│   ├── img/
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── hero/
│   │   ├── icons/
│   │   ├── logo/
│   │   │   ├── nuast-logo-github.svg
│   │   │   └── nuast-logo.svg
│   │   ├── nuast-logo-github.svg
│   │   ├── nuast-logo.png
│   │   └── nuast-logo.svg
│   └── js/
│       └── site.js
├── index.md
└── resources.md
```

## Update curriculum resource links

Edit only this file:

- `_data/resources.yml`

Each repository entry includes:

- `title`
- `stage`
- `subject`
- `description`
- `repo_name`
- `repo_url`
- `readme_url`
- `docs_url`
- `featured`
- `icon`

Pages will update automatically from this data source.

## Replace images and logos

- Main logo: `assets/img/logo/nuast-logo.svg`
- Optional extra logos: `assets/img/logo/`
- Add hero assets to: `assets/img/hero/`
- Add icon assets to: `assets/img/icons/`

If logo filename/path changes, update `_includes/nav.html`.

## Publish with GitHub Pages

1. Go to **Repository Settings → Pages**.
2. Under **Build and deployment**, select **Source: Deploy from a branch**.
3. Select branch: `main` and folder: `/ (root)`.
4. Save.

GitHub Pages will build the Jekyll site automatically on push.
