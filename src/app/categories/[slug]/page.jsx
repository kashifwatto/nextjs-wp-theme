


import { getCategoryBySlug } from "@/src/lib/woocommerce/categories";
import { getProducts } from "@/src/lib/woocommerce/products";
import { notFound } from "next/navigation";
import ProductDesign from '@/src/components/Home/ProductDesign';

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = await getProducts({
    category: category.id,
  });

  return (
    <div className="max-w-7xl mx-auto py-10">

      <h1 className="text-4xl font-bold">
        {category.name}
      </h1>

      <p className="mt-2 text-gray-500">
        {category.count} Products
      </p>

      <div className="grid grid-cols-4 gap-6 mt-8">

        {products.map((product) => (

          <ProductDesign
            key={product.id}
            product={product}
          />



        ))}

      </div>

    </div>
  );
}