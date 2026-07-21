import 'server-only';

const BASE_URL = process.env.WOOCOMMERCE_URL;
const CONSUMER_KEY = process.env.WOOCOMMERCE_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.WOOCOMMERCE_CONSUMER_SECRET;

if (!BASE_URL || !CONSUMER_KEY || !CONSUMER_SECRET) {
  throw new Error('Missing WooCommerce environment variables in .env.local');
}

export async function wooFetch(path, options = {}) {
  const { params, revalidate = 60, tags, ...fetchOptions } = options;

  const url = new URL(`/wp-json/wc/v3${path}`, BASE_URL);

  url.searchParams.set('consumer_key', CONSUMER_KEY);
  url.searchParams.set('consumer_secret', CONSUMER_SECRET);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, value);
      }
    });
  }

  const res = await fetch(url.toString(), {
    ...fetchOptions,
    headers: {
      'Content-Type': 'application/json',
      ...fetchOptions.headers,
    },
    next: { revalidate, tags },
  });

  if (!res.ok) {
    let message = `WooCommerce request failed (${res.status})`;
    try {
      const body = await res.json();
      message = body.message || message;
    } catch {
      // ignore, keep default message
    }
    throw new Error(message);
  }

  return res.json();
}