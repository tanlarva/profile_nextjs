'use client';

import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/provider"

export function Providers({ 
    children 
}: { 
    children: React.ReactNode 
}) {
    return (
            <NextUIProvider>
                <NextThemesProvider attribute="class" defaultTheme="light">
                    <CacheProvider>
                        <ChakraProvider>
                            {children}
                        </ChakraProvider>
                    </CacheProvider>
                </NextThemesProvider>
            </NextUIProvider>
    )
}