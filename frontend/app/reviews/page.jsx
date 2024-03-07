import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/Heading';
import PaginationBar from '@/components/PaginationBar';
import SearchBox from '@/components/SearchBox';
import { getReviews } from '@/lib/reviews';
// export const dynamic = 'force-dynamic'; // this page will only be loaded at runtime without cache
//export const revalidate = 30;  // refresh info from related static page in the background every 30 seconds when user reload the page

export const metadata = {
  title: 'Reviews',
};

const PAGE_SIZE = 8;

// searchParam makes page dynamic but data will be stored in cache for reuse without server render
export default async function ReviewPage({ searchParams }) {
  const page = parsePageParam(searchParams.page);
  const { reviews, pageCount } = await getReviews(PAGE_SIZE, page);
  return (
    <>
      <Heading>Reviews</Heading>
      <div className="flex justify-between pb-3">
        <PaginationBar href="/reviews" page={page} pageCount={pageCount} />
        <SearchBox />
      </div>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className="bg-white border rounded shadow w-80 hover:shadow-xl"
          >
            <Link href={`/reviews/${review.slug}`}>
              <Image
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t aspect-[4/3] object-cover"
                priority={index === 0}
              />
              <h2 className="font-orbitron py-1 text-center">{review.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function parsePageParam(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
}
