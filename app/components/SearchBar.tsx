import React from 'react';

type Props = {
  onSearch?: (query: any) => void;
};

export default function SearchBar({ onSearch }: Props) {
  // Demo: input básico para probar la prop
  return (
    <input
      type="search"
      placeholder="Buscar..."
      onChange={e => {
        if (onSearch) onSearch(e.target.value);
      }}
      style={{ padding: '6px 16px', borderRadius: 8, border: '1px solid #ccc' }}
    />
  );
}
