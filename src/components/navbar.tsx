"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"
import { useState } from "react";
import React from "react";

const navItems = [
    {
        path: '/',
        name: 'Home',
    }, {
        path: '/infor',
        name: 'Information',
    }, {
        path: '/works',
        name: 'Works',
    }, {
        path: '/history',
        name: 'History',
    }, {
        path: '/reference',
        name: 'Reference'
    }
]

interface NavbarProps {
    for_class: string;
}

const Navbar: React.FC<NavbarProps> = ({ for_class }) => {
    const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

    let pathname = usePathname() || "/";
    const classes = for_class != undefined ? for_class : 'w-full';

    const [hoveredPath, setHoveredPath] = useState(pathname);

    return (
        <div className={classes}>
            <div className="shadow-md dark:shadow-cyan-700/50 p-[0.4rem] rounded-lg mb-5 sticky 
                            z-[100] bg-gray-100/20 backdrop-blur-md">
                <nav className="flex relative justify-start w-full z-[100] rounded-xl pt-1 pb-0.5">
                    <button type="button"
                        className="relative md:hidden inline-flex items-center justify-center rounded-md p-2
                                text-gray-400 hover:bg-gray-700/20 dark:hover:bg-gray-300/20 hover:text-white
                                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300/40"
                        ria-controls="mobile-menu"
                        aria-expanded={isMobileMenuVisible}
                        onClick={() => setMobileMenuVisible(!isMobileMenuVisible)}
                    >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>

                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                        <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className={` ${isMobileMenuVisible ? '' : 'hidden'}`} id="mobile-menu">
                        <ul className="px-2">
                            {navItems.map((item, index) => {
                                const isActive = item.path === pathname;
                                return (
                                    <li
                                        key={item.path}
                                        className="my-2"
                                    >
                                        <Link
                                            className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${isActive ? "text-zinc-900" : "text-zinc-500"
                                                }`}
                                            data-active={isActive}
                                            href={item.path}
                                            onMouseOver={() => setHoveredPath(item.path)}
                                            onMouseLeave={() => setHoveredPath(pathname)}
                                        >
                                            <span>{item.name}</span>
                                            {item.path === hoveredPath && (
                                                <motion.div
                                                    className="absolute bottom-0 left-0 h-full rounded-md -z-10
                                                                bg-gradient-to-tr from-cyan-400 from-1% via-slate-200 via-70% to-fuchsia-600 to-1%"
                                                    layoutId="navbar"
                                                    aria-hidden="true"
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                    transition={{
                                                        type: "spring",
                                                        bounce: 0.25,
                                                        stiffness: 130,
                                                        damping: 9,
                                                        duration: 0.3,
                                                    }}
                                                />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex flex-col md:flex-row">
                            {navItems.map((item, index) => {
                                const isActive = item.path === pathname;
                                return (
                                    <li
                                        key={item.path}
                                    >
                                        <Link
                                            className={`px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${isActive ? "text-zinc-900" : "text-zinc-500"
                                                }`}
                                            data-active={isActive}
                                            href={item.path}
                                            onMouseOver={() => setHoveredPath(item.path)}
                                            onMouseLeave={() => setHoveredPath(pathname)}
                                        >
                                            <span>{item.name}</span>
                                            {item.path === hoveredPath && (
                                                <motion.div
                                                    className="absolute bottom-0 left-0 h-full rounded-md -z-10
                                                                bg-gradient-to-tr from-cyan-400 from-1% via-slate-200 via-70% to-fuchsia-600 to-1%"
                                                    layoutId="navbar"
                                                    aria-hidden="true"
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                    transition={{
                                                        type: "spring",
                                                        bounce: 0.25,
                                                        stiffness: 130,
                                                        damping: 9,
                                                        duration: 0.3,
                                                    }}
                                                />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    
                </nav>
            </div>
        </div>
    )
}

export default Navbar;