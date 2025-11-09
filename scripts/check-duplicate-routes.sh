#!/bin/bash
DUPLICATES=""
for page_file in pages/*.tsx; do
  route_name=$(basename "$page_file" .tsx)
  if [ -e "app/$route_name/page.tsx" ]; then
    DUPLICATES="$DUPLICATES\nDUPLICATE: $page_file <==> app/$route_name/page.tsx"
  fi
done

if [ ! -z "$DUPLICATES" ]; then
  echo -e "⛔️ Duplicated routes detected entre /pages y /app:\n$DUPLICATES"
  exit 1
fi
