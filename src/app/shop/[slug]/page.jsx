
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getProductVariations } from "@/src/lib/woocommerce/products";
import ProductVariations from "@/src/components/Product/ProductVariations";

export default async function Page({ params }) {
    const { slug } = await params;
    console.log(slug)

    const product = await getProductBySlug(slug);
    console.log(product.id)

    const variations =
        product.type === "variable"
            ? await getProductVariations(product.id)
            : [];

    console.log(variations)
    if (!product) {
        notFound();
    }

    const images = product.images || [];

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">

            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-8">
                <Link href={'/'}>Home</Link>

                {product.categories?.map((cat, index) => (
                    <span key={cat.id}>
                        {" / "}
                        <Link href={`/categories/${cat.slug}`}>{cat.name}</Link>
                    </span>
                ))}

                <span> / {product.name}</span>
            </nav>

            {/* Product Section */}
            <div className="grid md:grid-cols-2 gap-12">

                {/* Images */}
                <div>

                    <img
                        src={images[0]?.src}
                        alt={product.name}
                        className="w-full rounded-lg border"
                    />

                    <div className="grid grid-cols-4 gap-3 mt-4">

                        {images.map((image) => (
                            <img
                                key={image.id}
                                src={image.src}
                                alt={image.alt}
                                className="rounded border cursor-pointer hover:border-black"
                            />
                        ))}

                    </div>

                </div>

                {/* Product Info */}

                <div>

                    <h1 className="text-4xl font-bold">
                        {product.name}
                    </h1>

                    {/* Rating */}

                    <div className="flex items-center mt-3">

                        <span className="text-yellow-500 text-xl">

                            {"★".repeat(Math.round(Number(product.average_rating)))}
                            {"☆".repeat(
                                5 - Math.round(Number(product.average_rating))
                            )}

                        </span>

                        <span className="ml-2 text-gray-600">

                            ({product.rating_count} Reviews)

                        </span>

                    </div>

                    {/* Price */}


                    <span className="text-xl font-bold text-green-600">
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

                    {/* Stock */}

                    <div className="mt-4">

                        {product.stock_status === "instock" ? (
                            <span className="text-green-600 font-semibold">
                                ✔ In Stock
                            </span>
                        ) : (
                            <span className="text-red-600 font-semibold">
                                ✖ Out of Stock
                            </span>
                        )}

                    </div>

                    {/* SKU */}

                    {product.sku && (
                        <p className="mt-2 text-gray-600">
                            SKU: {product.sku}
                        </p>
                    )}

                    {/* Categories */}

                    <p className="mt-2 text-gray-600">
                        Categories:{" "}
                        {product.categories
                            ?.map((cat) => cat.name)
                            .join(", ")}
                    </p>

                    {/* Short Description */}

                    <div
                        className="mt-6 prose max-w-none"
                        dangerouslySetInnerHTML={{
                            __html: product.short_description,
                        }}
                    />

                    {/* Attributes & Variations */}

                    {product.type === "variable" && variations.length > 0 ? (
                        <ProductVariations
                            product={product}
                            variations={variations}
                        />
                    ) : (
                        <>
                            {/* Attributes */}

                            {product.attributes?.length > 0 && (
                                <div className="mt-8">

                                    <h3 className="font-semibold text-lg mb-3">
                                        Product Attributes
                                    </h3>

                                    {product.attributes.map((attr) => (
                                        <div
                                            key={attr.id}
                                            className="flex border-b py-2"
                                        >
                                            <div className="w-40 font-medium">
                                                {attr.name}
                                            </div>

                                            <div>
                                                {attr.options.join(", ")}
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            )}

                            {/* Quantity */}

                            <div className="mt-8">

                                <label className="font-semibold block mb-2">
                                    Quantity
                                </label>

                                <input
                                    type="number"
                                    defaultValue={1}
                                    min={1}
                                    className="border rounded px-3 py-2 w-24"
                                />

                            </div>

                            {/* Add to Cart */}

                            <button className="mt-6 w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition">

                                Add to Cart

                            </button>
                        </>
                    )}

                </div>

            </div>

            {/* Tabs */}

            <div className="mt-20">

                <div className="border-b pb-3 mb-6">

                    <h2 className="text-2xl font-bold">
                        Description
                    </h2>

                </div>

                <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{
                        __html: product.description,
                    }}
                />

            </div>

            {/* Additional Information */}

            {product.attributes?.length > 0 && (

                <div className="mt-16">

                    <h2 className="text-2xl font-bold mb-6">

                        Additional Information

                    </h2>

                    <table className="w-full border">

                        <tbody>

                            {product.attributes.map((attr) => (

                                <tr key={attr.id} className="border-b">

                                    <td className="font-semibold p-3 w-56">
                                        {attr.name}
                                    </td>

                                    <td className="p-3">
                                        {attr.options.join(", ")}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            )}

            {/* Reviews */}

            <div className="mt-16">

                <h2 className="text-2xl font-bold">

                    Reviews ({product.rating_count})

                </h2>

                <p className="text-gray-500 mt-3">

                    Reviews will be loaded from the WooCommerce Reviews API.

                </p>

            </div>

        </div>
    );
}  