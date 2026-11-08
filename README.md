# Ratun Rahman — AI & Machine Learning Research Portfolio

A standalone, responsive GitHub Pages site prepared for `https://ratunrahman.github.io/`.

## Content

- `index.html` — complete AI/ML-focused homepage, research, publications, experience and contact
- `files/Ratun_AI_Resume.pdf` — downloadable AI/ML resume
- `research/structured-generation.html` — detailed page for NeurIPS 2026 structured-generation research
- `assets/style.css` — responsive styling
- `assets/main.js` — mobile navigation and publication filtering
- `assets/favicon.svg`, `assets/og-card.svg` — visual identity / link preview
- `sitemap.xml`, `robots.txt`, `404.html`, `.nojekyll` — site support

## Publish at the exact `ratunrahman.github.io` address

GitHub Pages reserves `NAME.github.io` for a GitHub **user or organization named `NAME`**.

**Recommended: keep your personal account `Ratun11` and create a GitHub organization called `ratunrahman`.**

1. While signed in to GitHub as `Ratun11`, create an organization named `ratunrahman` (if GitHub confirms the name is available). You will be the organization's owner.
2. Create a **public** repository owned by the organization with the exact name `ratunrahman.github.io`.
3. Upload **all contents** of this folder to the **root** of the repository, with `index.html` at the top level. Do **not** upload the containing `ratunrahman-site` directory as an extra folder.
4. In repository **Settings → Pages → Build and deployment**, select **Deploy from a branch**, `main`, folder `/ (root)`, and save.
5. The website should then be published at `https://ratunrahman.github.io/` after GitHub processes it. Confirm that the link opens.

Alternatively, create a *new GitHub user account* with username `ratunrahman` instead of an organization. Name availability can only be confirmed at registration time.

## Notes before sharing with recruiters

- The portrait currently loads from `https://ratun11.github.io/images/profile.png`. The site has an `RR` fallback. To make it self-contained, download your own profile image and save it as `assets/profile.png`, then change `src` in `index.html` to `assets/profile.png`.
- The **AI/ML Resume (PDF)** link points to `files/Ratun_AI_Resume.pdf`, already included in this ZIP. Update the PDF whenever your resume changes.
- The four secondary research cards are paper-based portfolio entries, not claims that separate public code repositories exist.
- Some publications link to your existing full publication list because stable DOI links were not confirmed. Replace with the definitive DOI / publisher URL when available.
- Ongoing research is deliberately described without claiming publication acceptance.
- The design uses Google Fonts as an enhancement; system fallbacks are provided.

## Local preview

Open `index.html` in your browser or serve this directory with:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Sources consulted

- https://ratun11.github.io/
- https://ratun11.github.io/publications/
- https://ratun11.github.io/research/
- https://ratun11.github.io/experience/
- https://arxiv.org/abs/2610.31681
- https://docs.github.com/en/pages/quickstart
