import Heading from '@/components/Heading';


export default function StarWarsPage() {
    return (
        <>
            <Heading>Star Wars</Heading>
            <img src="/images/star-wars.jpg" alt="" width="640" height="360" className='mb-2 rounded' />
            <p>This is a review of Star Wars Series.</p>
        </>
    )
}