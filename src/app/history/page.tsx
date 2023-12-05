
const History = () => {
    return (
        <section className="w-full grid justify-items-center">
            <div className="w-3/5">
                <ol className="relative border-s border-gray-500 dark:border-gray-200">
                    <li className="ms-4">
                        <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-gray-500 dark:border-gray-500 dark:bg-gray-400"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                    </li>
                </ol>
            </div>
            
        </section>
    )
}

export default History