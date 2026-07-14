# Nexus International — Mobile (سكافولد أولي)

Netlify لا يستضيف تطبيقات الموبايل، لذلك هذا المجلد منفصل ويُبنى وينشر بشكل مستقل، لكنه يستهلك نفس الـ API الموجود في `backend/functions` (نفس روابط `/api/properties` و `/api/leads` بعد نشر الموقع).

## التقنية المقترحة

**Expo (React Native)** — لأنه:
- يشارك منطق TypeScript مع مشروع `web`
- بناء ونشر سريع عبر EAS Build إلى App Store و Google Play بدون Mac مطلوب
- طبقة مجانية كافية للبداية

## خطوات البدء

```bash
npx create-expo-app@latest . --template blank-typescript
npm install @react-navigation/native @react-navigation/native-stack
```

ثم أنشئ نفس صفحات الويب (الرئيسية، العقارات، تفاصيل العقار، تواصل معنا) كشاشات، واستخدم نفس نقاط الـ API:

```ts
const API_BASE = "https://<your-site>.netlify.app/api";
fetch(`${API_BASE}/properties`);
```

## لماذا لم يُبنى بالكامل الآن؟

بناء تطبيق موبايل كامل جاهز للنشر على المتاجر مهمة منفصلة وأكبر (تتطلب حسابات مطورين، شاشات توقيع، مراجعة المتجر). هذا المجلد جاهز كنقطة انطلاق — أخبرني متى تريد نبدأ فيه فعليًا وسأبني الشاشات.
