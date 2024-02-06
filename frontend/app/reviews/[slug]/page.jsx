import Image from 'next/image';
import Heading from '@/components/Heading';
import ShareBtns from '@/components/ShareBtns';
import { getReview, getSlugs } from '@/lib/reviews/';

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);
  console.log('[ReviewPage] rendering...', slug);
  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="font-semibold pb-3">{review.subtitle}</p>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{review.date}</p>
        <ShareBtns />
      </div>
      <Image
        src={review.image}
        alt=""
        width="640"
        height="360"
        className="pb-10 mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="max-w-screen-sm text-justify prose prose-slate"
      />
    </>
  );
}
