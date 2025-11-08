import React from 'react';

export default function BlogLayout({ children }) {
  return (
    <section style={{ width: '100%', minHeight: '100vh', background: '#fafafd' }}>
      {children}
    </section>
  );
}
