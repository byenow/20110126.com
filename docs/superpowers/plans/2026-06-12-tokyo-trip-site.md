# Tokyo Trip Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the countdown homepage with a complete, three-theme Tokyo itinerary and publish it through the existing GitHub Pages branch.

**Architecture:** Use a static semantic shell in `index.html`, a structured itinerary model and renderer in `app.js`, and responsive theme tokens in `styles.css`. Store optimized public images in `assets/` and validate the result with a dependency-free Node test.

**Tech Stack:** HTML5, CSS custom properties, vanilla JavaScript, Node.js built-in test utilities, GitHub Pages

---

### Task 1: Static Test Contract

**Files:**
- Create: `tests/site.test.mjs`

- [ ] Write a Node test that loads `index.html`, `styles.css`, and `app.js`; verifies the five dates, required venues, Klook URL, Google Maps links, three theme names, `localStorage`, and local image references.
- [ ] Run `node --test tests/site.test.mjs` and confirm it fails because the new split files and itinerary model do not exist.
- [ ] Commit the failing contract with `git add tests/site.test.mjs && git commit -m "test: define Tokyo itinerary site contract"`.

### Task 2: Local Image Assets

**Files:**
- Create: `assets/*.jpg`

- [ ] Download two representative public photos for each primary itinerary stop using the approved source list.
- [ ] Resize oversized files to a maximum 1600-pixel edge and use web-friendly JPEG quality.
- [ ] Verify every asset is non-empty with `find assets -type f -size +0 -print`.
- [ ] Commit with `git add assets && git commit -m "assets: add Tokyo itinerary photography"`.

### Task 3: Semantic Page Shell

**Files:**
- Replace: `index.html`

- [ ] Replace the countdown markup with a semantic header, theme switcher, sticky day navigation, itinerary root, and footer.
- [ ] Include metadata, accessible labels, a `noscript` notice, and links to `styles.css` and `app.js` without third-party runtime scripts.
- [ ] Run the static test and confirm only content/style expectations remain failing.

### Task 4: Complete Itinerary Data and Rendering

**Files:**
- Create: `app.js`

- [ ] Define the complete June 18-22 itinerary, including flights, hotel, weather, timelines, venues, transport, booking states, image credits, maps, Klook, and Kegon flow data.
- [ ] Implement pure render helpers for summary cards, weather, timelines, place cards, photo galleries, map actions, and checklists.
- [ ] Implement sticky navigation activation and internal day links.
- [ ] Run `node --test tests/site.test.mjs` and confirm content tests pass.

### Task 5: Responsive Three-Theme UI

**Files:**
- Create: `styles.css`

- [ ] Add mobile-first layout tokens, typography, cards, weather chips, timelines, image galleries, booking badges, map actions, and accessible focus states.
- [ ] Implement `journal`, `planner`, and `culture` theme variables selected by `data-theme`.
- [ ] Implement the theme switcher in `app.js`, persist the choice under `tokyo-theme`, and update `aria-pressed` state.
- [ ] Run `node --test tests/site.test.mjs` and confirm all tests pass.
- [ ] Commit source files with `git add index.html app.js styles.css tests/site.test.mjs && git commit -m "feat: build themed Tokyo itinerary homepage"`.

### Task 6: Browser Verification

**Files:**
- Modify as needed: `index.html`, `app.js`, `styles.css`

- [ ] Serve the repository locally and open it in the browser.
- [ ] Verify desktop and mobile screenshots, theme switching, refresh persistence, day navigation, image loading, and external link targets.
- [ ] Fix any visual or interaction defects and rerun the Node test.
- [ ] Commit fixes with `git add index.html app.js styles.css tests/site.test.mjs && git commit -m "fix: polish itinerary responsive behavior"` when changes are required.

### Task 7: Deploy and Verify GitHub Pages

**Files:**
- Existing: `CNAME`, `.nojekyll`

- [ ] Confirm `CNAME` remains `20110126.com` and `.nojekyll` remains present.
- [ ] Run `git status --short`, `node --test tests/site.test.mjs`, and a local HTTP smoke test.
- [ ] Push `gh-pages` with `git push origin gh-pages`.
- [ ] Poll `https://20110126.com` until the response contains the new Tokyo itinerary title and verify the custom domain returns HTTP 200.

