# Ratun Rahman — AI/ML Research Portfolio (Updated)

Static GitHub Pages website for **https://ratunrahman.github.io/**. This is a **complete replacement upload**, not a diff or patch.

## What is new

1. Direct AI/ML resume PDF links in both the top navigation and homepage intro.
2. Verified paper links to publishers/DOIs for five journal papers; the NeurIPS paper has its direct arXiv link. The 2024 workshop entry retains the existing academic-site link pending a verified direct PDF URL.
3. NeurIPS 2026 project page with benchmark numbers from the authors' public OpenReview ablation response, a readable comparison graphic and clear limitations. These results are correctly identified as an ablation, not as deployment latency tests.
4. Dedicated published federated-LLM project page with publisher-reported communication and accuracy result.
5. Dedicated ongoing, **under-review** interference-aware RAG research page that does not invent results or claim publication acceptance.
6. Expanded research cards, updated sitemap, clearer portrait fallback.

## Publish over your existing website (no new repository)

1. Open **https://github.com/ratunrahman/ratunrahman.github.io** → **Code**.
2. Download and **extract** this ZIP. Upload **all files and folders inside** it (not the ZIP and not an enclosing folder).
3. If you drag folders from your file browser onto GitHub's **Add file → Upload files** screen, they preserve relative paths; when asked, replace the old files at the same paths (GitHub's browser upload may not offer replacement in all workflows). If you encounter duplicate-name warnings, edit/replace the old tracked files instead, or use GitHub Desktop to sync a full folder replacement. For a straightforward browser-only update: upload **new files** first (`research/federated-llm.html`, `research/interference-aware-rag.html`), then update `index.html`, `assets/style.css`, `research/structured-generation.html`, `sitemap.xml`, and `README.md` with GitHub's inline editor or GitHub Desktop.
4. Commit to **main**. GitHub Pages automatically rebuilds from `main` → `/ (root)`.
5. Check homepage, nav, publication links, project pages and `files/Ratun_AI_Resume.pdf`.

## Optional: make your portrait self-contained

The homepage keeps the verified public source image URL `https://ratun11.github.io/images/profile.png`. It displays an RR monogram if loading fails. For fully independent hosting: download your existing photo from that URL, save it as **assets/profile.jpg**, and replace the `src` attribute of the portrait image in `index.html` with `assets/profile.jpg`. No replacement portrait was generated or assumed.

## Editorial notes

- NeurIPS 2026 source: https://arxiv.org/abs/2610.31681 and https://openreview.net/forum?id=Uo6FQhB7p7 (author response for graph + single-reference ablation). Model/page numbers are reported as exact match (EM, %) and improvements as percentage points.
- Published LLM fine-tuning result: DOI https://doi.org/10.1109/LCOMM.2025.3621354 (>90% communication-volume reduction, within 1% of centralized baseline accuracy on the reported tasks).
- Published Meta-BayFL: https://doi.org/10.1109/TETCI.2026.3683744
- Multimodal air quality: https://doi.org/10.1109/LGRS.2025.3573214
- Smart-meter forecast: https://doi.org/10.1109/JIOT.2025.3586115
- Modulation recognition: https://doi.org/10.1109/TVT.2024.3447569
- RAG manuscript described as ongoing / under review; no unsupported performance metrics, public repository or publication claims.
- Existing `files/Ratun_AI_Resume.pdf` is included unchanged. Replace later as your resume evolves.
