export default function RootLayout({ children }) {
    console.log('[HomePage] rendering...')
    return (
        <html lang="en">
            <body>
                <header>
                    [header]
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    [footer]
                </footer>
            </body>
        </html>
    )
}