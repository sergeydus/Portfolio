"use client"
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { motion, useInView } from "motion/react"
import TV1_Image from '../../../public/TV1.svg';
import TV2_Image from '../../../public/TV2.svg';

const SparkoTV: React.FC<{ title: string, children: ReactNode }> = ({ children, title }) => {
    const tvRef = React.useRef(null);
    const isTvInView = useInView(tvRef, { once: true });

    return (
        <motion.div
            initial={{ background: 'rgb(from var(--background) r g b / 0)' }}
            transition={{ duration: 2, delay: 2 }}
            animate={{ background: isTvInView ? 'rgb(from var(--background) r g b / 1)' : 'rgb(from var(--background) r g b / 0)' }}
            className="flex rounded-lg w-full overflow-hidden">
            <motion.div
                transition={{ duration: 2, delay: 2 }}
                animate={{ color: isTvInView ? '#ffffff' : '#ffffff0' }}
                className="flex flex-col gap-2 p-4 text-lg">
                <motion.div
                    transition={{ duration: 2, delay: 2 }}
                    animate={{ opacity: isTvInView ? 1 : 0 }}
                    initial={{ opacity: 0 }} className="flex font-bold text-xl lg:text-4xl text-[#a07db1] self-center underline">
                    {title}
                </motion.div>
                <div className='relative flex items-center justify-center self-center w-full'>
                    <motion.div
                        ref={tvRef}
                        initial={{ opacity: 1 }}
                        whileInView={{ opacity: 0.08 }}
                        transition={{ duration: 3, delay: 3 }}
                        viewport={{ once: true, amount: 'some' }}
                        className='flex absolute z-20 top-0 w-full items-center justify-center'
                    >
                        <div className='aspect-1920/1080 w-full lg:w-[480px] lg:h-[270px] flex items-center justify-center relative'>
                            <Image src={TV1_Image} alt="Supplant TV App Image" fill></Image>
                        </div>
                    </motion.div>
                    <div className='aspect-1920/1080 w-full h-auto lg:w-[480px] lg:h-[270px] flex items-center justify-center relative'>
                        <Image src={TV2_Image} alt="Supplant TV App Image" fill></Image>
                    </div>
                </div>
                <motion.div transition={{ duration: 2, delay: 2 }} animate={{ opacity: isTvInView ? 1 : 0 }} initial={{ opacity: 0 }} className="flex flex-col gap-2 p-4 text-lg text-black dark:text-white">
                    {children}
                </motion.div>
            </motion.div>

        </motion.div>
    );
};

export default SparkoTV;