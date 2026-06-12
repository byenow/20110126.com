# Tokyo Trip Site Design

## Goal

Replace the current countdown homepage at `20110126.com` with a polished, mobile-first Tokyo itinerary for June 18-22, 2026. The page must contain the complete trip details approved in the Lark document and deploy from the existing `gh-pages` branch.

## Architecture

The site remains a dependency-free static page. Semantic HTML provides the page shell, `app.js` owns itinerary data and rendering, and `styles.css` owns layout plus three theme systems. Public photos are stored under `assets/` so the page does not depend on third-party image availability at runtime.

## Page Structure

1. Hero with trip dates, hotel, flight summary, and next-action status.
2. Sticky day navigation for overview and June 18-22.
3. Overview with daily route cards, booking status, and departure checklist.
4. One section per day containing weather, timeline, transport notes, place cards, photos, source links, static map links, and Google Maps links.
5. Nikko section with the Klook day-tour link and the June 12 Kegon Falls flow update.
6. Footer with weather freshness and source disclaimer.

## Themes

The page supports three user-selectable themes over one content model:

- `journal`: warm paper colors, serif display typography, editorial image treatment.
- `planner`: bright neutral colors, compact timeline UI, high information density.
- `culture`: dark canvas, high-contrast typography, acid-green accents.

The selected theme is stored in `localStorage`. The default theme is `journal`, and all themes retain accessible contrast and visible focus states.

## Responsive Behavior

- Mobile is the primary layout: single-column cards, horizontally scrollable day navigation, and compact flight/weather summaries.
- Desktop uses a two-column day layout with a sticky timeline rail and place content on the right.
- Content remains usable without JavaScript through a clear loading shell and a `noscript` message; JavaScript progressively renders the structured itinerary.

## Content Rules

- Include the complete approved itinerary, transport guidance, booking state, venue recommendations, and weather snapshot dated June 12, 2026.
- Mark KITTE and Alpen Tokyo as optional.
- Mark SOMETIME as unbooked and recommend booking.
- Treat June 21 as a Klook vehicle tour and omit public-transit directions for that day.
- Show Kegon Falls flow as 0.1 m3/s weekdays and 0.2 m3/s weekends/holidays as of June 12, 2026.
- Use local optimized photos with a visible source link for every venue.
- Use static map links and Google Maps actions rather than an API-key-dependent interactive map.

## Verification

- Automated static checks verify required dates, venues, links, theme controls, local assets, and no insecure URLs.
- Browser checks cover desktop and mobile layout, all three themes, theme persistence, navigation, and external links.
- Deployment pushes the tested commit to `origin/gh-pages`, then verifies `https://20110126.com` returns the new page.

