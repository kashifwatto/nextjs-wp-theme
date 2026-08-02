import React from 'react';

const CheckoutPage = () => {
  const cartItems = [
    { id: 1, name: 'Classic Hoodie', price: 29.99, quantity: 1 },
    { id: 2, name: 'Minimal Sneakers', price: 59.99, quantity: 1 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 7.99 : 0;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + shipping + tax).toFixed(2);

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Checkout</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Complete your order</h1>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Enter your billing details and confirm payment. Your order will be processed through WooCommerce.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">First name</span>
                <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200" placeholder="John" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Last name</span>
                <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200" placeholder="Doe" />
              </label>
            </div>

            <div className="mt-6 grid gap-6">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Email</span>
                <input type="email" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200" placeholder="john@example.com" />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Phone</span>
                <input type="tel" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200" placeholder="(555) 123-4567" />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Shipping address</span>
                <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200" placeholder="123 Main Street" />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">City</span>
                <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200" placeholder="Austin" />
              </label>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">State</span>
                  <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200" placeholder="TX" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">ZIP code</span>
                  <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200" placeholder="78701" />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Order notes</span>
                <textarea className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200" rows="4" placeholder="Add delivery notes or gift instructions..."></textarea>
              </label>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-semibold text-slate-900">Payment details</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Card number</span>
                  <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200" placeholder="1234 5678 9012 3456" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Expiration</span>
                  <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200" placeholder="MM/YY" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">CVC</span>
                  <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200" placeholder="123" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Name on card</span>
                  <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200" placeholder="John Doe" />
                </label>
              </div>
            </div>

            <button type="button" className="mt-8 w-full rounded-full bg-slate-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800">
              Complete order
            </button>
          </section>

          <aside className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Order summary</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">Your cart</h2>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">2 items</span>
            </div>

            <div className="mt-8 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900">{item.name}</p>
                      <p className="mt-1 text-sm text-slate-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-semibold text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-slate-200 pt-4 text-lg font-semibold text-slate-900">
                <div className="flex items-center justify-between">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-3xl bg-emerald-50 p-5 text-sm text-emerald-700">
              <p className="font-semibold">Secure checkout</p>
              <p className="mt-2 text-slate-600">Your payment information is encrypted and processed securely through WooCommerce.</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
