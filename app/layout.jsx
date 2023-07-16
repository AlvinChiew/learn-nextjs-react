import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="px-8 py-2">
                <header>
                    [header]
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/reviews">Reviews</Link>
                            </li>
                            <li>
                                <Link href="/about" prefetch={false}>About</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    [footer]<br></br>
                    Image in the courtesy of <a href="http://rawg.io." target="_blank">RAWG</a>
                </footer>
            </body>
        </html>
    )
}