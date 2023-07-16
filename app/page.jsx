import Link from 'next/link';
import Heading from '@/components/Heading';

export default function HomePage() {
    console.log('[HomePage] rendering...')
    return (
        <>
            <Heading>Welcome!</Heading>
            <p className='pb-5 '>Best reviews you can find online</p>
            <h2 className='font-semibold'>Featured</h2>
            <div className='bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full'>
                <Link href="/reviews/star-wars" className='flex flex-col sm:flex-row'>
                    <img src="/images/star-wars.jpg" alt=""
                        width="320" height="180" className='rounded-t sm:rounded-l sm:rounded-r-none' />
                    <h2 className='font-semibold font-orbitron py-1 text-center sm:px-2'>Star Wars</h2>
                </Link>
            </div>
        </>
    )
}