

const Footer = () => {

    return (

        <footer className="rounded-lg shadow-md dark:shadow-cyan-700/50 bg-gray-100/20 my-4">
            <div className="w-full mx-auto p-4 flex md:items-center  justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Larva™</span>
                <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 gap-2">
                    <li>
                        <a href="#" className="hover:underline">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Reference</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer