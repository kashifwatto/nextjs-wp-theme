import React from 'react';
import { getAllProducts } from '@/src/lib/woocommerce/products';
import ProductDesign from '../../components/Home/ProductDesign';

const Page =  async () => {
     const products = await getAllProducts();


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Shop</h1>
                    <p className="text-gray-600 mt-2">Discover our amazing collection of products</p>
                </div>
            </div>

            {/* Filters and Products */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <div className="w-full lg:w-64 flex-shrink-0">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
                            
                            {/* Category Filter */}
                            <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-700 mb-3">Category</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded" />
                                        <span className="ml-2 text-sm text-gray-600">Electronics</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded" />
                                        <span className="ml-2 text-sm text-gray-600">Clothing</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded" />
                                        <span className="ml-2 text-sm text-gray-600">Home & Garden</span>
                                    </label>
                                </div>
                            </div>

                            {/* Price Filter */}
                            <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-700 mb-3">Price Range</h3>
                                <input type="range" min="0" max="100" className="w-full" />
                                <div className="flex justify-between mt-2 text-sm text-gray-600">
                                    <span>$0</span>
                                    <span>$100+</span>
                                </div>
                            </div>

                            {/* Rating Filter */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-700 mb-3">Rating</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded" />
                                        <span className="ml-2 text-sm text-gray-600">★★★★★ (5 stars)</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded" />
                                        <span className="ml-2 text-sm text-gray-600">★★★★ (4+ stars)</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="rounded" />
                                        <span className="ml-2 text-sm text-gray-600">★★★ (3+ stars)</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="flex-1">
                        {/* Sorting */}
                        <div className="mb-8 flex justify-between items-center">
                            <p className="text-gray-600">Showing {products.length} products</p>
                            <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Sort by: Relevance</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest</option>
                                <option>Best Sellers</option>
                            </select>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {products.map((product,index ) => (
                                

                                <ProductDesign key={index} product={product}/>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-12 flex justify-center gap-2">
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Previous</button>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">1</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">2</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">3</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
