# Deploying isuria — GitHub Pages (free)

Static site. No build step. Free hosting, free TLS, custom-domain support.
This is the same setup as the Tequila Tres Ese site.

## 1. Create the repo on GitHub
- New repository under the **Krulish79** account, e.g. `isuriacorp.com` (public).
- Don't add a README/license (this folder already has the files).

## 2. Push this folder
From inside this folder:

```sh
git remote add origin https://github.com/Krulish79/isuriacorp.com.git
git branch -M main
git push -u origin main
```

## 3. Turn on Pages
GitHub repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main** / **/ (root)** → Save.
Within a minute the site is live at: `https://krulish79.github.io/isuriacorp.com/`
**Review it here first.** Wix stays up and untouched until step 4.

## 4. Point isuriacorp.com (only when you're happy)
1. Create a file named `CNAME` in this folder containing exactly:
   ```
   isuriacorp.com
   ```
   then commit + push. (Or set it in Settings → Pages → Custom domain.)
2. At **Turbify** (your registrar), set DNS:
   - Four `A` records for the apex `@` → GitHub Pages IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` for `www` → `krulish79.github.io`
3. Back in Settings → Pages, tick **Enforce HTTPS** once the cert is issued.
4. In **Wix**, disconnect the domain so it stops serving / billing for it.

DNS can take a few hours to propagate. Until then the github.io URL keeps working.

## Email (separate from hosting)
GitHub Pages does **not** do email. The contact form opens the visitor's mail
app addressed to `contact@isuriacorp.com` (no server, no cost).
For that address to receive mail, set up **free email forwarding at Turbify**
(point `contact@isuriacorp.com` to whatever inbox you actually read).
Nothing about the website needs to change for this.

## Updating the site later
Edit files → `git commit` → `git push`. Pages redeploys automatically.
```sh
git add -A && git commit -m "update" && git push
```
