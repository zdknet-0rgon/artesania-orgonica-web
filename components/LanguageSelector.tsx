import React, { useState } from 'react';
import Link from 'next/link';

const LANGUAGES = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'pt', label: 'Português' },
  { code: 'de', label: 'Deutsch' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'it', label: 'Italiano' }
];

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        style={{ background: "#27408b", color: "#fff", borderRadius: 8, padding: "7px 18px" }}
        onClick={() => setOpen(!open)}
      >
        🌎 Idioma
      </button>
      {open && (
        <ul style={{ position: "absolute", top: "100%", left: 0, background: "#fff", color: "#27408b", listStyle: "none", borderRadius: 6, boxShadow: "0 1px 8px rgba(0,30,80,0.16)", margin:0, padding: "12px 0" }}>
          {LANGUAGES.map(lang => (
            <li key={lang.code} style={{ padding: "7px 18px", cursor: "pointer" }}>
              <Link href={`/${lang.code}`}>{lang.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
