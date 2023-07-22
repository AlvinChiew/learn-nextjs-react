import Link from 'next/link';
import Heading from '@/components/Heading';
import { getReviews } from '@/lib/reviews';



export const metadata = {
    title: 'Reviews'
}

export default async function ReviewPage() {
    const reviews = await getReviews();
    return (
        <>
            <Heading>Reviews</Heading>
            <ul className='flex flex-row flex-wrap gap-3'>
                {reviews.map((review) => (
                    <li key={review.slug} className='bg-white border rounded shadow w-80 hover:shadow-xl'>
                        <Link href={`/reviews/${review.movie}`}>
                            <img src={review.image} alt=""
                                width="320" height="180" className='rounded-t aspect-[4/3] object-cover' />
                            <h2 className='font-orbitron py-1 text-center'>{review.title}</h2>
                        </Link>
                    </li>
                ))}
            </ul >
        </>
    )
}