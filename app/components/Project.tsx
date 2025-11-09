import Image from 'next/image';
import React from 'react';
import * as motion from "motion/react-client"
import SparkoTV from './Projects/SparkoTV';
import Supplant_APP_Image from '../../public/supplant_app.webp';
import Mekome_1_Image from '../../public/mekome_1.png';

const Project: React.FC = () => {
    return (
        <motion.div className='flex flex-col gap-4 w-full'>
            <motion.div className="text-2xl lg:text-4xl font-bold" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                Projects I&apos;ve worked on:
            </motion.div>
            <motion.div
                initial={{ transform: "translateX(-100px)", opacity: 0 }}
                whileInView={{ transform: "translateX(0)", opacity: 1 }}
                transition={{ delay: 1, duration: 2 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-center justify-center lg:items-start bg-background dark:bg-white/5 rounded-lg w-full overflow-hidden"
            >
                <div className="w-[230px] h-[498px] aspect-249/115 relative">
                    <Image src={Supplant_APP_Image} alt="Supplant app image" fill priority></Image>
                </div>
                <div className="flex flex-col gap-2 p-4 text-lg text-black dark:text-white">
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
            <motion.div
                initial={{ transform: "translateX(100px)", opacity: 0 }}
                whileInView={{ transform: "translateX(0)", opacity: 1 }}
                transition={{ delay: 1, duration: 2 }}
                viewport={{ once: true }}
                className="flex flex-col-reverse items-center lg:items-start lg:flex-row bg-background dark:bg-white/5 rounded-lg w-full overflow-hidden">
                <div className="flex items-center lg:items-start flex-col gap-2 text-lg p-8 text-black dark:text-white">
                    <div className="flex underline font-bold text-[#6c5a90]">Mekome</div>
                    <p>
                        The Mekome app is a community-focused communication platform designed to streamline local interactions between municipalities and residents.
                    </p>
                    <p>
                        It offers a unified messaging interface where users can receive announcements, participate in digital voting, report issues like broken infrastructure, and access detailed financial statements related to their community.
                    </p>
                    <p>
                        The app also includes a searchable contact book, event calendars, media galleries, and a responsive portal for accessing community services and content.
                    </p>
                    <p>
                        With its intuitive design and modular features, Mekome empowers residents to stay informed, engaged, and connected with their local environment.
                    </p>
                </div>
                <Image
                    className="rounded-t-3xl mt-4 me-0 lg:mt-8 lg:me-8"
                    src={Mekome_1_Image}
                    alt="Supplant app image"
                    width={200}
                    height={429}
                    priority>
                </Image>
            </motion.div>
            <SparkoTV title="Sparko TV – A Virtual Retirement App">
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
            </SparkoTV>
        </motion.div>

    );
};

export default Project;