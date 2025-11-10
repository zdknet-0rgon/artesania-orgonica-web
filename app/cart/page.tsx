"use client";
import React, { useState } from 'react';

export default function CartPage() {
  const [items, setItems] = useState([
    { id: 1, nombre: 'Orgonita Premium', precio: 35, cantidad: 1 },
    { id: 2, nombre: 'Cemenite XL', precio: 58, cantidad: 2 }
  ]);

  const updateCantidad = (id: number, cantidad: number) => {
    setItems(items.map(item => item.id === id ? { ...item, cantidad } : item));
  };

  const eliminar = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const total = items.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  return (
    <div style={{ maxWidth: 590, margin: '60px auto', padding: 28, background: '#f5faff', borderRadius: 14, boxShadow: '0 2px 16px rgba(20,30,60,0.10)' }}>
      <h2 style={{ fontWeight: 'bold', color: '#27408b', fontSize: 28, marginBottom: 18 }}>Carrito de compra</h2>
      {items.length === 0 ? (
        <div style={{ color: '#c11', fontWeight: 'bold', fontSize: 18 }}>Tu carrito está vacío</div>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {items.map(item => (
            <li key={item.id} style={{ marginBottom: 14, background: '#e0e6fb', padding: 12, borderRadius:8, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
              <span>{item.nombre}</span>
              <span>€{item.precio}</span>
              <input type="number" min={1} value={item.cantidad} onChange={e => updateCantidad(item.id, parseInt(e.target.value))} style={{ width: 60, borderRadius:6, border:'1px solid #ccd', padding:5, marginLeft:14 }} />
              <button onClick={() => eliminar(item.id)} style={{ background: '#c11', color: '#fff', padding: '7px 12px', borderRadius: 6, border: 'none', cursor: 'pointer', marginLeft: 9 }}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <div style={{ borderTop: '1px solid #ccd', paddingTop: 12, fontWeight: 'bold', fontSize: 18, color: '#294' }}>
        Total: €{total}
      </div>
      <button style={{ marginTop: 24, width: '100%', background: '#27408b', color: '#fff', padding: 14, borderRadius:8, fontWeight:'bold', fontSize:18, cursor:'pointer' }}>Finalizar compra</button>
    </div>
  );
}
