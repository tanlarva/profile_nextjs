/* eslint-disable react/no-unescaped-entities */
"use client";

import Avatar from "@/images/avatars/larva.png"
import { motion } from "framer-motion"
import React from "react";

interface LarvaProps {
    for_class: string;
}

const Larva: React.FC<LarvaProps> = ({for_class}) => {
    const classes = for_class ? for_class : 'basis-2/3';

    return (
        <div className={ classes }>
            <section className="w-full min-w-screen flex gap-4 justify-start mb-3 p-2">
                <div className="h-auto w-full md:w-20 rounded-full overflow-hidden shadow-md dark:shadow-cyan-700/50 bg-transparent">
                    <motion.img
                        className="w-full h-full object-cover"
                        src={Avatar.src}
                        alt="This is Tân Larva"
                        initial={{ opacity:0 }}
                        animate={{ opacity:1 }}
                        transition={{
                            type: 'spring',
                            duration: 0.3,
                            bounce: 0.25,
                            stiffness: 130,
                            damping: 9,
                        }}
                        >
                    </motion.img>
                </div>
                <div className="flex flex-col gap-2 justify-center text-gray-900 dark:text-gray-200">
                    <h2 className="mb-0 font-bold">Tân Larva</h2>
                    <p className="mb-0 font-semibold leading-none">
                        Hello, I'm full-stack Developer from VietNam ️🎉
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Larva;