import { motion } from 'framer-motion'
import Link from 'next/link'

import SGithub from '@/svgs/github';
import SLinkedIn from '@/svgs/linkedin';
import STwitter from '@/svgs/twitter';

interface oLinkInForProps {
    theme: string;
}

const information = {
    github: "https://github.com/tanlarva",
    linkedin: "https://linkedin.com/in/tanlarva",
    twitter: "https://twitter.com/Tanlarva",
    freelancer: "https://freelancer.com/tanlarva"
}

const oLinkInFor: React.FC<oLinkInForProps> = ({ theme }) => {
    const strokeLogo = theme === "light" ? true: false
    return (
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
                <SGithub link={information['github']} theme={theme} for_class='flex flex-row'></SGithub>
                <SLinkedIn link={information['linkedin']} theme={theme} for_class='flex flex-row'></SLinkedIn>
                <STwitter link={information['twitter']} theme={theme} for_class='flex flex-row'></STwitter>
            </div>
        </motion.div>
    )
}

export default oLinkInFor