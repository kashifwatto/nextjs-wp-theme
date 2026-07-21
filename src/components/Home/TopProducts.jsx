import React from 'react';
// import { getProducts } from '@/lib/woocommerce/products';

const TopProducts = () => {
    
    return (
        <section className="py-12 bg-gray-50">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Top Products
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Discover our best-selling products
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Product Card Placeholder */}
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div
                            key={item}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Image */}
                            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                                <img
                                    src={`https://via.placeholder.com/300x200?text=Product+${item}`}
                                    alt={`Product ${item}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Product Title
                                </h3>
                                <p className="text-gray-600 text-sm mb-3">
                                    Product description goes here
                                </p>

                                {/* Rating */}
                                <div className="flex items-center mb-3">
                                    <span className="text-yellow-400 text-sm">★★★★★</span>
                                    <span className="text-gray-500 text-sm ml-2">(120)</span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-2xl font-bold text-gray-900">
                                        $99.99
                                    </span>
                                    <span className="text-sm text-gray-500 line-through">
                                        $129.99
                                    </span>
                                </div>

                                {/* Add to Cart Button */}
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TopProducts;
