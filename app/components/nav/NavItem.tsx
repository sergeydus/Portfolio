"use client"
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react"
import clsx from "clsx";

type NavItemProps = {
    href?: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};

export default function NavItem({ href = "#", children, className = "", style }: NavItemProps) {
    const [hover, setHover] = useState(false);

    // const baseStyle: React.CSSProperties = {
    //     color: "inherit",
    //     textDecoration: "none",
    //     transition: "color 150ms ease",
    //     cursor: "pointer",
    //     outline: "none",
    //     ...style,
    // };

    return (

        <li className="relative">
            <motion.a
                href={href}
                className="text-2xl p-2 font-semibold leading-10 tracking-tight text-black dark:text-zinc-50"
                whileHover={{color:'var(--color-orange-500)'}}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onFocus={() => setHover(true)}
                onBlur={() => setHover(false)}
            >
                {children}
            </motion.a>
            <AnimatePresence>
                {hover && (
                    <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: -10 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ type: "spring" }}
                        className={clsx('bg-primary w-full h-1 opacity-50 absolute', {
                            'bg-primary opacity-100': hover
                        })} layout />

                )}
            </AnimatePresence>
        </li>
    );
}