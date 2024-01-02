
import Link from "next/link"

interface sLinkedInProps {
    link: string,
    theme: string,
    for_class: string,
}

const sLinkedIn: React.FC<sLinkedInProps> = ({ link, theme, for_class }) => {

    const strokeLogo = theme === 'light' ? true : false
     
    return (
        <Link
            key={link}
            href={link}
            target="_blank"
            className="flex flex-row"
        >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <path fill={strokeLogo ? "#8ce7f2" : "#082f49"} d="M40,44H15c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v25C44,42.2,42.2,44,40,44z"></path>
                <path fill="none" stroke={strokeLogo ? "#18193f" : "#38bdf8"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M40.5,31.7v4.8c0,2.2-1.8,4-4,4h-25c-2.2,0-4-1.8-4-4V24.9"></path>
                <path fill="none" stroke={strokeLogo ? "#18193f" : "#38bdf8"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M7.5,19.2v-7.7c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v14"></path>
                <circle cx="15.5" cy="15.5" r="2.5" fill={strokeLogo ? "#18193f" : "#38bdf8"}></circle>
                <path fill={strokeLogo ? "#18193f" : "#38bdf8"} d="M17,35h-3c-0.6,0-1-0.4-1-1V21c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v13C18,34.6,17.6,35,17,35z"></path>
                <path fill={strokeLogo ? "#18193f" : "#38bdf8"} d="M29,20c-1.5,0-2.9,0.6-4,1.5V21c0-0.6-0.4-1-1-1h-3c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1	v-7.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5V34c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1v-8C35,22.7,32.3,20,29,20z"></path>
            </svg>
            <label className="px-1 py-3">Linkedin</label>
        </Link>
    )
}

export default sLinkedIn