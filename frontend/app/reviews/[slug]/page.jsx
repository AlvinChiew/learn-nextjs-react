import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import Heading from '@/components/Heading';
import ShareBtns from '@/components/ShareBtns';
import { getReview, getSlugs } from '@/lib/reviews/';
import CommentList from '@/components/CommentList';
import CommentForm from '@/components/CommentForm';

// export const dynamicParams = false; // return Eror 404 for new slug instead of automatically creating and modifying a static page in server
// export const dynamic = 'force-dynamic'; // this page will only be loaded at runtime without cache

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  if (!review) notFound();
  return {
    title: review.title,
  };
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);
  if (!review) notFound();
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
      <section className="border-dashed border-t max-w-screen-sm mt-3 py-3">
        <h2 className="font-bold flex gap-2 items-center text-xl">
          <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
          Comments
        </h2>
        <CommentForm slug={slug} title={review.title} />
        <CommentList slug={slug} />
      </section>
    </>
  );
}
