# Topeka Hydro Jetting Pros

Astro static site. `npm install && npm run build` builds 16 pages into `dist/`; `npm run dev` previews locally. Cloudflare Worker serves the `dist/` static assets configured in `wrangler.jsonc`.

For the affiliate phone number or analytics on this HSP site, edit **only `src/data/siteConfig.ts`**: `phoneDisplay`, `phoneHref` (include country code, omit `tel:`), `ga4MeasurementId`, `airchattyTrackingId`, and site brand/origin. Rebuild and deploy after editing. The placeholder GA4 ID does not collect analytics until replaced.

The original page HTML is preserved in `src/data/pages.json`; Astro renders each route and replaces site-specific placeholders from the one config file. `src/layouts/LegacyPage.astro` owns that replacement. The existing `public/assets/site.js` preserves menu, form-validation, phone normalization, confirmed-success, and tracker integration behavior. No form submission should be used as a deployment smoke test without approval.
