'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const CartDrawer = () => {
    const [open, setOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        updateCartItems();

    
    }, []);
    const updateCartItems = () => {
        const savedCart = window.localStorage.getItem('wooCart');
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (error) {
                console.error('Unable to read cart from localStorage', error);
                setCartItems([]);
            }
        }
    }

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-full border border-white/15 bg-white/5 text-slate-50 px-5 py-3 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/10"
                aria-expanded={open}
                aria-controls="cart-drawer"
            >
                Cart
                <span className="ml-2 inline-flex items-center justify-center min-w-[24px] h-6 rounded-full bg-red-500 text-xs text-white px-2">
                    {cartItems.length}
                </span>
            </button>

            <div
                className={`fixed inset-0 z-40 bg-slate-950/70 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setOpen(false)}
                aria-hidden={!open}
            />

            <aside
                id="cart-drawer"
                className={`fixed right-0 top-0 z-50 h-full w-full max-w-md bg-slate-950 text-slate-100 shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
                aria-hidden={!open}
            >
                <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
                    <div>
                        <h2 className="text-xl font-semibold">Your Cart</h2>
                        <p className="text-sm text-slate-400">Review items before checkout.</p>
                    </div>
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="rounded-full bg-slate-800/80 px-3 py-2 text-slate-200 hover:bg-slate-700 transition"
                    >
                        Close
                    </button>
                </div>

                <div className="px-6 py-5">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between gap-4 border-b border-slate-800 py-4">
                            <div>
                                <h3 className="text-sm font-medium text-white">{item.name}</h3>
                                <p className="text-xs text-slate-400">Qty: {item.quantity}</p>
                            </div>
                            <span className="text-sm font-semibold text-emerald-400">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}

                    <div className="mt-6 flex items-center justify-between text-sm uppercase tracking-[0.2em] text-slate-400">
                        <span>Total</span>
                        <span className="text-base font-semibold text-white">${total}</span>
                    </div>

                    <button className="mt-6 w-full rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600">
                        <Link href={'/checkout'}>Checkout</Link>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default CartDrawer;