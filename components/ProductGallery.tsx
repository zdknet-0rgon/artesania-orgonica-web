'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  stock: number;
}

export default function ProductGallery() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative h-64 bg-gray-200 dark:bg-gray-700">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              📦
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              {product.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-amber-600">
                {product.price.toFixed(2)}€
              </span>
              <Link
                href={`/products/${product.id}`}
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Ver más
              </Link>
            </div>
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Stock: {product.stock} unidades
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
