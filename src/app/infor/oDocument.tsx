/* eslint-disable react-hooks/rules-of-hooks */
import { motion } from 'framer-motion'
import { Button } from '@nextui-org/button';
import useDownloader from "react-use-downloader";

import SDownload from '@/svgs/download';
import SScroll from '@/svgs/scroll';
import { url } from 'inspector';

interface oDocumentProps {
    theme: string;
    for_class: string;
}

const fDocuments = {
    cv: [
        {
            url: "/static/pdf/CV-VN.pdf",
            name: "Curriculum Vitae - VN.pdf"
        }, {
            url: "/static/pdf/CV-EN.pdf",
            name: "Curriculum Vitae - EN.pdf"
        }
    ],
    at: [
        {
            url: "/static/pdf/AT-VN.pdf",
            name: "Academic Transcript - VN.pdf"
        }, 
        , {
            url: "/static/pdf/AT-EN.pdf",
            name: "Academic Transcript - EN.pdf"
        },
    ],
    gc: [
        {
            url: "/static/pdf/GC-VN.pdf",
            name: "Guardian Certificate - VN.pdf"
        }
    ]
}




const oDocument: React.FC<oDocumentProps> = ({ theme, for_class }) => {
    
    const { size, elapsed, percentage, download, 
        cancel, error, isInProgress } = useDownloader();

    return (
        <motion.div
                    className={ for_class }
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
                <h2 className='text-xl font-semibold'>Documents</h2>
                <section className='mt-0 ml-3'>
                    <div>
                        <ol className="relative border-s border-gray-500 dark:border-gray-200">
                            <li className="mb-7 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-gray-500 dark:border-gray-500 dark:bg-gray-400"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">Curriculum Vitae</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">This is my Curriculum Vitae</h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Summary of some basic information about myself. There are English and Vietnamese versions, you can download them for more information about me. Thanks for looking.</p>
                                <div className='grid grid-flow-row gap-1'>
                                    {
                                        fDocuments.cv.map((item, index) => {
                                            if (item != undefined ) return (
                                                <div key={index}>
                                                    <Button onClick={() => download(item.url, item.name)} isDisabled={isInProgress}
                                                        className="inline-flex items-center px-4 py-2 text-sm font-medium 
                                                            text-gray-900 bg-white border
                                                            border-gray-200 rounded-lg hover:bg-gray-100
                                                            hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700
                                                            dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
                                                            dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                                        <label>{item.name}</label>
                                                        <SDownload stokeLogo={theme}></SDownload>
                                                    </Button>
                                                    {error && <p>possible error {JSON.stringify(error)}</p>} 
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </li>
                            <li className="mb-7 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-gray-500 dark:border-gray-500 dark:bg-gray-400"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">Academic Transcript</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">University Of Economics Ho Chi Minh City</h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Summary of scores from my studies at Ho Chi Minh City University of Economics and authentic QR code from the school, including English and Vietnamese versions.</p>
                                <div className='grid grid-flow-row gap-1'>
                                    {
                                        fDocuments.at.map((item, index) => {
                                            if (item != undefined ) return (
                                                <div key={index}>
                                                    <Button onClick={() => download(item.url, item.name)} isDisabled={isInProgress}
                                                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                                        <label>{item.name}</label>
                                                        <SDownload stokeLogo={theme}></SDownload>
                                                    </Button>
                                                    {error && <p>possible error {JSON.stringify(error)}</p>} 
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </li>
                            <li className="ms-4">
                                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-gray-500 dark:border-gray-500 dark:bg-gray-400"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2024</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Graduation in University Of Economics Ho Chi Minh City</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">This is a temporary graduation certificate that you can check by accessing the link in the file or scanning the QR code.</p>
                                <div className='grid grid-flow-row gap-1'>
                                    {
                                        fDocuments.gc.map((item, index) => {
                                            if (item != undefined ) return (
                                                <div key={index}>
                                                    <Button onClick={() => download(item.url, item.name)} isDisabled={isInProgress}
                                                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                                        <label>{item.name}</label>
                                                        <SDownload stokeLogo={theme}></SDownload>
                                                    </Button>
                                                    {error && <p>possible error {JSON.stringify(error)}</p>} 
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </li>
                        </ol>
                    </div>
                </section>



                </motion.div>
    );
}

export default oDocument