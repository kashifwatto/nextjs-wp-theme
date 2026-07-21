// lib/woocommerce/categories.ts

import { wooFetch } from "./client";
import { WOO_ENDPOINTS } from "./endpoints";

export async function getCategories() {
  return wooFetch(WOO_ENDPOINTS.categories, {
    params: {
      per_page: 100,
      hide_empty: true,
    },
    tags: ["categories"],
    revalidate: 300,
  });
}

export async function getCategoryBySlug(slug) {
  const categories = await wooFetch(WOO_ENDPOINTS.categories, {
    params: { slug },
  });

  console.log(slug);
  console.log(categories);

  return categories[0] || null;
}

export async function getCategoryById(id) {
  const category = await wooFetch(`${WOO_ENDPOINTS.categories}/${id}`, {
    tags: [`category-${id}`],
    revalidate: 300,
  });

  return category || null;
}