"use client"
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { motion, useInView } from "motion/react"


const SparkoTV: React.FC<{ title: string, children: ReactNode }> = ({ children, title }) => {
    const tvRef = React.useRef(null);
    const isTvInView = useInView(tvRef, { once: true });

    return (
        <motion.div
            transition={{ duration: 2, delay: 2 }}
            animate={{ background: isTvInView ? '#0d0d0d' : '#0000000' }}
            className="flex rounded-lg w-full overflow-hidden">
            <motion.div
                transition={{ duration: 2, delay: 2 }}
                animate={{ color: isTvInView ? '#ffffff' : '#ffffff0' }}
                className="flex flex-col gap-2 p-4 text-lg">
                <motion.div
                    transition={{ duration: 2, delay: 2 }}
                    animate={{ opacity: isTvInView ? 1 : 0 }}
                    initial={{ opacity: 0 }} className="flex font-bold text-4xl text-[#a07db1] self-center underline">
                    {title}
                </motion.div>
                <div style={{ height: 270, width: 480, position: 'relative' }} className='self-center'>
                    <div ref={tvRef} className='absolute z-20 top-0 left-0 h-full w-full'>
                        <Image src={'/TV1.svg'} alt="Supplant TV App Image" style={{ width: '400px', height: 'auto' }} width={0} height={0}></Image>
                    </div>
                    <motion.div className='absolute z-30 top-0 left-0 h-full w-full'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 3 }}
                        viewport={{ once: true }}
                    >
                        <Image src={'/TV2.svg'} alt="Supplant TV App Image" style={{ width: '400px', height: 'auto' }} width={0} height={0}></Image>
                    </motion.div>
                </div>
                <motion.div transition={{ duration: 2, delay: 2 }} animate={{ opacity: isTvInView ? 1 : 0 }} initial={{ opacity: 0 }} className="flex flex-col gap-2 p-4 text-lg">
                    {children}
                </motion.div>
            </motion.div>

        </motion.div>
    );
};

export default SparkoTV;