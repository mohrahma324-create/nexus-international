#!/usr/bin/env bash
# نشر Nexus International على Netlify (واجهة + دوال) بأمر واحد
set -e

echo "📦 تثبيت الحزم..."
cd web && npm install && cd ..

echo "🏗️  بناء الواجهة..."
cd web && npm run build && cd ..

echo "🚀 النشر على Netlify..."
if ! command -v netlify &> /dev/null; then
  echo "⚠️  Netlify CLI غير مثبت. جاري التثبيت..."
  npm install -g netlify-cli
fi

netlify deploy --prod --dir=web/dist --functions=backend/functions

echo "✅ تم النشر بنجاح."
