import React, { ReactNode } from 'react';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <section style={{ width: '100%', minHeight: '100vh', background: '#fafafd' }}>
      {children}
    </section>
  );
}
