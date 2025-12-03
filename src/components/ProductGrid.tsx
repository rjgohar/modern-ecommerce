import React from 'react';
import { Product } from '../App';
import { ProductCard } from './ProductCard';
import { motion } from 'framer-motion';
interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}
export function ProductGrid({
  products,
  onAddToCart
}: ProductGridProps) {
  return <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-charcoal-950 tracking-tight">
              Featured Collection
            </h2>
            <p className="mt-2 text-gray-500 max-w-xl">
              Discover our latest arrivals, crafted with premium materials and
              designed for modern living.
            </p>
          </div>
          <a href="#" className="text-emerald-dark font-medium hover:text-emerald transition-colors flex items-center gap-1 group">
            View all products
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 xl:gap-x-8">
          {products.map(product => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
        </div>
      </div>
    </section>;
}