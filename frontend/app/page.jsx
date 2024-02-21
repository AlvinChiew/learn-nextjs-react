import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/Heading';
import { getFeaturedReview } from '@/lib/reviews';

export const dynamic = 'force-dynamic'; // this page will only be loaded at runtime
//export const revalidate = 30;  // refresh info from related static page in the background every 30 seconds when user reload the page

export default async function HomePage() {
  console.log('[HomePage] rendering...');
  const reviews = await getFeaturedReview();
  return (
    <>
      <Heading>Welcome!</Heading>
      <p className="pb-5 ">Best reviews you can find online</p>
      <h2 className="font-semibold">Featured</h2>
      <ul className="flex flex-col gap-3">
        {reviews.map((review) => (
          <li
            key={review.slug}
            className="bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full"
          >
            <Link
              href={`/reviews/${review.slug}`}
              className="flex flex-col sm:flex-row"
            >
              <Image
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t sm:rounded-l sm:rounded-r-none"
                priority
              />
              <div className="px-2 py-1 text-center sm:text-left">
                <h2 className="font-semibold font-orbitron">{review.title}</h2>
                <p className="pt-2 hidden sm:block">{review.subtitle}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
