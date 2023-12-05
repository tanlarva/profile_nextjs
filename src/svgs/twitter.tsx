
import Link from "next/link"

interface sTwitterProps {
    link: string,
    theme: string,
    for_class: string,
}

const sTwitter: React.FC<sTwitterProps> = ({ link, theme, for_class }) => {

    const strokeLogo = theme === 'light' ? true : false
     
    return (
        <Link
            key={link}
            href={link}
            target="_blank"
            className="flex flex-row"
        >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <path fill={strokeLogo ? "#f3f4f6" : "#18193f"} d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242	C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z"></path>
                <path fill="none" stroke={strokeLogo ? "#18193f" : "#f3f4f6"} stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M40.5,31.5v5	c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V26"></path>
                <path fill="none" stroke={strokeLogo ? "#18193f" : "#f3f4f6"} stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M7.5,18.064V11.5	c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v11.33"></path>
                <path fill={strokeLogo ? "#18193f" : "#f3f4f6"} d="M34.257,34H27.82L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path>
                <polygon fill={strokeLogo ? "#18193f" : "#f3f4f6"} points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon>
                <polygon fill={strokeLogo ? "#18193f" : "#f3f4f6"} points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
            </svg>
            <label className="px-1 py-3">Twitter</label>
        </Link>
    )
}

export default sTwitter