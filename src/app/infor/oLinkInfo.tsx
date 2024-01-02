import { motion } from 'framer-motion'
import Link from 'next/link'

import SGithub from '@/svgs/github';
import SLinkedIn from '@/svgs/linkedin';
import STwitter from '@/svgs/twitter';

interface oLinkInForProps {
    theme: string;
    for_class: string;
}

const information = {
    github: "https://github.com/tanlarva",
    linkedin: "https://linkedin.com/in/tanlarva",
    twitter: "https://twitter.com/Tanlarva",
    freelancer: "https://freelancer.com/tanlarva"
}

const oLinkInFor: React.FC<oLinkInForProps> = ({ theme, for_class }) => {
    const strokeLogo = theme === "light" ? true: false
    return (
        <motion.div
            className={ for_class }
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
            <div className="flex flex-row lg:flex-col justify-between gap-3">
                <SGithub link={information['github']} theme={theme} for_class='flex flex-row'></SGithub>
                <SLinkedIn link={information['linkedin']} theme={theme} for_class='flex flex-row'></SLinkedIn>
                <STwitter link={information['twitter']} theme={theme} for_class='flex flex-row'></STwitter>
            </div>
        </motion.div>
    )
}

export default oLinkInFor