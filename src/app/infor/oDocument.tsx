/* eslint-disable react-hooks/rules-of-hooks */
import { motion } from 'framer-motion'
import { Button } from '@nextui-org/button';
import useDownloader from "react-use-downloader";

interface oDocumentProps {
    theme: String;
}

const fDocuments = [
    {
        url: "/CV-VN.pdf",
        name: "CV - Phan Duy Tân.pdf"
    }, {
        url: "/CV-EN.pdf",
        name: "CV - Phan Duy Tan.pdf"
    }, {
        url: "/AT-VN.pdf",
        name: "AT - Phan Duy Tân.pdf"
    }, {
        url: "/AT-EN.pdf",
        name: "AT - Phan Duy Tan.pdf"
    },
]

// File
import logoDark from "@/images/logos/logo-dark.ico";
import logoLight from "@/images/logos/logo-light.ico";

const oDocument: React.FC<oDocumentProps> = ({ theme }) => {
    const urlLogo = theme === "light" ? logoLight.src : logoDark.src
    
    const { size, elapsed, percentage, download, 
        cancel, error, isInProgress } = useDownloader();

    return (
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
                <b>Documents</b>
                {fDocuments.map((item, index) => {
                    return (
                        <div key={index}>
                            <Button onClick={() => download(item.url, item.name)} isDisabled={isInProgress}
                                    className="bg-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#8ce7f2" d="M37.5,39.5H40c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5h-1.5V24c0-5.8-4.7-10.5-10.5-10.5S17.5,18.2,17.5,24v0.5	H16c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h2.1H37.5z"></path>
                                    <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M32.4,13.8c-1.9-2.6-5-4.3-8.4-4.3c-5.8,0-10.5,4.7-10.5,10.5v0.5H12c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5	h2.1"></path>
                                    <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M33.5,35.5H36c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5h-1.5"></path>
                                    <polyline fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" points="28.5,35.8 24,40.3 19.5,35.8"></polyline>
                                    <line x1="24" x2="24" y1="25.3" y2="40.3" fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3"></line>
                                </svg>
                                <label>{ item.name }</label>
                            </Button>
                            {error && <p>possible error {JSON.stringify(error)}</p>} 
                        </div>
                    )
                })
                        }
                    </div>
                </motion.div>
    );
}

export default oDocument