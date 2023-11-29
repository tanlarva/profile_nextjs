import { motion } from "framer-motion"

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
    )
}

export default oInfor