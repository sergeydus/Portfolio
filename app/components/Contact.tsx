"use client"
import React from 'react';
import { motion } from "motion/react"
import RedirectIcons2 from './server/RedirectIcons2';
import Facebook from './svgs/Facebook';
import Github from './svgs/Github';
import Linkedin from './svgs/Linkedin';
import Mail from './svgs/Mail';
const Contact = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 0 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 1 }} viewport={{ once: true }} className="flex flex-col items-center justify-center w-full">
            <div className="inline-block mb-4 text-2xl relative">
                <div>Contact me</div>
                <div className="h-1 w-full bg-primary opacity-50 absolute bottom-1" />
            </div>

            <div className="flex flex-row gap-8 items-center justify-center w-full">
                {/* <RedirectIcons src="/github.svg" alt="GitHub Icon" title="GitHub" url="https://github.com/sergeydus"></RedirectIcons>
            <RedirectIcons src="/linkedin.svg" alt="LinkedIn Icon" title="GitHub" url="https://github.com/sergeydus"></RedirectIcons>
            <RedirectIcons src="/facebook.svg" alt="FaceBook Icon" title="FaceBook" url="https://github.com/sergeydus"></RedirectIcons> */}
                <RedirectIcons2 title="Github" url="https://github.com/sergeydus">
                    <Github height={32} width={32} className="text-primary fill-current" />
                </RedirectIcons2>
                <RedirectIcons2 title="Linkedin" url="https://www.linkedin.com/in/sergey-dushevski-804284179/">
                    <Linkedin height={32} width={32} className="text-primary fill-current" />
                </RedirectIcons2>
                <RedirectIcons2 title="Facebook" url="https://www.facebook.com/sergey.dushevski/">
                    <Facebook height={32} width={32} className="text-primary fill-current" />
                </RedirectIcons2>
                <RedirectIcons2 title="Mail" url="mailto:sergeydushevski@gmail.com">
                    <Mail height={32} width={32} className="text-black fill-current" />
                </RedirectIcons2>
                
            </div>
        </motion.div>
    );
};

export default Contact;