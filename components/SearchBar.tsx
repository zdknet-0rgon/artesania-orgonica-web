import React, { useState } from 'react';

export default function SearchBar({onSearch}) {
  const [query, setQuery] = useState("");

  return (
    <form onSubmit={e=>{e.preventDefault();onSearch(query)}} style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
      <input value={query} onChange={e => setQuery(e.target.value)} type="search" placeholder="Buscar productos..." style={{ padding: 8, borderRadius: 6, border: '1px solid #335' }} />
      <button type="submit" style={{ background: '#27408b', color: '#fff', borderRadius: 8, padding: '7px 18px', cursor: 'pointer', fontWeight:'bold'}}>Buscar</button>
    </form>
  )
}
