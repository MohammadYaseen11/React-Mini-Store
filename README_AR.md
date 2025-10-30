# متجر إلكتروني مصغر - React Mini Store 🛒

مشروع متجر إلكتروني مبني باستخدام React و Vite لعرض المنتجات وإدارة سلة التسوق.

## 🎯 ما تم إعداده

- ✅ إعدادات GitHub Pages
- ✅ سكربت نشر تلقائي
- ✅ إعدادات Vite للنشر
- ✅ ملفات التوثيق العربية
- ✅ HashRouter للنشر على GitHub Pages

## 🚀 النشر السريع

### الطريقة الأسهل (أمر واحد):

```bash
npm run deploy
```

ثم اذهب إلى **Settings** > **Pages** على GitHub واختر الفرع `gh-pages` كمصدر للنشر.

### الرابط بعد النشر:

```
https://YOUR-USERNAME.github.io/React-Mini-Store/
```

## 📖 خطوات مفصلة

### 1. التأكد من التثبيتات

```bash
npm install
```

### 2. بناء المشروع

```bash
npm run build
```

### 3. نشر على GitHub Pages

```bash
npm run deploy
```

### 4. تفعيل GitHub Pages

1. اذهب إلى مستودعك على GitHub
2. **Settings** > **Pages**
3. Source: `gh-pages` و `/ (root)`
4. اضغط **Save**

### 5. جرّب الموقع

انتظر دقيقة أو دقيقتين ثم افتح الرابط أعلاه.

## 🔄 تحديث الموقع

بعد أي تعديلات:

```bash
git add .
git commit -m "التحديث الجديد"
git push origin main
npm run deploy
```

## 📁 هيكل المشروع

```
React-Mini-Store/
├── src/
│   ├── api/
│   ├── components/
│   ├── pages/
│   └── App.jsx
├── public/
├── docs/              # الملفات المبنية للنشر (تُنشأ تلقائياً)
├── scripts/
│   └── ensure-nojekyll.js
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ الإعدادات المهمة

### vite.config.js

```javascript
export default defineConfig({
  plugins: [react()],
  base: "/React-Mini-Store/", // تغيير هذا حسب اسم مستودعك
  build: {
    outDir: "docs", // المجلد الذي يبني فيه Vite
  },
});
```

### مهم: تغيير اسم المستودع

إذا كان اسم مستودعك مختلف، غيّر `base` في `vite.config.js`.

## 🎨 المميزات

- 📱 متجاوب مع جميع الأجهزة
- ⚡ سريع بفضل Vite
- 🎯 سهولة التنقل مع React Router
- 💾 حفظ سلة التسوق محلياً
- 🚀 نشر سهل على GitHub Pages

## 🛠️ التقنيات

- React 19
- Vite 7
- React Router DOM
- Axios
- CSS3

## 📝 ملاحظات

- المشروع يستخدم `HashRouter` مما يجعل جميع الروابط تعمل تلقائياً على GitHub Pages
- ملف `.nojekyll` يُنشأ تلقائياً لمنع مشاكل Jekyll
- المجلد `docs` مُضاف إلى `.gitignore` ولكن `gh-pages` يرفعه كفرع منفصل

## ❓ استكشاف الأخطاء

**المشكلة:** الموقع لا يظهر  
**الحل:** تأكد من تفعيل GitHub Pages واختيار الفرع `gh-pages`

**المشكلة:** الصور لا تظهر  
**الحل:** تأكد من أن `base` في `vite.config.js` صحيح

**المشكلة:** Routes لا تعمل  
**الحل:** لا تقلق! HashRouter يعمل تلقائياً على GitHub Pages

## 📞 المساعدة

للمزيد من المعلومات راجع:

- `DEPLOY_INSTRUCTIONS.md` - تعليمات نشر سريعة
- `.github/DEPLOY.md` - دليل نشر مفصل
- `GITHUB_PAGES_SETUP.md` - ملخص الإعدادات

---

صُنع بـ ❤️ باستخدام React و Vite

**جاهز للنشر! 🚀**
