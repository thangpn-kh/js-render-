# JSX figure hosting

File render: `jsx-figure-v1.js`. Thu vien JSXGraph duoc tai tu cung thu muc.

## Cloudflare Pages

- Framework preset: None
- Production branch: main
- Build command: `node build.mjs`
- Build output directory: `dist`

Ket noi repository GitHub `thangpn-kh/js-render-` trong Cloudflare Pages de tu dong trien khai sau moi lan push.

Neu trien khai truc tiep bang CLI:

```powershell
node build.mjs
npx wrangler pages deploy dist --project-name jsx-figure-render --branch main
```

Dung URL production cua Pages, khong dung URL preview theo tung lan deploy.

`_headers` cau hinh file render voi `Cache-Control: no-cache`: trinh duyet kiem tra ban moi khi tai lai trang. Trang dang mo khong tu doi code. JSXGraph 1.13.3 duoc cache dai han; khi nang thu vien, doi ten file theo phien ban va cap nhat duong dan trong file render.
