import React, { useState } from 'react';
import { ShoppingBagIcon, SearchIcon, MenuIcon, XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}
export function Header({
  cartItemCount,
  onCartClick
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-charcoal-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-bold tracking-tight text-charcoal-950 flex items-center gap-2">
              <div className="w-8 h-8 bg-charcoal-950 rounded-lg flex items-center justify-center text-white">
                <span className="font-bold text-lg">M</span>
              </div>
              MODERN
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['New Arrivals', 'Clothing', 'Accessories', 'Sale', 'Journal'].map(item => <a key={item} href="#" className="text-sm font-medium text-gray-600 hover:text-charcoal-950 transition-colors">
                  {item}
                </a>)}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search - Desktop */}
            <div className="hidden sm:flex items-center relative">
              <input type="text" placeholder="Search products..." className="w-64 pl-10 pr-4 py-2 rounded-full bg-gray-100 border-transparent focus:bg-white focus:border-gray-200 focus:ring-2 focus:ring-emerald/20 text-sm transition-all outline-none" />
              <SearchIcon className="w-4 h-4 text-gray-500 absolute left-3.5" />
            </div>

            {/* Search - Mobile Toggle */}
            <button className="sm:hidden p-2 text-gray-600 hover:text-charcoal-900" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <SearchIcon className="w-5 h-5" />
            </button>

            {/* Cart Button */}
            <motion.button whileTap={{
            scale: 0.95
          }} onClick={onCartClick} className="relative p-2 text-gray-600 hover:text-charcoal-900 transition-colors" aria-label="Open cart">
              <ShoppingBagIcon className="w-6 h-6" />
              {cartItemCount > 0 && <motion.span initial={{
              scale: 0
            }} animate={{
              scale: 1
            }} className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-emerald rounded-full ring-2 ring-white">
                  {cartItemCount}
                </motion.span>}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <AnimatePresence>
        {isSearchOpen && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} className="sm:hidden border-t border-gray-100 bg-white px-4 py-3 overflow-hidden">
            <div className="relative">
              <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border-transparent focus:bg-white focus:border-gray-200 focus:ring-2 focus:ring-emerald/20 text-sm outline-none" autoFocus />
              <SearchIcon className="w-4 h-4 text-gray-500 absolute left-3.5 top-2.5" />
            </div>
          </motion.div>}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col space-y-4">
            {['New Arrivals', 'Clothing', 'Accessories', 'Sale', 'Journal'].map(item => <a key={item} href="#" className="text-base font-medium text-gray-900 py-2 border-b border-gray-50 last:border-0">
                  {item}
                </a>)}
          </motion.div>}
      </AnimatePresence>
    </header>;
}