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
    },
]

interface NavbarProps {
    for_class: string;
}

const Navbar: React.FC<NavbarProps> = ({for_class}) =>{
    let pathname = usePathname() || "/";
    const classes = for_class ? for_class : 'w-full';
    // if (pathname.includes("/writing/")) {
    //     pathname = "/writing";
    // }

    const [hoveredPath, setHoveredPath] = useState(pathname);

    return (
        <div className={classes}>
            <div className="border border-stone-200/90 dark:border-stone-700/90 p-[0.4rem] rounded-lg mb-12 sticky 
                            top-4 z-[100] bg-stone-100/20 backdrop-blur-md">
                <nav className="flex gap-2 relative justify-start w-full z-[100] rounded-lg">
                    {navItems.map((item, index) => {
                        const isActive = item.path === pathname;
                        return (
                            <Link
                                key={item.path}
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
                        );
                    })}
                </nav>
            </div>
        </div>
    )
}

export default Navbar;