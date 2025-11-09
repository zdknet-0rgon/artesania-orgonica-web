#!/bin/bash
set -e

echo "🚦 Comprobando rutas y build para Vercel ..."
npm run lint
npm run build
vercel --prod --confirm --token $VERCEL_TOKEN

echo "✅ Chequeo terminado. Navega la web en producción y revisa rutas, productos, internacionalización y menús."