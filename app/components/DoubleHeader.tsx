import React from 'react';
import Link from 'next/link';

export default function DoubleHeader() {
  return (
    <>
      {/* Header superior ultrafino tipo Planck */}
      <header style={{background: '#0b132b', color: '#fff', fontSize: '0.95rem', height: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 5%', borderBottom: '1px solid #222'}}>
        <div>
          <span>📦 Envío Gratis</span>
          <span style={{marginLeft: 24}}>🌎 Multiidioma</span>
          <span style={{marginLeft: 24}}>☎️ Contacto</span>
        </div>
        <div style={{display: 'flex', gap: 24}}>
          <Link href="/login">Mi Cuenta</Link>
          <Link href="/cart">Carrito</Link>
        </div>
      </header>
      {/* Header principal sticky/menu Planck */}
      <header style={{background: '#1c2541', color: '#fff', fontWeight: 'bold', fontSize: '1.1rem', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 5%', position: 'sticky', top: 0, zIndex: 99, boxShadow: '0 2px 10px rgba(10,20,40,0.10)'}}>
        <div style={{display:'flex',alignItems:'center',gap:24}}>
          <Link href="/">Artesanía Orgónica</Link>
          <nav style={{display:'flex',alignItems:'center',gap:16}}>
            <div style={{position:'relative'}}>
              <span style={{cursor:'pointer'}}>Productos ▾</span>
              <ul style={{background:'#27408b',listStyle:'none',padding:12,margin:0,position:'absolute',top:28,left:0,borderRadius:6,display:'none'}}>
                <li><Link href="/products/orgonitas">Orgonitas</Link></li>
                <li><Link href="/products/cemenites">Cemenites</Link></li>
              </ul>
            </div>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>
        <div style={{display: 'flex', gap: 32}}>
          <input type="search" placeholder="Buscar..." style={{padding:8,borderRadius:6, border:'1px solid #335'}} />
          <button style={{background:'#27408b', color:'#fff', borderRadius:8, padding:'7px 18px', cursor:'pointer'}}>Cambiar tema</button>
        </div>
      </header>
    </>
  );
}
