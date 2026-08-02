'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const FeaturedCatagoreis = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch('/api/woo/categories');
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error('Failed to load categories', error);
      }
    }

    loadCategories();
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Categories</h2>
          <p className="text-lg text-gray-600">Explore our popular product categories</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id ?? index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                {category.image?.src ? (
                  <img
                    src={category.image.src}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-slate-500">No image</div>
                )}
              </div>

              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{category.count ?? 0} products</p>
                <Link
                  href={`/categories/${category.slug}`}
                  className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
                >
                  View Category
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCatagoreis;
