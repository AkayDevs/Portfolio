"use client"

import { motion } from 'framer-motion'
import { expertiseData } from '@/constants/dummy-data'
import ExpertiseCard from './expertise-card'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1]
        }
    }
}

export default function Expertise() {
    return (
        <section className="relative py-32">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
                        linear-gradient(to bottom,
                        hsl(var(--background)) 0%,
                        hsla(var(--primary)/0.05) 30%,
                        hsla(var(--background)) 70%
                    )`
                }}
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="container relative z-10 max-w-7xl mx-auto px-4"
            >
                <motion.div
                    variants={itemVariants}
                    className="relative z-20 text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
                        <span className="text-gradient bg-clip-text">Areas of Expertise</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                        Leveraging cutting-edge technologies and methodologies to solve complex problems
                        in artificial intelligence and software development.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {expertiseData.map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={itemVariants}
                            className="group"
                        >
                            <ExpertiseCard {...item} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}