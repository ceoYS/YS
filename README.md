# YSO × WeThru — Links

Static mobile-first link hub for **https://links.wethru.com/**. Hosted in GitHub repository **ceoYS/YS**.

> Reconstructed from the 2026-10-22 WeThru conversation. This is a recreation of the agreed structure, not a byte-for-byte restoration of the earlier prototype.

## Structure
- `index.html`: document layout, SEO, open graph
- `styles.css`: dark responsive layout
- `links.js`: seven links, their order and active/pending states
- `favicon.svg`: provisional original W monogram, not an official trademark asset

## Link configuration
Edit `links.js` directly. Keep unknown / unreleased destinations at `url: null, status: 'pending'`.

1. Studio — pending (featured in first position)
2. WeThru — https://wethru.com/
3. AI library — https://guides.wethru.com/
4. Profile — https://profile.wethru.com/
5. Interior — https://interior.wethru.com/
6. Journal — pending
7. Contact — https://pf.kakao.com/_wRVBX/chat (provisional consultation channel)

## Local preview
Open `index.html` in a browser, or run `python -m http.server 8000`.

## Hosting
Deploy this repo as a static website in a separate Vercel project (`wethru-links`), then assign `links.wethru.com` after confirming the exact DNS values in Vercel. Never overwrite other WeThru production projects.

Verify mobile widths 375/390/414px and desktop. Check external links, placeholder status and browser console before promotion.

See `HANDOFF.md` for context.
