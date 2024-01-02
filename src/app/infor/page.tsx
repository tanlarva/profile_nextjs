"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import ODocument from "./oDocument";
import OLinkInfo from "./oLinkInfo";
import OInfor from "./oInfor";

const Information = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const gTheme = theme != undefined ? theme : 'light'

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="w-full grid justify-items-center">
            <div className="grid w-full grid-cols-1 px-4
                            md:w-4/5 xl:w-3/5 md:grid-rows-3 md:grid-cols-5 md:gap-4">
                <ODocument theme={gTheme} for_class="md:pt-0 md:row-span-3 md:col-span-3"></ODocument>
                <OLinkInfo theme={gTheme} for_class="px-2 py-8 md:py-0 md:col-span-2"></OLinkInfo>
                <OInfor theme={gTheme} for_class="px-4 md:row-span-2 md:col-span-2"></OInfor>
            </div>
        </section>
    )
}

export default Information

