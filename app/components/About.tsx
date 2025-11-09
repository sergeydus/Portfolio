import React from 'react'
import Person from './svgs/Person'
import * as motion from "motion/react-client"
import { cn } from '../utils'

interface BrProps {
    className?: string
}

const Br: React.FC = ({ className = "" }: BrProps) => (
    <span className={cn`my-2 block ${className}`} />
)

const About: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center w-full">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-row px-8 text-lg bg-background/70 dark:bg-white/5 rounded-lg py-8"
            >
                <div className="hidden lg:flex items-start justify-center pe-8">
                    <Person height={128} width={128} className="text-primary dark:text-white fill-current" />
                </div>
                <div>
                    <div className="text-4xl mb-8 text-primary underline">Sergey Dushevski</div>
                    <section className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                        <p className="text-lg leading-relaxed text-black-300 dark:text-gray-300">
                            I&apos;m <span className="font-medium">Sergey Dushevski</span>, a full-stack developer with a passion for building intuitive, high-performance applications that make a real impact.
                            <Br />
                            With over five years of experience across mobile and web platforms, I&apos;ve led development for ad-tech, agri-tech, and civic engagement tools—always with a focus on clean code, scalable architecture, and user-centric design.
                            <Br />
                            I specialize in modern technologies like <span className="font-medium">React</span>, <span className="font-medium">Vue</span>, and <span className="font-medium">NestJS</span>, and thrive in agile environments where collaboration and mentorship are key.
                            <Br />
                            Whether it&apos;s architecting backend systems or crafting seamless user interfaces, I bring dedication, curiosity, and a drive for excellence to every project.
                        </p>
                    </section>
                    <section className="mb-16">
                        <h2 className="text-2xl font-semibold mb-4">Why Me?</h2>
                        <p className="text-lg leading-relaxed text-black-300 dark:text-gray-300">
                            As a full-stack developer with over five years of hands-on experience, I bring a rare blend of frontend finesse and backend muscle to every project.
                            <Br />
                            I&apos;ve built scalable, user-focused applications across industries—from ad-tech to agri-tech to civic platforms—using modern frameworks like <span className="font-medium">React</span>, <span className="font-medium">Vue</span>, and <span className="font-medium">NestJS</span>.
                            <Br />
                            My work consistently emphasizes clean architecture, performance, and maintainability.
                            <Br />
                            Beyond code, I thrive in agile environments, mentor junior developers, and contribute to team culture with a collaborative spirit.
                            <Br />
                            If you&apos;re looking for someone who not only delivers robust solutions but also elevates the team around them, I&apos;m your guy.
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    )
}

export default About