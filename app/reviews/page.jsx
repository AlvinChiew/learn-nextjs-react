import Link from 'next/link';
import Heading from '@/components/Heading';

export default function ReviewPage() {
    return (
        <>
            <Heading>Reviews</Heading>
            <ul className='flex flex-col gap-3'>
                <li className='bg-white border rounded shadow w-80 hover:shadow-xl'>
                    <Link href="/reviews/harry-potter">
                        <img src="/images/harry-potter.jpg" alt=""
                            width="320" height="180" className='rounded-t' />
                        <h2 className='font-orbitron py-1 text-center'>Harry Potter</h2>
                    </Link>

                </li>
                <li className='bg-white border rounded shadow w-80 hover:shadow-xl'>
                    <Link href="/reviews/star-wars">
                        <img src="/images/star-wars.jpg" alt=""
                            width="320" height="180" className='rounded-t' />
                        <h2 className='font-orbitron py-1 text-center'>Star Wars</h2>
                    </Link>
                </li>
            </ul>
        </>
    )
}