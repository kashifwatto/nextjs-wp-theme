import React from 'react';
// import { getProducts } from '@/lib/woocommerce/products';
import { getTopProductsForHomepage } from '@/src/lib/woocommerce/products';
import ProductDesign from '@/src/components/Home/ProductDesign';

const TopProducts = async () => {
    const products = await getTopProductsForHomepage();


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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product, index) => (


                        <ProductDesign key={index} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TopProducts;
