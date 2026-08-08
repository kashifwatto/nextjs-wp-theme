'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import CartDrawer from "@/src/components/common/CartDrawer";
import AuthPopup from "@/src/components/common/AuthPopup";

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [showAuthPopup, setShowAuthPopup] = useState(false);

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
    <header className="w-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-slate-50 shadow-[0_20px_60px_rgba(0,0,0,0.18)] pb-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-3 text-sm text-slate-300 gap-2 sm:gap-0">
        <span>Free shipping on orders over $75 | 24/7 Support</span>
        <div className="flex items-center">
          <Link className="text-slate-400 hover:text-white transition-colors" href="#">
            Track Order
          </Link>
          <Link className="ml-5 text-slate-400 hover:text-white transition-colors" href="#">
            Wishlist
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 px-6 py-6">
        <div className="flex flex-col gap-2 min-w-[180px]">
          <Link href={'/'} className="text-2xl font-extrabold tracking-[1.2px] text-white">
          
          WooShop
          </Link>

          <p className="m-0 text-slate-300 max-w-[320px]">
            Premium products from your favorite store.
          </p>
        </div>

        <div className="flex-1 flex items-center bg-white rounded-full overflow-hidden min-h-[52px] shadow-[0_8px_25px_rgba(15,23,42,0.12)]">
          <input
            className="flex-1 px-4 py-3 text-slate-900 text-sm outline-none"
            type="text"
            placeholder="Search products, brands or categories"
          />
          <button
            className="px-7 py-3 bg-emerald-500 text-white font-bold hover:bg-emerald-600 transition"
            type="button"
          >
            Search
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setShowAuthPopup(true)}
            className="rounded-full border cursor-pointer border-white/15 bg-white/5 text-slate-50 px-5 py-3 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10"
          >
            Sign In
          </button>
          <CartDrawer />
        </div>

        <AuthPopup open={showAuthPopup} onClose={() => setShowAuthPopup(false)} />
      </div>

      <nav className="flex flex-wrap justify-center sm:justify-start gap-4 px-6 pb-3 text-slate-200">
        <Link className="rounded-full px-4 py-2 hover:bg-white/10 transition" href={'/'}>
          Home
        </Link>
                            {categories.map((category,index) => (
                                <Link key={index} className="rounded-full px-4 py-2 hover:bg-white/10 transition" href={`/categories/${category.slug}`} >
           {category.name}
        </Link>
                            ))}

        
      </nav>
    </header>
  );
}
