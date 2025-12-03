import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { Toaster, toast } from 'sonner';
// Types
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}
export interface CartItem extends Product {
  quantity: number;
}
// Mock Data
const PRODUCTS: Product[] = [{
  id: 1,
  name: 'Minimalist Leather Watch',
  price: 129.0,
  category: 'Accessories',
  image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800',
  isNew: true
}, {
  id: 2,
  name: 'Premium Noise-Cancelling Headphones',
  price: 299.0,
  originalPrice: 349.0,
  category: 'Electronics',
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
  isSale: true
}, {
  id: 3,
  name: 'Organic Cotton T-Shirt',
  price: 35.0,
  category: 'Clothing',
  image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800'
}, {
  id: 4,
  name: 'Smart Home Speaker',
  price: 199.0,
  category: 'Electronics',
  image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&q=80&w=800'
}, {
  id: 5,
  name: 'Classic Denim Jacket',
  price: 89.0,
  category: 'Clothing',
  image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=800',
  isNew: true
}, {
  id: 6,
  name: 'Polarized Sunglasses',
  price: 145.0,
  category: 'Accessories',
  image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800'
}, {
  id: 7,
  name: 'Mechanical Keyboard',
  price: 159.0,
  originalPrice: 189.0,
  category: 'Electronics',
  image: 'https://images.unsplash.com/photo-1587829741301-dc798b91a603?auto=format&fit=crop&q=80&w=800',
  isSale: true
}, {
  id: 8,
  name: 'Leather Weekend Bag',
  price: 249.0,
  category: 'Accessories',
  image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800'
}, {
  id: 9,
  name: 'Ceramic Coffee Set',
  price: 65.0,
  category: 'Home',
  image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800'
}, {
  id: 10,
  name: 'Wireless Charging Pad',
  price: 45.0,
  category: 'Electronics',
  image: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?auto=format&fit=crop&q=80&w=800'
}, {
  id: 11,
  name: 'Merino Wool Scarf',
  price: 55.0,
  category: 'Accessories',
  image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=800'
}, {
  id: 12,
  name: 'Smart Fitness Watch',
  price: 179.0,
  category: 'Electronics',
  image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=800',
  isNew: true
}];
export function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => item.id === product.id ? {
          ...item,
          quantity: item.quantity + 1
        } : item);
      }
      return [...prev, {
        ...product,
        quantity: 1
      }];
    });
    setIsCartOpen(true);
    toast.success(`Added ${product.name} to cart`);
  };
  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return {
          ...item,
          quantity: newQuantity
        };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };
  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast.success('Item removed from cart');
  };
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return <div className="min-h-screen bg-gray-50 flex flex-col">
      <Toaster position="bottom-right" richColors />

      <Header cartItemCount={totalItems} onCartClick={() => setIsCartOpen(true)} />

      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative bg-charcoal-950 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600" alt="Hero background" className="w-full h-full object-cover" />
          </div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Elevate Your Lifestyle
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Discover our curated collection of premium essentials, designed
              for the modern individual who values quality and style.
            </p>
            <button className="bg-emerald text-white font-bold py-4 px-8 rounded-full hover:bg-emerald-dark transition-colors shadow-lg shadow-emerald/20">
              Shop New Arrivals
            </button>
          </div>
        </div>

        <ProductGrid products={PRODUCTS} onAddToCart={addToCart} />
      </main>

      <Footer />

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} items={cartItems} onUpdateQuantity={updateQuantity} onRemoveItem={removeItem} />
    </div>;
}