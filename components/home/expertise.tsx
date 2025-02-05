"use client"

import { motion } from 'framer-motion'
import { expertiseData } from '@/constants/dummy-data'
import ExpertiseCard from './expertise-card'

export default function Expertise() {
    return (
        <section className="py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="container max-w-6xl mx-auto px-4"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient">Areas of Expertise</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                        Leveraging cutting-edge technologies and methodologies to solve complex problems
                        in artificial intelligence and software development.
                    </p>
                </motion.div>

                <div className="grid gap-8">
                    {expertiseData.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                        >
                            <ExpertiseCard {...item} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}