# Topeka Hydro Jetting Pros

Plain static HTML/CSS/JS. No build step. Run `python3 -m http.server 8000` in this folder, then open http://localhost:8000. Upload the folder contents to a static host.

## Before publishing
1. Replace both phoneDisplay and phoneHref in `assets/site.js`, in one place. Check it on every page and test click-to-call. The Organization schema omits a phone until a real number is supplied; add the verified phone to structured data then. The sample number is not an active affiliate number.
2. Set `formEndpoint` in `assets/site.js` to a real consent-compatible HTTPS POST endpoint. Until configured, the form deliberately does not claim success or deliver leads. Test a live submission, including an error path, and confirm it reaches the intended recipient.
3. Replace `https://example.com` everywhere including canonicals, JSON-LD, sitemap.xml and robots.txt with the real domain.
4. Replace `G-XXXXXXXXXX` on all HTML pages with the actual GA4 measurement ID, or remove analytics until configured. Test cookie/privacy settings and tracking.
5. Review privacy and terms with the actual site operator, contact details, form/analytics vendors and local legal requirements. Do not publish draft policy language unchanged. Verify wording about service availability with the eventual provider.
6. Check with the eventual provider that hydro jetting, root cutting, pressure range and inspection process match actual capabilities. The 4,000 PSI figure came from the owner's brief, not independently confirmed as this operator's equipment. No fake address, hours, team, license or ratings are claimed.

## Sources for Topeka-specific claims
- City sanitary sewer blockage guide: https://files.topeka.gov/utilities/Sewer/Sanitary+Sewer+Blockage+Guide.pdf
- City sewer backups and public-main maintenance: https://www.topeka.gov/utilities/wastewater/index.php
- City's older public sewer history (not used as a claim about private homes): https://www.cjonline.com/story/news/politics/government/2019/08/01/topeka-utilities-department-draws-attention-to-its-history/4562277007/
