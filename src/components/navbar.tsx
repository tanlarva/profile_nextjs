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

const Navbar: React.FC<NavbarProps> = ({for_class}) =>{
    let pathname = usePathname() || "/";
    const classes = for_class != undefined ? for_class : 'w-full';

    const [hoveredPath, setHoveredPath] = useState(pathname);

    return (
        <div className={classes}>
            <div className="shadow-md dark:shadow-cyan-700/50 p-[0.4rem] rounded-lg mb-12 sticky 
                            top-4 z-[100] bg-gray-100/20 backdrop-blur-md">
                <nav className="flex relative justify-start w-full z-[100] rounded-xl pt-1 pb-0.5">
                    <ul className="flex flex-col md:flex-row rtl:space-x-reverse">
                        {navItems.map((item, index) => {
                            const isActive = item.path === pathname;
                            return (
                                <li
                                    key={item.path}
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
                </nav>
            </div>
        </div>
    )
}

export default Navbar;