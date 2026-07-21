// app/products/page.jsx
import { getAllProducts } from '@/src/lib/woocommerce/products';

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id}>
         { console.log(product)}
          <img src={product.images[0]?.src} alt={product.images[0]?.alt || product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}