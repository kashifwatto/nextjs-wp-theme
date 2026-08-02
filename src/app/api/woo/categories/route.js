import { wooFetch } from '@/src/lib/woocommerce/client';

export async function GET() {
  const categories = await wooFetch('/products/categories', {
    params: {
      per_page: 100,
      hide_empty: true,
    },
    revalidate: 300,
  });

  return new Response(JSON.stringify(categories), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
