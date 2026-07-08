# SEO worktree

## Done in this worktree

- Blog pages are present in the app and included in the static export.
- Sitemap generation now includes the blog with business page priorities instead of the same daily priority for every URL.
- Netlify build no longer runs `next-sitemap` twice.
- Netlify no longer rewrites every unknown URL to the homepage, so real missing pages can return the generated 404 page.

## Next SEO priorities

1. Deploy the current worktree, then verify these production URLs return 200:
   - `https://www.agenceaetheria.com/blog/`
   - `https://www.agenceaetheria.com/blog/combien-coute-un-agent-ia-pme/`
   - `https://www.agenceaetheria.com/blog/ia-et-rgpd-pme/`
2. Submit `https://www.agenceaetheria.com/sitemap.xml` in Google Search Console.
3. Request indexing for the homepage, `agence-ia-nancy`, `agents-ia-pme`, `secteurs`, and the three blog URLs after production verification.
4. Create and optimize the Google Business Profile for AetherIA Nancy.
5. Move FAQ structured data out of the global layout and keep FAQ schema only on pages where the FAQ is visible.
6. Complete legal and trust signals: SIRET, NAP consistency, phone if available, founder profile, and client proof.
7. Build dedicated sector pages for expert comptable, assurance, immobilier, commerce, BTP and dirigeants PME.
8. Add proof assets for case studies: screenshots, workflow before and after, testimonials, dates and measurable gains.
9. Get local and business backlinks: LinkedIn, Google Business Profile, Sortlist, Malt, Codeur, French Tech, local Nancy and Grand Est directories, partners and clients.
