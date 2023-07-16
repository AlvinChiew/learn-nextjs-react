import Link from 'next/link';

export default function ReviewPage() {
    return (
        <>
            <h1>Reviews</h1>
            <p>You can browse all reviews here</p>
            <ul>
                <li>
                    <Link href="/reviews/harry-potter">Harry Potter</Link>
                </li>
                <li>
                    <Link href="/reviews/star-wars" prefetch={false}>Star Wars</Link>
                </li>
            </ul>
        </>
    )
}