import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, MinusIcon, PlusIcon, Trash2Icon, ArrowRightIcon, ShoppingBagIcon } from 'lucide-react';
import { CartItem } from '../App';
interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemoveItem: (id: number) => void;
}
export function Cart({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem
}: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;
  return <AnimatePresence>
      {isOpen && <>
          {/* Backdrop */}
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={onClose} className="fixed inset-0 bg-charcoal-950/40 backdrop-blur-sm z-50" />

          {/* Sidebar */}
          <motion.div initial={{
        x: '100%'
      }} animate={{
        x: 0
      }} exit={{
        x: '100%'
      }} transition={{
        type: 'spring',
        damping: 25,
        stiffness: 200
      }} className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
            {/* Cart Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <h2 className="text-xl font-bold text-charcoal-950 flex items-center gap-2">
                Shopping Cart
                <span className="text-sm font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                  {items.reduce((acc, item) => acc + item.quantity, 0)} items
                </span>
              </h2>
              <button onClick={onClose} className="p-2 text-gray-400 hover:text-charcoal-950 hover:bg-gray-100 rounded-full transition-colors">
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                    <ShoppingBagIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium text-charcoal-900">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-500 max-w-xs">
                    Looks like you haven't added anything to your cart yet.
                  </p>
                  <button onClick={onClose} className="mt-4 px-6 py-2 bg-charcoal-950 text-white rounded-lg hover:bg-charcoal-800 transition-colors">
                    Start Shopping
                  </button>
                </div> : <div className="space-y-6">
                  {items.map(item => <motion.div layout key={item.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              scale: 0.95
            }} className="flex gap-4">
                      {/* Item Image */}
                      <div className="w-20 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden border border-gray-100">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="text-sm font-medium text-charcoal-900 line-clamp-2">
                              {item.name}
                            </h3>
                            <button onClick={() => onRemoveItem(item.id)} className="text-gray-400 hover:text-red-500 transition-colors p-1">
                              <Trash2Icon className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {item.category}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-gray-200 rounded-lg">
                            <button onClick={() => onUpdateQuantity(item.id, -1)} disabled={item.quantity <= 1} className="p-1.5 text-gray-500 hover:text-charcoal-950 disabled:opacity-50 disabled:cursor-not-allowed">
                              <MinusIcon className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-1.5 text-gray-500 hover:text-charcoal-950">
                              <PlusIcon className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="text-sm font-bold text-charcoal-950">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </motion.div>)}
                </div>}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && <div className="border-t border-gray-100 px-6 py-6 bg-gray-50">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-charcoal-950 pt-3 border-t border-gray-200">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full py-4 bg-emerald text-white font-bold rounded-xl shadow-lg shadow-emerald/20 hover:bg-emerald-dark hover:shadow-emerald/30 transition-all flex items-center justify-center gap-2 group">
                  Checkout
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Free shipping on orders over $100
                </p>
              </div>}
          </motion.div>
        </>}
    </AnimatePresence>;
}