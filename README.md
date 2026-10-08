# Chaiwan Wisedrat — Internship Portfolio

Portfolio สำหรับสมัครฝึกงาน (Full-Stack & Mobile) ทำด้วย HTML, Tailwind CSS และ JavaScript

🔗 เว็บไซต์: https://chaiwanlp.github.io/Portfolio_Chaiwan/

## โปรเจกต์ในเว็บ
- **Easy Pencil** — Java, LWJGL, OpenGL
- **LexiLoops** — React 19, Vite 7, Tailwind CSS 4, tRPC 11, Drizzle ORM, Postgres (Supabase)
- **Todo-List Application — Flowday** — Angular 22, Tailwind CSS v4, Node.js 24, Express 4, PostgreSQL
- **WebCoinGame** — Angular, Firebase, TailwindCSS

## โครงสร้าง
```
index.html          หน้าเว็บ (ใช้คลาสของ Tailwind)
src/input.css       ไฟล์ต้นฉบับของ Tailwind (ตัวแปรสี คอมโพเนนต์ แอนิเมชัน)
css/style.css       CSS ที่ build แล้ว (ต้อง commit ขึ้น GitHub ด้วย)
js/main.js          เอฟเฟกต์ตอนเลื่อนหน้า, ตัวนับเลข, แถบความคืบหน้า
tailwind.config.js  ตั้งค่าสี ฟอนต์ และ keyframes
```

## พัฒนาต่อบนเครื่อง
```bash
npm install
npm run dev     # ดูการแก้ไขแบบ watch
npm run build   # build CSS ก่อน commit ทุกครั้ง
```

## ขึ้น GitHub Pages (GitHub Actions)
เว็บจริงอยู่ในโฟลเดอร์ `Portolio/` (repo root ไม่มี `index.html`) เลย deploy ด้วย Actions แทนแบบ branch

1. Push ขึ้น `main`
2. Settings → Pages → Source → `GitHub Actions`
3. Workflow `.github/workflows/pages.yml` จะ `npm ci + npm run build` แล้วอัปโหลด `Portolio/` ขึ้น Pages
4. รอ 1–2 นาที แล้วเข้า https://chaiwanlp.github.io/Portfolio_Chaiwan/

## ติดต่อ
- GitHub: https://github.com/chaiwanLP
- Resume: `docs/Chaiwan_Wisedrat_Resume.pdf`
