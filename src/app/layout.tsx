import { montserrat } from './fonts';
import './globals.css'
import dynamic from 'next/dynamic';
import { Providers } from './providers';

const Navbar = dynamic(() => import('@/components/navbar'), {ssr: false})
const Larva = dynamic(() => import('@/components/larva'), { ssr: false })
const Footer = dynamic(() => import('@/components/footer'), {ssr: false})
const ThemeSwitcher = dynamic(() => import('@/components/themeSwitcher'), {ssr: false})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={montserrat.className}>
            <body className="static overflow-x-hidden min-w-screen min-h-screen
                                bg-gradient-to-tr from-cyan-400 from-1% via-neutral-100 via-60% to-fuchsia-500 to-1%
                                dark:from-cyan-950 dark:from-1% dark:via-neutral-950 dark:via-60% dark:to-fuchsia-950 dark:to-1%">
                <Providers>
                    <main className='grid justify-items-center'>
                        <div className='p-5 py-5 w-3/5 flex flex-row'>
                            <Larva for_class='basis-3/4' />
                            <ThemeSwitcher for_class='basis-1/4 grid justify-items-end'/>
                        </div>
                        <Navbar for_class='w-3/5' />
                    </main>
                    <main>
                        {children}
                    </main>
                    <main className='absolute bottom-0'>
                        <Footer/>
                    </main>
                </Providers>
            </body>
        </html>
    )
}

