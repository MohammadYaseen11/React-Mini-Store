# تعليمات النشر السريع على GitHub Pages 🚀

## خطوات سريعة (5 دقائق) ⚡

### 1. نشر المشروع

قم بتشغيل هذا الأمر:

```bash
npm run deploy
```

### 2. تفعيل GitHub Pages

1. اذهب إلى مستودعك على GitHub
2. **Settings** > **Pages**
3. Source: اختر `gh-pages` و `/(root)`
4. اضغط **Save**

### 3. انتظر وجرب!

⏰ انتظر 2-3 دقائق ثم افتح الرابط:

```
https://YOUR-USERNAME.github.io/React-Mini-Store/
```

## تحديث الموقع 🔄

بعد أي تعديل:

```bash
git add .
git commit -m "Your commit message"
git push origin main
npm run deploy
```

## استكشاف الأخطاء 🔍

❓ **الموقع لا يظهر؟**

- تأكد من تفعيل GitHub Pages في Settings > Pages
- تأكد من Branch: `gh-pages`

❓ **الصور لا تظهر؟**

- تأكد من `base: "/React-Mini-Store/"` في `vite.config.js`

❓ **Routes لا تعمل؟**

- لا تقلق! المشروع يستخدم `HashRouter` وكل شيء سيعمل تلقائياً ✓

---

**تم الإعداد! جاهز للنشر 🎉**
