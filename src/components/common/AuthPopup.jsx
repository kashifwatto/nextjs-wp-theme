'use client';

import React, { useState } from 'react';

const AuthPopup = ({ open, onClose }) => {
  const [mode, setMode] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  if (!open) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mode === 'login') {
      console.log('Login', { email: formData.email, password: formData.password });
    } else {
      console.log('Signup', formData);
    }
  };

  const switchMode = (nextMode) => {
    setMode(nextMode);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4">
      <div className="w-full max-w-md rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-semibold text-white">{mode === 'login' ? 'Sign In' : 'Create Account'}</h2>
            <p className="text-sm text-slate-400">{mode === 'login' ? 'Welcome back! Log in to continue.' : 'Create your account to start shopping.'}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-slate-800/80 px-3 py-2 text-slate-300 hover:bg-slate-700 transition"
          >
            Close
          </button>
        </div>

        <div className="px-6 py-5">
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={() => switchMode('login')}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${mode === 'login' ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => switchMode('signup')}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${mode === 'signup' ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <label className="block text-sm text-slate-300">
                <span className="mb-2 block">Name</span>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
                />
              </label>
            )}

            <label className="block text-sm text-slate-300">
              <span className="mb-2 block">Email</span>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
              />
            </label>

            <label className="block text-sm text-slate-300">
              <span className="mb-2 block">Password</span>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPopup;
