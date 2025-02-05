"use client";

import { Brain, Code, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-background-starts-card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

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
};

const Projects = () => {
    const projects = [
        {
            title: "AI Image Generator",
            description: "State-of-the-art image generation model using GANs and diffusion models. Capable of creating high-quality, photorealistic images from text descriptions.",
            icon: Brain,
            isWide: true,
        },
        {
            title: "NLP Chatbot",
            description: "Advanced conversational AI powered by transformer models, featuring context awareness and natural language understanding.",
            icon: Code,
        },
        {
            title: "Computer Vision App",
            description: "Real-time object detection and classification system using deep learning, optimized for edge devices.",
            icon: Eye,
        },
        {
            title: "Competitive Programming Platform",
            description: "A platform for algorithmic challenges and competitions, featuring real-time code execution and analysis.",
            icon: Code,
            isWide: true,
        },
    ];

    return (
        <section className="relative py-32">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
            linear-gradient(to bottom,
              hsl(var(--background)) 0%,
              hsla(var(--secondary)/0.1) 30%,
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
                        <span className="text-gradient bg-clip-text">Featured Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                        Exploring the frontiers of artificial intelligence through practical applications and innovative solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {projects.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <motion.div
                                key={project.title}
                                variants={itemVariants}
                                className={project.isWide ? "md:col-span-2" : ""}
                            >
                                <GlowingStarsBackgroundCard
                                    className="group backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors duration-500"
                                >
                                    <div className="flex flex-col h-full p-4">
                                        <div className="relative p-3 w-fit rounded-xl bg-primary/5 border border-primary/20 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors duration-500 mb-6">
                                            <Icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3">
                                            <span className="text-gradient bg-clip-text">{project.title}</span>
                                        </h3>
                                        <p className="text-muted-foreground line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>
                                </GlowingStarsBackgroundCard>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    variants={itemVariants}
                    className="flex justify-center mt-12"
                >
                    <InteractiveHoverButton
                        text="View All Projects"
                        className="border-primary/50 hover:border-primary"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;