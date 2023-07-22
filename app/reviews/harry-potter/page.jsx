// import { readFile } from 'node:fs/promises'
// import { marked } from 'marked'
import Heading from '@/components/Heading';


export const metadata = {
    title: 'Harry Potter'
}

export default function HarryPorterPage() {
    // const text = await readFile('./content/reviews/harry-potter.md', 'utf8');
    // const html = marked(text, { headerIds: false, mangle: false });

    return (
        <>
            <Heading>Harry Potter</Heading>
            <img src="/images/harry-potter.jpg" alt="" width="640" height="360" className='mb-2 rounded' />
            <p>This is the review of Harry Potter Movie</p>
            {/* <article dangerouslySetInnerHTML={{ __html: html }} /> */}
        </>
    )
}