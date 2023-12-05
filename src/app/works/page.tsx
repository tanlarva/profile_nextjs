"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

import InUEH from "@/app/works/oUeh"
import TextScroll from "@/components/textScroll/textScroll"
import { useTheme } from "next-themes"

const Works = () => {
    const [ mounted, setMounted ] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <div className="w-full min-h-screen">
            <InUEH theme={theme != undefined ? theme : 'dark'}></InUEH>
            <section className="py-5">
                <TextScroll></TextScroll>
            </section>
                        <div className="grid justify-items-center">
                <section className="w-3/5 grid grid-cols-5 gap-4">
                    <motion.div
                        className="col-span-2 h-10 bg-cyan-600/25 rounded-lg"
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
                        className="col-span-3 h-10 bg-purple-600/25 rounded-lg"
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
