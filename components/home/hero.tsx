"use client"

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function Hero() {
    return (
        <LampContainer className="bg-transparent">
            <div className="container mx-auto px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                >
                    <span className="text-gradient">AI Engineer</span>{" "}
                    <span className="text-primary">|</span>{" "}
                    <span className="text-gradient">Tech Innovator</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
                >
                    Specializing in Generative AI, Computer Vision, and Natural Language Processing
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.7,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
                >
                    <InteractiveHoverButton
                        text="View Projects"
                        className="border-primary/50 hover:border-primary w-full sm:w-auto"
                    />
                </motion.div>
            </div>
        </LampContainer>
    );
}