import React from 'react';

export default function BlogLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0, background: '#ededed' }}>
        {children}
      </body>
    </html>
  );
}
