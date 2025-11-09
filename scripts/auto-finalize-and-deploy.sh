#!/bin/bash
set -e

echo "🚦 Comprobando rutas duplicadas entre /pages y /app ..."
npm run test:routes-duplicate || true

echo "🧹 Limpieza previa antes del build ..."
npm run lint
npm run format || true


echo "⚡ Build y deploy automatizado con Vercel ..."
npm run build
vercel --prod --confirm --token $VERCEL_TOKEN

echo "✅ Chequeo automatizado terminado. Revisa la web en producción y prueba todas las funciones."