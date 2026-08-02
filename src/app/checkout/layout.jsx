import React from 'react';

export const metadata = {
  title: 'Checkout',
  description: 'Complete your order without the site header',
};

export default function CheckoutLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {children}
    </div>
  );
}
