import Link from 'next/link'

const custom404 = () => {
    return (
        <main className="absolute top-0 z-[1000] h-screen w-full flex flex-col justify-center items-center bg-fuchsia-100 dark:bg-cyan-950">
            <h1 className="text-9xl font-extrabold text-black dark:text-white tracking-widest">404</h1>
            <div className="bg-fuchsia-600 dark:bg-cyan-400 px-2 text-sm rounded rotate-12 absolute font-bold">
                Page Not Found
            </div>
            <div className="mt-5">
                <a className="relative inline-block text-sm font-medium
                                text-fuchsia-600 dark:text-cyan-400 group
                                active:text-fuchsia-400 dark:active:text-cyan-200
                                focus:outline-none focus:ring">
                    <span className="absolute inset-0 transition-transform translate-x-1 translate-y-1 bg-fuchsia-500 dark:bg-cyan-400 group-hover:translate-y-0 group-hover:translate-x-0 rounded-lg"></span>
                    <span className="relative block px-8 py-3 bg-fuchsia-100 dark:bg-cyan-950 border border-current rounded-lg">
                        <Link href="/">Go Home</Link>
                    </span>
                </a>
            </div>
        </main>
    )
}

export default custom404;