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
            <div className="grid w-3/5
                            2xl:grid-row-3 2xl:grid-flow-col
                            lg:grid-row-3 lg:grid-flow-col
                            md:grid-col-2
                            gap-4">
                <ODocument theme={gTheme}></ODocument>
                <OLinkInfo theme={gTheme}></OLinkInfo>
                <OInfor
                    theme={gTheme}
                    for_class="g:row-span-2 col-span-2
                                border border-stone-200/90 dark:border-stone-700/90 p-[0.4rem] rounded-lg
                                bg-stone-100/20 backdrop-blur-md w-full h-30"
                ></OInfor>
            </div>
        </section>
    )
}

export default Information

