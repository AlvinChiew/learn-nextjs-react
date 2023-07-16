import Link from 'next/link';
import NavBar from '@/components/NavBar';
import { exo2, orbitron } from './fonts';
import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${exo2.variable} ${orbitron.variable}`} >
            <body className='bg-orange-50 flex flex-col px-4 py-2 min-h-screen'>
                <header>
                    <NavBar />
                </header>
                <main className='grow py-3'>
                    {children}
                </main>
                <footer className='border-t py-3 text-center text-xs'>
                    Image in the courtesy of{' '}
                    <a href="http://image.google.com" target="_blank" className='text-orange-800 hover:underline'>
                        Google Image
                    </a>
                </footer>
            </body>
        </ html>
    )
}