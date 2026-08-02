'use client';

import { useEffect, useMemo, useState } from 'react';

const ProductDetailsClient = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [saved, setSaved] = useState(false);

  const unitPrice = useMemo(() => {
    return parseFloat(product.price || 0) || 0;
  }, [product.price]);

  const totalPrice = useMemo(() => {
    return (unitPrice * quantity).toFixed(2);
  }, [unitPrice, quantity]);

  useEffect(() => {
    if (!saved) return;
    const timer = window.setTimeout(() => setSaved(false), 1500);
    return () => window.clearTimeout(timer);
  }, [saved]);

  const handleQuantityChange = (event) => {
    const qty = Math.max(1, parseInt(event.target.value, 10) || 1);
    setQuantity(qty);
  };

  const handleAddToCart = () => {
    const nextItem = {
      id: product.id,
      name: product.name,
      price: unitPrice,
      quantity,
      image: product.images?.[0]?.src || '',
      slug: product.slug || '',
    };

    const existingCart = JSON.parse(window.localStorage.getItem('wooCart') || '[]');
    const existingIndex = existingCart.findIndex((item) => item.id === nextItem.id);

    if (existingIndex >= 0) {
      existingCart[existingIndex].quantity += quantity;
    } else {
      existingCart.push(nextItem);
    }

    window.localStorage.setItem('wooCart', JSON.stringify(existingCart));
    setSaved(true);

  };

  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {product.attributes?.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-3">Product Attributes</h3>
          {product.attributes.map((attr) => (
            <div key={attr.id} className="flex border-b py-2">
              <div className="w-40 font-medium">{attr.name}</div>
              <div>{attr.options.join(', ')}</div>
            </div>
          ))}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-[1fr_auto] items-end">
        <div>
          <p className="text-sm text-slate-500">Unit Price</p>
          <div className="mt-1 text-3xl font-bold text-green-600">${unitPrice.toFixed(2)}</div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Quantity</p>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="mt-2 w-24 rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-400"
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4">
        <span className="text-sm text-slate-500">Total Price</span>
        <span className="text-xl font-semibold text-slate-900">${totalPrice}</span>
      </div>

      <button
        type="button"
        onClick={handleAddToCart}
        className="mt-6 w-full rounded-3xl bg-slate-900 px-5 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Add to Cart
      </button>

      {saved && (
        <div className="mt-4 rounded-2xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700">
          Product added to cart.
        </div>
      )}
    </div>
  );
};

export default ProductDetailsClient;
