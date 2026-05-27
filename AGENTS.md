---
# AGENTS.md - brown-landing (Jorge Brown Portfolio)
opencode-init: true
skill-version: 1.8.0
domain-profile: Traditional App
compliance: None
verbosity-level: standard
expires-after: 90 days
inherits: none
created-date: 2026-05-27
operational-mode: discovery
decision-log-enabled: false
---

## Agent Profile [HIGH]
- **Role:** Web Developer — Jorge Brown Portfolio
- **Responsibilities:** Maintain and extend the static Astro landing page; add/update content sections, 360° VR experiences, photo/video galleries, and styling
- **Decision Authority:** Authorized to modify UI components, styles, content, and client-side JS. Architecture changes (e.g., new framework, backend integration) require manual approval.

## Operational Modes [HIGH]
- **Current Mode:** Discovery
- **Mode-Specific Rules:**
  - *Standard:* Follow all guardrails, standard workflow rules
  - *Refactor:* Prioritize DRY, design patterns, and component reusability; relax non-critical style rules
  - *Hotfix:* Bypass non-critical linting for speed; require post-fix technical debt entry
  - *Discovery (active):* Relax rigid guardrails for creativity; allow iterative prototyping without mandatory testing; prioritize exploration over strict conventions
  - *Emergency:* Override non-essential guardrails during critical issues; post-incident review mandatory

## Tech Stack & Tooling [HIGH]
- **Language/Runtime:** Astro 4.6, JavaScript ES2022, TypeScript (via Astro)
- **Paradigm:** Component-based (Astro islands), OOP/Functional patterns in JS
- **Typing System:** Gradual (TypeScript via `astro/tsconfigs/base`)
- **Frameworks:** Astro, Tailwind CSS 3.3, A-Frame 1.6 (VR/360°), Three.js
- **Package Manager:** npm
- **Infrastructure:** Static site (output: `dist/`), deployable to any static host
- **CI/CD:** GitHub Actions (`.github/` detected)
- **Version Control:** git

## Coding Standards [HIGH]
- **Style:** Astro/JS community conventions (standard component structure)
- **Formatting:** Recommended — Prettier with `astro` plugin
- **Typing:** Use TypeScript where practical; avoid `any` type
- **Error Handling:** Avoid bare `catch` without handling; prefer early returns and nullish coalescing

## Testing Requirements [HIGH]
- **Coverage Minimum:** Not enforced (portfolio site)
- **Test Types:** Manual visual review; no automated testing suite required
- **Framework:** None (optional: Vitest if testing is added later)

## Security & Compliance Shield [CRITICAL]
### Security Baseline
- All site assets are static/public; no backend secrets or credentials
- External JS libraries (A-Frame, Three.js) loaded from local files, not CDNs (enforced by existing policy)
- No sensitive data processed on the client
- Basic input sanitization for any form/contact functionality

## Workflow & Git [HIGH]
- **Version Control:** git
- **Commit Format:** Conventional Commits (`feat:`, `fix:`, `style:`, `refactor:`, `docs:`, `chore:`)
- **Branch Strategy:** Feature branches → merge to `main`
- **Code Review:** Recommended via GitHub PRs for non-trivial changes
- **Git Hooks:** No mandatory hooks; `pre-commit` can be added later

## Development Methodology [HIGH]
- **Approach:** Iterative / exploratory (no mandatory TDD)
- **Workflow:** Design → Implement → Preview → Refine (leveraging Astro dev server hot-reload)

## Guardrails [CRITICAL]
### Forbidden
- `eval()` or `new Function()` in production code
- Hardcoded API keys or credentials (none expected for this project)
- Unversioned large binary assets (videos, images) — keep in `public/` with meaningful names
- Inline `<script>` tags with user-supplied data without sanitization

### Mandatory
- New components should match existing patterns (`.astro` files in `src/components/`)
- Media assets go in `public/` with descriptive filenames
- Run `astro build` before committing to verify no build errors
- Respect existing responsive design patterns (Tailwind utility classes)

## Review Triggers [LOW]
This file must be updated when:
- New major dependency or framework added
- Architecture change (e.g., adding a backend, CMS, or database)
- CI/CD pipeline changes
- Quarterly review (baseline)
- **Dead Man's Switch:** Review if file older than 90 days (Created: 2026-05-27)
