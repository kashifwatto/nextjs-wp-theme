import { wooFetch } from './client';
import { WOO_ENDPOINTS } from './endpoints';

export async function getProducts(params = {}) {
  return wooFetch(WOO_ENDPOINTS.products, {
    params: {
      per_page: params.per_page || 20,
      page: params.page || 1,
      search: params.search,
      category: params.category,
      orderby: params.orderby,
      order: params.order,
      featured: params.featured,
      on_sale: params.on_sale,
      status: 'publish',
    },
    tags: ['products'],
    revalidate: 60,
  });
}

export async function getProductBySlug(slug) {
  const products = await wooFetch(WOO_ENDPOINTS.products, {
    params: { slug, status: 'publish' },
    tags: [`product-${slug}`],
    revalidate: 300,
  });

  return products[0] || null;
}

export async function getProductById(id) {
  return wooFetch(WOO_ENDPOINTS.product(id), {
    tags: [`product-${id}`],
    revalidate: 300,
  });
}

export async function getAllProducts() {
  let allProducts = [];
  let page = 1;
  const perPage = 100; // WooCommerce max allowed per request

  while (true) {
    const products = await wooFetch(WOO_ENDPOINTS.products, {
      params: {
        per_page: perPage,
        page: page,
        status: 'publish',
      },
      tags: ['products'],
      revalidate: 60,
    });

    allProducts = [...allProducts, ...products];

    // stop when a page comes back with fewer than perPage items
    if (products.length < perPage) break;

    page++;
  }

  return allProducts;
}


export async function getTopProductsForHomepage() {
  return wooFetch(WOO_ENDPOINTS.products, {
    params: {
      per_page: 8,
      page: 1,
      status: "publish",
    },
    tags: ["products"],
    revalidate: 60,
  });
}

export async function getProductVariations(productId) {
  return wooFetch(WOO_ENDPOINTS.productVariations(productId), {
    params: { per_page: 100 },
    tags: [`product-${productId}-variations`],
    revalidate: 300,
  });
}


