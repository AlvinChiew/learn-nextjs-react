import { revalidateTag } from 'next/cache';
import { REVIEWS_CACHE_TAG } from '@/lib/reviews';

export async function POST(request) {
  const payload = await request.json();
  if (payload.model === 'review') {
    revalidateTag(REVIEWS_CACHE_TAG);
  }
  return new Response(null, { status: 204 });
}
