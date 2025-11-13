'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { addToCart } from '@/lib/cart';

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
        console.error('Error:', err);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    alert('Producto añadido al carrito');
  };

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
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <div className="relative h-64 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
            <span className="text-6xl">📦</span>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
              {product.description}
            </p>
            <div className="flex justify-between items-center mb-3">
              <span className="text-2xl font-bold text-amber-600">
                {product.price.toFixed(2)}€
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Stock: {product.stock}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleAddToCart(product)}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
              >
                �� Añadir
              </button>
              <Link
                href={`/products/${product.id}`}
                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg transition-colors text-center"
              >
                Ver
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
