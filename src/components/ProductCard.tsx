import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCartIcon, HeartIcon, EyeIcon } from 'lucide-react';
import { Product } from '../App';
interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}
export function ProductCard({
  product,
  onAddToCart
}: ProductCardProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.4
  }} className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        {product.isNew && <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-semibold tracking-wide text-white bg-charcoal-950 rounded-full">
            NEW
          </span>}
        {product.isSale && <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-semibold tracking-wide text-white bg-terracotta rounded-full">
            SALE
          </span>}

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-600 hover:text-terracotta hover:bg-white transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300 shadow-sm">
          <HeartIcon className="w-4 h-4" />
        </button>

        <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" loading="lazy" />

        {/* Quick Actions Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/50 to-transparent pt-12">
          <motion.button whileTap={{
          scale: 0.95
        }} onClick={() => onAddToCart(product)} className="w-full py-3 bg-white text-charcoal-950 font-semibold text-sm rounded-lg shadow-lg hover:bg-emerald hover:text-white transition-colors flex items-center justify-center gap-2">
            <ShoppingCartIcon className="w-4 h-4" />
            Add to Cart
          </motion.button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{product.category}</div>
        <h3 className="text-sm font-medium text-charcoal-900 mb-2 line-clamp-1 group-hover:text-emerald transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-charcoal-950">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>}
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300" />
            <div className="w-3 h-3 rounded-full bg-charcoal-800 border border-gray-300" />
            <span className="text-xs text-gray-400 ml-1">+2</span>
          </div>
        </div>
      </div>
    </motion.div>;
}