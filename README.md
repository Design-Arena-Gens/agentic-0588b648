# صفحة الهبوط - السوق الجزائري

واجهة تسويقية لمنتج بسعر 3500 دينار جزائري مع توصيل مجاني لكل الولايات. مبنية باستخدام **Next.js 14** مع **Tailwind CSS**، جاهزة للنشر على Vercel.

## المتطلبات

- Node.js 18 أو أحدث
- npm

## التشغيل المحلي

```bash
npm install
npm run dev
```

بعد تشغيل الخادم، افتح `http://localhost:3000`.

## البناء والإختبار

```bash
npm run lint
npm run build
```

## النشر على Vercel

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-0588b648
```

## بنية المشروع

`app/` يحتوي على الصفحة الرئيسية، و `public/` يحتوي على الملفات الثابتة (مثل صورة المنتج).

يمكن تعديل المحتوى بسهولة من الملف `app/page.tsx`.
