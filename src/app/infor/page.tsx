"use client"

const information = {
    name: "Phan Duy Tân",
    school: "UEH University",
    gpa: "7.92/10 (3.17/4)",
    email: "phanduytan475@gmail.com",
    number: "+84326456764",
    numberFormat: "tel:+84326456764",

    github: "https://github.com/tanlarva",
    linkedin: "https://linkedin.com/in/tanlarva",
    freelancer: "https://freelancer.com/tanlarva"
}

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import useDownloader from "react-use-downloader";

// File
import logoDark from "@/images/logos/logo-dark.ico";
import logoLight from "@/images/logos/logo-light.ico";

const Information = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const urlLogo = theme === "light" ? logoLight.src : logoDark.src
    const strokeLogo = theme === "light" ? true: false
    const { size, elapsed, percentage, download, 
        cancel, error, isInProgress } = useDownloader();
    const urlCV = "/CV-VN.pdf"
    const nameCV = "CV - Phan Duy Tân - PHP Developer.pdf"

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="w-full grid justify-items-center">
            <div className="grid w-3/5
                            2xl:grid-row-3 2xl:grid-flow-col
                            lg:grid-row-3 lg:grid-flow-col
                            md:grid-col-2
                            gap-4">
                <motion.div
                    className="lg:row-span-3
                                border border-stone-200/90 dark:border-stone-700/90 p-[0.4rem] rounded-lg
                             bg-stone-100/20 backdrop-blur-md w-full"
                    initial={{ 
                        opacity: 0,
                        translateX: -100
                    }}
                    animate={{
                        opacity: 1,
                        translateX: 0
                    }}
                    transition={{ 
                        type: 'spring',
                        duration: 0.3,
                        bounce: 0.1,
                        stiffness: 100,
                        damping: 9,
                     }}
                >
                    <div className="grid grid-flow-row justify-items-center">
                        <motion.img
                            className=""
                            src={urlLogo}
                            width={100}
                            height={100}
                            alt="This is Tân Larva"
                            whileHover={{ 
                                scale: 1.3
                            }}
                            whileTap={{ 
                                scale: 0.8
                            }}
                        ></motion.img>
                        <p>Documents</p>
                        <div>
                            <Button onClick={() => download(urlCV, nameCV)} isDisabled={isInProgress}
                                    className="bg-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#8ce7f2" d="M37.5,39.5H40c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5h-1.5V24c0-5.8-4.7-10.5-10.5-10.5S17.5,18.2,17.5,24v0.5	H16c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h2.1H37.5z"></path>
                                    <path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M32.4,13.8c-1.9-2.6-5-4.3-8.4-4.3c-5.8,0-10.5,4.7-10.5,10.5v0.5H12c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5	h2.1"></path>
                                    <path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M33.5,35.5H36c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5h-1.5"></path>
                                    <polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" points="28.5,35.8 24,40.3 19.5,35.8"></polyline>
                                    <line x1="24" x2="24" y1="25.3" y2="40.3" fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line>
                                </svg>
                                <label>My CV</label>
                            </Button>
                            {error && <p>possible error {JSON.stringify(error)}</p>} 
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="lg:col-span-2
                            border border-stone-200/90 dark:border-stone-700/90 p-[0.4rem] rounded-lg
                            bg-stone-100/20 backdrop-blur-md w-full"
                    initial={{ 
                        opacity: 0,
                        translateY: 200
                    }}
                    animate={{
                        opacity: 1,
                        translateY: 0
                    }}
                    transition={{ 
                        type: 'spring',
                        duration: 0.3,
                        bounce: 0.1,
                        stiffness: 100,
                        damping: 9,
                     }}
                >
                    <div className="flex md:flex-row p-3
                                    sm:flex-col">
                        <Link
                            key={information['github']}
                            href={information['github']}
                            target="_blank"
                            className="flex flex-row"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                <circle cx="28" cy="28" r="18" fill={strokeLogo ? "#c4b5fd" : "#1e1b4b"}></circle>
                                <path fill="none" stroke={strokeLogo ? "#1f2937" : "#818cf8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M35.054,38.836	C31.97,41.137,28.144,42.5,24,42.5C13.783,42.5,5.5,34.217,5.5,24c0-2.917,0.675-5.676,1.878-8.13"></path>
                                <path fill="none" stroke={strokeLogo ? "#1f2937" : "#818cf8"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13.869,8.518	C16.779,6.61,20.26,5.5,24,5.5c10.217,0,18.5,8.283,18.5,18.5c0,2.941-0.686,5.721-1.907,8.19"></path>
                                <path fill={strokeLogo ? "#1f2937" : "#818cf8"} d="M34,23c0-1.574-0.576-3.038-1.558-4.275c0.442-1.368,0.93-3.771-0.242-5.648	c-2.251,0-3.73,1.545-4.436,2.514C26.602,15.213,25.333,15,24,15s-2.602,0.213-3.764,0.591c-0.706-0.969-2.184-2.514-4.436-2.514	c-1.328,2.126-0.526,4.45-0.073,5.43C14.638,19.788,14,21.334,14,23c0,3.78,3.281,6.94,7.686,7.776	c-1.309,0.673-2.287,1.896-2.587,3.38h-1.315c-1.297,0-1.801-0.526-2.502-1.415c-0.692-0.889-1.437-1.488-2.331-1.736	c-0.482-0.051-0.806,0.316-0.386,0.641c1.419,0.966,1.516,2.548,2.085,3.583C15.168,36.161,16.229,37,17.429,37H19v5.942h10v-7.806	c0-1.908-1.098-3.544-2.686-4.36C30.719,29.94,34,26.78,34,23z"></path>
                            </svg>
                            <label className="px-1 py-3">Github</label>
                        </Link>
                        <div>
                            <Link
                                key={information['linkedin']}
                                href={information['linkedin']}
                                target="_blank"
                                className="flex flex-row"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                    <circle cx="28" cy="28" r="18" fill={strokeLogo ? "#90caf9" : "#082f49"}></circle>
                                    <circle cx="15.5" cy="15.5" r="2.5" fill={strokeLogo ? "#1f2937" : "#38bdf8"}></circle>
                                    <path fill={strokeLogo ? "#1f2937" : "#38bdf8"} d="M17,35h-3c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1v13	C18,34.553,17.553,35,17,35z"></path>
                                    <path fill={strokeLogo ? "#1f2937" : "#38bdf8"} d="M29,20c-1.538,0-2.937,0.586-4,1.541V21c0-0.553-0.447-1-1-1h-3c-0.553,0-1,0.447-1,1v13	c0,0.553,0.447,1,1,1h3c0.553,0,1-0.447,1-1v-7.5c0-1.379,1.121-2.5,2.5-2.5s2.5,1.121,2.5,2.5V34c0,0.553,0.447,1,1,1h3	c0.553,0,1-0.447,1-1v-8C35,22.691,32.309,20,29,20z"></path>
                                    <path fill="none" stroke={strokeLogo ? "#1f2937" : "#38bdf8"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M30.187,41.44C28.252,42.126,26.17,42.5,24,42.5C13.783,42.5,5.5,34.217,5.5,24c0-4.69,1.745-8.972,4.621-12.232"></path>
                                    <path fill="none" stroke={strokeLogo ? "#1f2937" : "#38bdf8"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M16.98,6.878C19.145,5.99,21.515,5.5,24,5.5c10.217,0,18.5,8.283,18.5,18.5c0,5.267-2.201,10.019-5.733,13.388"></path>
                                </svg>
                                <label className="px-1 py-3">Linkedin</label>
                            </Link>
                            
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="lg:row-span-2 col-span-2
                            border border-stone-200/90 dark:border-stone-700/90 p-[0.4rem] rounded-lg
                            bg-stone-100/20 backdrop-blur-md w-full h-30"
                    initial={{ 
                        opacity: 0,
                        translateY: 200
                    }}
                    animate={{
                        opacity: 1,
                        translateY: 0
                    }}
                    transition={{ 
                        type: 'spring',
                        duration: 0.3,
                        bounce: 0.1,
                        stiffness: 100,
                        damping: 9,
                        delay: 0.15
                     }}
                >
                    <div className="grid grid-cols-6 pt-3 px-5">
                        <h1 className="col-span-2 font-bold">Name: </h1>
                                              <h1 className="col-span-4 px-2">{ information['name'] }</h1>
                    </div>
                    <div className="grid grid-cols-6 pt-3 px-5">
                        <h1 className="col-span-2 font-bold">School: </h1>
                        <h1 className="col-span-4 px-2">{ information['school'] }</h1>
                    </div>
                    <div className="grid grid-cols-6 pt-3 px-5">
                        <h1 className="col-span-2 font-bold">GPA: </h1>
                        <h1 className="col-span-4 px-2">{ information['gpa'] }</h1>
                    </div>
                    <div className="grid grid-cols-6 pt-3 px-5">
                        <h1 className="col-span-2 font-bold">Gmail: </h1>
                        <h1 className="col-span-4 px-2">{ information['email'] }</h1>
                    </div>
                    <div className="grid grid-cols-6 pt-3 px-5">
                        <h1 className="col-span-2 font-bold">Number: </h1>
                        <h1 className="col-span-4 px-2"><a href={information['numberFormat']}>{ information['number'] }</a></h1>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Information

