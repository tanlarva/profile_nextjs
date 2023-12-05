interface sDownloadProps {
    stokeLogo: string
}

const sDownload: React.FC<sDownloadProps> = ({ stokeLogo }) => {
    const theme = stokeLogo === 'light' ? true : false;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill={ theme ? '#8ce7f2' : '#e5e7eb' } d="M37.5,39.5H40c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5h-1.5V24c0-5.8-4.7-10.5-10.5-10.5S17.5,18.2,17.5,24v0.5	H16c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h2.1H37.5z"></path>
            <path fill="none" stroke={ theme ? '#18193f' : '#0284c7' } strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M32.4,13.8c-1.9-2.6-5-4.3-8.4-4.3c-5.8,0-10.5,4.7-10.5,10.5v0.5H12c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5	h2.1"></path>
            <path fill="none" stroke={ theme ? '#18193f' : '#0284c7' } strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M33.5,35.5H36c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5h-1.5"></path>
            <polyline fill="none" stroke={ theme ? '#18193f' : '#0284c7' } strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" points="28.5,35.8 24,40.3 19.5,35.8"></polyline>
            <line x1="24" x2="24" y1="25.3" y2="40.3" fill="none" stroke={ theme ? '#18193f' : '#0284c7' } strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3"></line>
        </svg>
    )
}

export default sDownload