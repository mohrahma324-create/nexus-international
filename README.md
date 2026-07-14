# Nexus International

منصة عقارية دولية متعددة اللغات — عرض عقارات، أدوات مالية تفاعلية، ولوحة إدارة.

## هيكل المشروع (Monorepo)

```
nexus-international/
├── .github/workflows/   # CI/CD — نشر تلقائي على Netlify عند كل push لـ main
├── backend/             # Netlify Functions (serverless) + تكامل Supabase
├── web/                 # الواجهة الأمامية — React 19 + TypeScript + Vite + Tailwind
├── mobile/              # تطبيق الموبايل (Expo / React Native) — سكافولد أولي
├── deploy.sh            # سكريبت نشر يدوي عبر Netlify CLI
└── netlify.toml         # إعدادات البناء والنشر لـ Netlify
```

## لماذا هذا التصميم؟

- **web** و **backend** كلاهما يُنشران معًا على **Netlify** المجاني: الواجهة كموقع ثابت (static build)، والـ backend كـ Netlify Functions (serverless، بدون سيرفر دائم يحتاج فوترة).
- **قاعدة البيانات**: Supabase (طبقة مجانية) — تُستخدم من داخل الـ Functions فقط، أبدًا من المتصفح مباشرة، لحماية المفاتيح السرية.
- **mobile** منفصل لأن Netlify لا يستضيف تطبيقات موبايل؛ يُبنى لاحقًا بـ Expo EAS وينشر على المتاجر، لكنه يتشارك نفس الـ backend endpoints.

## التشغيل محليًا

```bash
# الواجهة
cd web && npm install && npm run dev

# الدوال (محاكاة محلية عبر Netlify CLI)
netlify dev
```

## النشر

راجع `deploy.sh` — ينشر الواجهة والدوال معًا بأمر واحد.

## متغيرات البيئة المطلوبة (Netlify → Site settings → Environment variables)

| المتغير | الوصف |
|---|---|
| `SUPABASE_URL` | رابط مشروع Supabase |
| `SUPABASE_SERVICE_KEY` | مفتاح الخدمة (سري — يُستخدم في الـ Functions فقط) |
| `VITE_SUPABASE_ANON_KEY` | مفتاح عام آمن للواجهة (قراءة فقط) |

## خارطة الطريق

1. ✅ سكافولد الواجهة + الدوال + هيكل المشروع
2. ⬜ ربط Supabase الفعلي (جداول: properties, leads, agents)
3. ⬜ لوحة تحكم للإدارة (CRUD للعقارات)
4. ⬜ تطبيق الموبايل الكامل (Expo)
5. ⬜ نظام دفع/عمولات (Stripe)
