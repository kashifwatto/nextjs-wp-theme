import Link from "next/link";

const ProductDesign = ({ product }) => {
  const image =
    product.images?.[0]?.src || "/placeholder-product.png";

  const rating = Number(product.average_rating || 0);
  const reviewCount = product.rating_count || 0;

  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>
      {i < Math.round(rating) ? "★" : "☆"}
    </span>
  ));

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">

      {/* Product Image */}
      <Link href={`/product/${product.slug}`}>
        <img
          src={image}
          alt={product.name}
          className="w-full h-56 object-cover"
        />
      </Link>

      <div className="p-4">

        {/* Product Name */}
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-lg font-semibold hover:text-blue-600 transition">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 my-2">
          <div className="text-yellow-500">
            {stars}
          </div>

          <span className="text-sm text-gray-500">
            ({reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">

          {/* Sale Price */}
          <span className="text-xl font-bold text-blue-600">
            {product.price_html ? (
              <span
        dangerouslySetInnerHTML={{
          // Strip out elements containing screen-reader class styles
          __html: product.price_html.replace(
            /<span class="screen-reader-text">.*?<\/span>/g,
            ""
          ),
        }}
      />
            ) : (
              `$${product.price}`
            )}
          </span>

        </div>

        {/* Stock */}
        <p
          className={`text-sm mb-4 ${
            product.stock_status === "instock"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {product.stock_status === "instock"
            ? "In Stock"
            : "Out of Stock"}
        </p>

        {/* Buttons */}
        <div className="flex gap-2">

          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
            Add to Cart
          </button>

          <Link
            href={`/shop/${product.slug}`}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            View
          </Link>

        </div>

      </div>
    </div>
  );
};

export default ProductDesign;