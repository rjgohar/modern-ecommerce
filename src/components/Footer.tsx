import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, MailIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-charcoal-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-charcoal-950">
                <span className="font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold tracking-tight">MODERN</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Curated essentials for the modern lifestyle. Quality craftsmanship
              meets contemporary design.
            </p>
            <div className="flex gap-4">
              {[FacebookIcon, InstagramIcon, TwitterIcon].map((Icon, i) => <a key={i} href="#" className="text-gray-400 hover:text-emerald transition-colors">
                  <Icon className="w-5 h-5" />
                </a>)}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-bold text-lg mb-6">Shop</h3>
            <ul className="space-y-4">
              {['New Arrivals', 'Best Sellers', 'Clothing', 'Accessories', 'Home & Living', 'Sale'].map(item => <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              {['Help Center', 'Shipping & Returns', 'Size Guide', 'Track Order', 'Contact Us', 'Privacy Policy'].map(item => <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6">Stay in the loop</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <input type="email" placeholder="Enter your email" className="w-full bg-charcoal-900 border border-charcoal-800 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-emerald focus:ring-1 focus:ring-emerald" />
                <MailIcon className="absolute right-3 top-3.5 w-5 h-5 text-gray-500" />
              </div>
              <button className="w-full bg-emerald text-white font-semibold py-3 rounded-lg hover:bg-emerald-dark transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Modern eCommerce. All rights reserved.
          </p>
          <div className="flex gap-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>;
}