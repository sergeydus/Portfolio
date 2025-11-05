"use client"
import React, { useRef } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"

const Welcome = () => {
    const carouselRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: carouselRef,
    })
    const fixedScroll = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1])
    const visibility = useTransform(fixedScroll, [0, 1], ['hidden', 'visible'])

    // useMotionValueEvent(fixedScroll, "change", (latest) => console.log(latest))
    // useMotionValueEvent(visibility, "change", (latest) => console.log('visibility',latest))
    return (
        <div className="flex bg-red flex-col min-h-screen w-full items-center justify-center mb-4 ">
            <div className='text-3xl flex-1 flex flex-col items-center justify-center'>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}
                    viewport={{ once: true }} className='text-4xl font-bold mb-4 text-center'>
                    Greetings, I&apos;m Sergey Dushevski
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}
                    viewport={{ once: true }} className='text-4xl font-bold mb-4 text-center'>
                    I'm a Full-Stack Developer
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}
                    viewport={{ once: true }} className='text-4xl font-bold mb-4 text-center'>
                    I craft seamless web experiences with React, Node.js, and more.
                </motion.div>
            </div>
            <motion.div ref={carouselRef} animate={{ y: [0, -10] }} transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.3,
            }}>
                <motion.a style={{ opacity: fixedScroll, visibility: visibility }} href='#about' className='flex items-center justify-center rounded-[50%] h-16 w-16 bg-black dark:bg-white text-white dark:text-black text-4xl'>
                    &darr;
                </motion.a>
            </motion.div>
        </div>

    )
}

export default Welcome