import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row md:justify-between gap-8">
                    <div className="flex-1">
                        <div className="flex items-center space-x-3">
                            <div className="bg-green-500 text-white font-bold rounded-full h-10 w-10 flex items-center justify-center">E</div>
                            <div>
                                <h3 className="text-xl font-semibold">EcoShop</h3>
                                <p className="text-sm text-gray-400">Sustainable products for everyday life</p>
                            </div>
                        </div>

                        <p className="mt-6 text-sm text-gray-400">123 Green St., New City<br/>Mon - Fri: 9am - 6pm</p>
                    </div>

                    <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6">
                        <div>
                            <h4 className="font-semibold mb-3">Shop</h4>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li><a href="#" className="hover:text-white">New Arrivals</a></li>
                                <li><a href="#" className="hover:text-white">Bestsellers</a></li>
                                <li><a href="#" className="hover:text-white">Sustainable Picks</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3">Company</h4>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li><a href="#" className="hover:text-white">About Us</a></li>
                                <li><a href="#" className="hover:text-white">Careers</a></li>
                                <li><a href="#" className="hover:text-white">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3">Support</h4>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li><a href="#" className="hover:text-white">FAQ</a></li>
                                <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
                                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex-1">
                        <h4 className="font-semibold mb-3">Subscribe</h4>
                        <p className="text-sm text-gray-400 mb-4">Get updates on new products and promotions.</p>
                        <form className="flex items-center space-x-2">
                            <input aria-label="Email" type="email" placeholder="Your email" className="w-full px-3 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none" />
                            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Subscribe</button>
                        </form>

                        <div className="flex items-center space-x-3 mt-6">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Facebook</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-3h2.2V9.3c0-2.2 1.3-3.4 3.3-3.4.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0022 12z"/></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 19c7.5 0 11.6-6.2 11.6-11.6v-.5A8.3 8.3 0 0022 4.6a8.1 8.1 0 01-2.3.6 4 4 0 001.7-2.2 8.2 8.2 0 01-2.6 1 4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 4.9a4 4 0 001.3 5.5A4 4 0 012.8 9v.1a4.1 4.1 0 003.3 4 4 4 0 01-1.8.1 4.1 4.1 0 003.8 2.8A8.3 8.3 0 012 17.5a11.6 11.6 0 006.3 1.8"/></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zM18.5 7a1 1 0 11-1 1 1 1 0 011-1z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-gray-500 flex flex-col md:flex-row md:justify-between items-center gap-4">
                    <p>© {new Date().getFullYear()} EcoShop. All rights reserved.</p>
                    <div className="space-x-4">
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Privacy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
