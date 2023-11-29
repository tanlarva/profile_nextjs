"ues client"

import { motion } from "framer-motion"
import { Image } from "@nextui-org/image"
import { useTheme } from "next-themes"

import logoUEH_light from '@/images/logos/ueh/ueh-light.png'
import logoUEH_dark from '@/images/logos/ueh/ueh-dark.png'
import { log } from "console"

interface inUEH {
    theme: string;
}

const inUEH: React.FC<inUEH> = ({theme}) => {

    return (
        <div className="grid justify-items-center">
                <section className="w-3/5 grid grid-cols-5 gap-4">
                    <motion.div
                        className="col-span-2"
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
                    >
                        <Image
                            src={theme === "light" ? logoUEH_light.src : logoUEH_dark.src}
                            height={100}
                            alt="UEH University"
                            ></Image>
                    </motion.div>
                    <motion.div
                        className="col-span-3 h-10 bg-violet-600/25 rounded-lg"
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
                >
                    <p>
                    </p>
                    </motion.div>
                </section>
            </div>
    )
}

export default inUEH;