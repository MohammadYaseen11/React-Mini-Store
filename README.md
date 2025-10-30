# React Mini Store 🛒

متجر إلكتروني مصغر مبني باستخدام React و Vite لعرض المنتجات وإدارة سلة التسوق.

## المميزات ✨

- 🌐 **تصفح المنتجات**: عرض جميع المنتجات المتاحة
- 🔍 **تفاصيل المنتج**: عرض التفاصيل الكاملة لكل منتج
- 🛒 **سلة التسوق**: إضافة وإدارة المنتجات في السلة
- 💾 **LocalStorage**: حفظ محتويات السلة محلياً
- 🎨 **واجهة جميلة**: تصميم عصري ومتجاوب

## التقنيات المستخدمة 🚀

- **React 19** - مكتبة الواجهات
- **Vite** - أداة البناء
- **React Router DOM** - التوجيه
- **Axios** - طلبات HTTP
- **HTML/CSS** - التصميم

## التنصيب والتشغيل 🛠️

### المتطلبات

- Node.js (الإصدار 16 أو أحدث)
- npm أو yarn

### خطوات التنصيب

1. استنساخ المشروع:

```bash
git clone https://github.com/yourusername/React-Mini-Store.git
cd React-Mini-Store
```

2. تثبيت المكتبات:

```bash
npm install
```

3. تشغيل المشروع محلياً:

```bash
npm run dev
```

4. بناء المشروع للإنتاج:

```bash
npm run build
```

الرابط المباشر للمشروع:
🔗 **https://yourusername.github.io/React-Mini-Store/**

## هيكل المشروع 📁

```
React-Mini-Store/
├── src/
│   ├── api/
│   │   └── client.js       # إعدادات Axios
│   ├── components/
│   │   ├── Header.jsx      # رأس الصفحة
│   │   ├── Footer.jsx      # تذييل الصفحة
│   │   └── ProductCard.jsx # بطاقة المنتج
│   ├── pages/
│   │   ├── Home.jsx        # الصفحة الرئيسية
│   │   ├── Products.jsx    # صفحة المنتجات
│   │   ├── ProductDetails.jsx # تفاصيل المنتج
│   │   └── Cart.jsx        # سلة التسوق
│   ├── App.jsx             # المكون الرئيسي
│   └── main.jsx            # نقطة الدخول
├── public/                 # الملفات العامة
├── package.json            # إعدادات المشروع
├── vite.config.js          # إعدادات Vite
└── README.md               # هذا الملف
```

\

## الترخيص 📄

هذا المشروع مفتوح المصدر ومتاح للاستخدام الشخصي والتعليمي.

**صُنع بـ ❤️ باستخدام React و Vite**
