# WeThru Links — context handoff

## Context (2026-10-22)
- The user requested a Linktree-like **YSO × WeThru** personal-brand hub.
- Direction: dark theme, mobile first, Studio prominently first, seven links.
- Intended public address: `https://links.wethru.com/`.
- The previous discussion proposed `ceoYS/wethru-links` but the user actually created **`ceoYS/YS`**. This is the canonical project repository.
- Source was reconstructed from the recorded brief; the earlier original HTML was unavailable.

## Constraints
- Never modify or deploy other WeThru apps when working on this link hub.
- Studio and journal pages have no confirmed destinations; show **준비 중** instead of inventing URLs.
- Contact currently leads to an existing WeThru consultation chat; confirm before promoting as the final direct collaboration channel.
- Replace provisional monogram with the approved original logo before claiming it as official.

## Deployment
- GitHub: https://github.com/ceoYS/YS
- Vercel: new independent `wethru-links` project; bind to the GitHub repo and main branch.
- Domain: `links.wethru.com` on that project only; obtain provider-specific DNS records from Vercel.
- QA: ensure root loads, CSS and JS load, active external links open correctly, pending cards are not links, no horizontal overflow and no console errors.

## Next content decisions
- Studio URL
- Journal (Threads/X/Blog) URL
- Collaboration contact endpoint
- Final logo and preview graphic
