"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

import TextScroll from "@/components/textScroll/textScroll"

const Works = () => {
    const [ mounted, setMounted ] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <div className="w-full">
            <div className="grid justify-items-center">
                <section className="w-3/5 grid grid-cols-5 gap-2">
                    <motion.div
                        className="col-span-2 h-screen bg-indigo-600/25 border rounded-lg"
                        initial={{
                            opacity: 0,
                            translateX: -200
                        }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        animate={{ 
                            translateX: 0
                        }}
                        transition={{ 
                            type: "spring",
                            bounce: 0.25,
                            stiffness: 130,
                            damping: 9,
                            duration: 0.3,
                        }}
                    >1</motion.div>
                    <motion.div
                        className="col-span-3 h-screen bg-violet-600/25 border rounded-lg"
                        initial={{
                            opacity: 0,
                            translateX: 800
                        }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        animate={{ 
                            translateX: 0
                        }}
                        transition={{ 
                            type: "spring",
                            bounce: 0.25,
                            stiffness: 130,
                            damping: 9,
                            duration: 0.3,
                        }}
                    >1.2</motion.div>
                </section>
            </div>
            <section className="py-5">
                <TextScroll></TextScroll>
            </section>
                        <div className="grid justify-items-center">
                <section className="w-3/5 grid grid-cols-5 gap-2">
                    <motion.div
                        className="col-span-2 h-screen bg-cyan-600/25 border rounded-lg"
                        initial={{
                            opacity: 0,
                            translateX: -200
                        }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        animate={{ 
                            translateX: 0
                        }}
                        transition={{ 
                            type: "spring",
                            bounce: 0.25,
                            stiffness: 130,
                            damping: 9,
                            duration: 0.3,
                        }}
                    >1</motion.div>
                    <motion.div
                        className="col-span-3 h-screen bg-purple-600/25 border rounded-lg"
                        initial={{
                            opacity: 0,
                            translateX: 800
                        }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        animate={{ 
                            translateX: 0
                        }}
                        transition={{ 
                            type: "spring",
                            bounce: 0.25,
                            stiffness: 130,
                            damping: 9,
                            duration: 0.3,
                        }}
                    >1.2</motion.div>
                </section>
            </div>
        </div>
    )
}

export default Works
