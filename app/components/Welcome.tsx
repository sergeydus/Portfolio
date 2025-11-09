"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "motion/react"
import { cn } from '../utils'

const Welcome: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const carouselRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: carouselRef,
    })
    const fixedScroll = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1])
    const visibility = useTransform(fixedScroll, [0, 1], ['hidden', 'visible'])

    return (
        <div className={cn("flex bg-red flex-col min-h-screen w-full items-center justify-center mb-4", className)}>
            <motion.div className="flex-1 flex flex-col items-center justify-center">
                <motion.div
                    animate={{
                        background: 'var(--color-text-primary',
                        maskImage: ['linear-gradient(var(--color-text-primary) -20%,transparent 0%, transparent 100%)', 'linear-gradient(var(--color-text-primary) 100%,transparent 120%, transparent 100%)']
                    }}
                    transition={{ duration: 5, ease: "easeInOut" }}
                    viewport={{ once: true }} className=" image relative font-bold mb-4 text-center [-webkit-text-fill-color:transparent] bg-clip-text!"
                >
                    {children}
                </motion.div>
            </motion.div>
            <motion.div
                ref={carouselRef}
                animate={{ y: [0, -10] }} transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 0.3,
                }}
            >
                <motion.a
                    style={{ opacity: fixedScroll, visibility: visibility }}
                    href="#about"
                    className="flex items-center justify-center rounded-[50%] h-16 w-16 bg-black dark:bg-white text-white dark:text-black text-4xl"
                >
                    &darr;
                </motion.a>
            </motion.div>
        </div>
    )
}

export default Welcome