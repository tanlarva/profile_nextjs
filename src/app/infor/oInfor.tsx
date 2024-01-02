import { motion } from "framer-motion"
// File
import logoDark from "@/images/logos/logo-dark.ico";
import logoLight from "@/images/logos/logo-light.ico";
import cloudSky from "@/images/svg/cloud_sky.svg"
import cloudFuchsia from "@/images/svg/cloud_fuchsia.svg"


interface oInforProps {
    theme: string,
    for_class: string
}

const information = {
    name: "Phan Duy Tân",
    school: "UEH University",
    gpa: "7.92/10 (3.17/4)",
    email: "phanduytan475@gmail.com",
    number: "+84326456764",
    numberFormat: "tel:+84326456764",
}

const oInfor: React.FC<oInforProps> = ({ theme, for_class }) => {

    const urlLogo = theme === "light" ? logoLight.src : logoDark.src
    const urlBg = theme === "light" ? cloudSky.src : cloudFuchsia.src


    return (
        <motion.div
            className={for_class}
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
            <div className="grid grid-flow-row justify-center">
                <div className="p-4 rounded-md bg-gray-100/20 shadow-md dark:shadow-cyan-700/50">
                    <div className="flex flex-wrap pt-2">
                        <h1 className="col-span-2 font-bold">Name: </h1>
                        <h1 className="col-span-4 px-2">{ information['name'] }</h1>
                    </div>
                    <div className="flex flex-wrap pt-2">
                        <h1 className="font-bold">School: </h1>
                        <h1 className="px-2">{ information['school'] }</h1>
                    </div>
                    <div className="flex flex-wrap pt-2">
                        <h1 className="font-bold">GPA: </h1>
                        <h1 className="px-2">{ information['gpa'] }</h1>
                    </div>
                    <div className="flex flex-wrap pt-2">
                        <h1 className="font-bold">Gmail: </h1>
                        <h1 className="px-2">{ information['email'] }</h1>
                    </div>
                    <div className="flex flex-wrap pt-3">
                        <h1 className="font-bold">Number: </h1>
                        <h1 className="px-2"><a href={information['numberFormat']}>{ information['number'] }</a></h1>
                    </div>
                </div>
            </div>
            
            <div className="py-8 grid grid-flow-row justify-items-center">
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
            </div>
        </motion.div>
    )
}

export default oInfor