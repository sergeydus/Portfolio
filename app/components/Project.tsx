"use client"
import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion, useInView } from "motion/react"


const Project: React.FC = () => {
    const tvRef = React.useRef(null);
    const isTvInView = useInView(tvRef);
    useEffect(() => {
        console.log('isTvInView', isTvInView);
    }, [isTvInView]);
    return (
        <motion.div className='flex flex-col gap-4'>
            <motion.div className="text-4xl font-bold" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} >Projects I've worked on:</motion.div>
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 1, duration: 2 }} viewport={{ once: true }} className="flex bg-background/50 dark:bg-white/5 rounded-lg w-full  overflow-hidden">
                <Image src={'/supplant_app.webp'} alt="Supplant app image" width={230} height={498}></Image>
                <div className="flex flex-col gap-2 p-4 text-lg text-white">
                    <div className="underline font-bold text-[#3dac77]">Supplant</div>
                    <p>
                        The SupPlant app and website work together to provide farmers with real-time insights and personalized irrigation recommendations based on sensor data and AI.
                    </p>
                    <p>
                        The app offers an intuitive dashboard where users can monitor plant stress, soil moisture, and weather conditions, while receiving alerts and tailored guidance to optimize water usage and crop health.
                    </p>
                    <p>
                        The website complements this by offering access to historical analytics, educational resources, and expert agronomist support, helping users manage their farm profiles and integrate SupPlant’s precision agriculture tools into their daily operations.
                    </p>
                    <p>
                        Together, they form a comprehensive digital platform that empowers farmers to make smarter, data-driven decisions.
                    </p>
                </div>
            </motion.div>
            <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 1, duration: 2 }} viewport={{ once: true }} className="flex bg-background/50 dark:bg-white/5 pt-8 px-8 rounded-lg w-full overflow-hidden">
                <div className="flex flex-col gap-2 p-4 text-lg text-white">
                    <div className="flex underline font-bold text-[#6c5a90] ">Mekome</div>
                    <p>
                        The Mekome app is a community-focused communication platform designed to streamline local interactions between municipalities and residents.
                    </p>
                    It offers a unified messaging interface where users can receive announcements, participate in digital voting, report issues like broken infrastructure, and access detailed financial statements related to their community.
                    <p>
                        The app also includes a searchable contact book, event calendars, media galleries, and a responsive portal for accessing community services and content.
                    </p>
                    <p>
                        With its intuitive design and modular features, Mekome empowers residents to stay informed, engaged, and connected with their local environment.
                    </p>
                </div>
                <Image className="rounded-t-3xl" src={'/mekome_1.png'} alt="Supplant app image" width={200} height={429}></Image>

            </motion.div>
            <motion.div transition={{ duration: 3, delay: 2 }} animate={{ background: isTvInView ? '#0d0d0d' : '#0000000' }} className="flex rounded-lg w-full overflow-hidden">
                <motion.div transition={{ duration: 3, delay: 2 }} animate={{ color: isTvInView ? '#ffffff' : '#ffffff0' }} className="flex flex-col gap-2 p-4 text-lg">
                    <motion.div transition={{ duration: 3, delay: 2 }} animate={{ opacity: isTvInView ? 1 : 0 }} initial={{ opacity: 0 }} className="flex font-bold text-4xl text-[#a07db1] self-center underline">
                        Sparko TV – A Virtual Retirement App
                    </motion.div>
                    {/* <Image className="rounded-3xl self-center" src={'/sparko.jpeg'} alt="Supplant TV Image" width={480} height={270}></Image> */}
                    {/* <Image src={'/TV.png'} alt="Supplant TV Image" width={480} height={270}></Image> */}
                    <div style={{ height: 270, width: 480, position: 'relative' }} className='self-center'>
                        {/* <div className="bg-[url('/TV.png')] bg-cover absolute top-0 left-0 h-full w-full"></div> */}
                        {/* <motion.div className='absolute z-10 h-full w-full'>
                            <Image src={'/TV.png'} sizes="100vw" alt="Supplant TV Image" width={0} height={0} style={{ width: 'auto', height: '100%' }}></Image>
                        </motion.div> */}
                        <div ref={tvRef} className='absolute z-20 top-0 left-0 h-full w-full'>
                            <Image src={'/TV1.svg'} alt="Supplant TV App Image" style={{ width: '400px', height: 'auto' }} width={0} height={0}></Image>
                        </div>
                        <motion.div className='absolute z-30 top-0 left-0 h-full w-full' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }} viewport={{ once: true }}>
                            <Image src={'/TV2.svg'} alt="Supplant TV App Image" style={{ width: '400px', height: 'auto' }} width={0} height={0}></Image>
                        </motion.div>

                    </div>
                    <motion.div transition={{ duration: 4, delay: 2 }} animate={{ opacity: isTvInView ? 1 : 0 }} initial={{ opacity: 0 }} className="flex flex-col gap-2 p-4 text-lg">
                        <p>
                            Sparko is a virtual retirement community app designed to help older adults stay socially connected and engaged from the comfort of their homes.
                        </p>
                        <p>
                            By using a simple set-top box connected to their existing television, users gain access to an interactive platform offering live exercise classes,
                            social events, lifelong learning opportunities, video calls, and messaging services.
                        </p>
                        <p>
                            Sparko’s intuitive interface makes it easy for seniors to
                            connect with family, friends, and local support services like Age UK Medway, helping reduce isolation and promote well-being.
                        </p>
                    </motion.div>
                </motion.div>

            </motion.div>
        </motion.div>

    );
};

export default Project;