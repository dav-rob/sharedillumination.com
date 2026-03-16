# GitHub Pages + DNS checklist (sharedillumination.com)

## 1) Enable Pages in GitHub repo
In `dav-rob/sharedillumination.com`:
- Settings → Pages
- Source: **GitHub Actions**

## 2) DNS records
Configure these DNS records with your domain provider.

### Apex (`sharedillumination.com`)
Create 4 `A` records:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

### `www` redirect target
Create 1 `CNAME` record:
- Host: `www`
- Target: `dav-rob.github.io`

## 3) Repository CNAME
This repo contains `content/CNAME` with:
- `sharedillumination.com`

Eleventy publishes that file to site output via normal content copy.

## 4) Verify
- Wait for DNS propagation (often minutes, can be longer).
- Confirm Pages action run is green.
- Check:
  - `https://sharedillumination.com`
  - `https://www.sharedillumination.com`

If `www` does not redirect automatically, configure forwarding in your DNS/registrar panel.
