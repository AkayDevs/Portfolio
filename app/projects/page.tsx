"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, Project, testimonials } from "@/constants/dummy-data";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { Github, ExternalLink, ArrowRight, Code, Brain, Eye, Sparkles } from "lucide-react";
import { Particles } from "@/components/home/particle-background";
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const categoryIcons: { [key: string]: any } = {
    "AI/ML": Brain,
    "Computer Vision": Eye,
    "Web Development": Code
};

const clientTestimonials = [
    {
        text: "Working with this developer was an absolute pleasure. Their attention to detail and technical expertise brought our vision to life perfectly.",
        author: {
            name: "Sarah Johnson",
            role: "Product Manager",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
        },
        href: "https://twitter.com/sarahjohnson"
    },
    {
        text: "The AI solutions implemented have transformed our workflow. Highly recommend for any machine learning projects.",
        author: {
            name: "Michael Chen",
            role: "Tech Lead",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
        },
        href: "https://twitter.com/michaelchen"
    },
    {
        text: "Exceptional problem-solving skills and a great communicator. Delivered our project ahead of schedule.",
        author: {
            name: "Emily Rodriguez",
            role: "CTO",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
        },
        href: "https://twitter.com/emilyrodriguez"
    },
    {
        text: "The computer vision system developed has significantly improved our quality control process. Outstanding work!",
        author: {
            name: "David Kim",
            role: "Operations Director",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
        },
        href: "https://twitter.com/davidkim"
    }
];

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const categories = ["All", ...new Set(projects.map(project => project.category))];
    const containerRef = useRef<HTMLDivElement>(null);
    const [particleCount, setParticleCount] = useState(50);
    const [particleEffect, setParticleEffect] = useState(0);
    const [connectParticles, setConnectParticles] = useState(true);
    const [particleSpeed, setParticleSpeed] = useState({ min: -0.2, max: 0.2 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    const cycleParticleEffect = () => {
        setParticleEffect((prev) => (prev + 1) % 4);

        // Effect 0: Default state - Gentle flow
        // Effect 1: Explosion effect - Fast particles
        // Effect 2: Vortex effect - Strong mouse attraction
        // Effect 3: Wave effect - Smooth, connected particles
        switch ((particleEffect + 1) % 4) {
            case 0: // Default - Gentle flow
                setParticleCount(50);
                setConnectParticles(true);
                setParticleSpeed({ min: -0.2, max: 0.2 });
                break;
            case 1: // Explosion - Energetic particles
                setParticleCount(100);
                setConnectParticles(false);
                setParticleSpeed({ min: -2, max: 2 }); // Much faster movement
                break;
            case 2: // Vortex - Strong attraction
                setParticleCount(75);
                setConnectParticles(true);
                setParticleSpeed({ min: -0.8, max: 0.8 }); // Faster for vortex effect
                break;
            case 3: // Wave - Smooth flow
                setParticleCount(150);
                setConnectParticles(true);
                setParticleSpeed({ min: -0.4, max: 0.4 }); // Moderate speed for wave effect
                break;
        }
    };

    return (
        <div ref={containerRef} className="relative min-h-screen">
            {/* Particle Background */}
            <Particles
                className="!fixed"
                quantity={particleCount}
                staticity={particleEffect === 2 ? 5 : particleEffect === 1 ? 80 : 30} // Lower value = stronger mouse attraction
                ease={particleEffect === 3 ? 10 : particleEffect === 1 ? 100 : 50} // Lower value = smoother movement
                particleSize={{
                    min: particleEffect === 1 ? 2 : 1,
                    max: particleEffect === 1 ? 5 : 3
                }}
                connectParticles={connectParticles}
                connectDistance={particleEffect === 2 ? 250 : particleEffect === 3 ? 200 : 150}
                velocityRange={{
                    x: particleSpeed,
                    y: particleSpeed
                }}
                refresh={true} // Force refresh on effect change
            />

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y, opacity }}
                    className="relative z-10 text-center px-4"
                >
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={cycleParticleEffect}
                        className="group mb-8 p-4 rounded-full bg-background/50 border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                        aria-label="Change particle effect"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/20 blur-xl" />

                        {/* Icon with rotation based on effect */}
                        <motion.div
                            animate={{
                                rotate: particleEffect * 90,
                                scale: particleEffect === 1 ? [1, 1.2, 1] : 1
                            }}
                            transition={{
                                duration: 0.5,
                                scale: { repeat: Infinity, duration: 2 }
                            }}
                        >
                            <Sparkles className="w-6 h-6 text-primary relative z-10" />
                        </motion.div>
                    </motion.button>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        <span className="text-gradient">Innovative</span>{" "}
                        <span className="text-foreground">Projects</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
                    >
                        Exploring the frontiers of technology through creative solutions and cutting-edge implementations.
                    </motion.p>

                    {/* Category Filter Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {categories.map((category) => {
                            const Icon = categoryIcons[category];
                            return (
                                <Button
                                    key={category}
                                    variant={selectedCategory === category ? "default" : "outline"}
                                    onClick={() => setSelectedCategory(category)}
                                    className={cn(
                                        "rounded-full px-6 py-6 transition-all duration-300 hover:scale-105 relative overflow-hidden group",
                                        selectedCategory === category
                                            ? "bg-primary/20 text-primary hover:bg-primary/30"
                                            : "hover:bg-primary/10"
                                    )}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative flex items-center gap-2">
                                        {Icon && <Icon className="w-5 h-5" />}
                                        <span>{category}</span>
                                    </div>
                                </Button>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </section>

            {/* Projects Grid Section */}
            <section className="relative z-10 py-20 px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="container mx-auto max-w-7xl space-y-24"
                >
                    {/* Featured Project */}
                    {filteredProjects.filter(p => p.isWide).map((project) => (
                        <motion.div
                            key={project.title}
                            variants={itemVariants}
                            className="group relative"
                        >
                            <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
                                </div>

                                {/* Featured Badge */}
                                <div className="absolute top-4 left-4 z-20">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-full animate-pulse-slow" />
                                        <Badge
                                            className="px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20 text-primary relative"
                                        >
                                            Featured Project
                                        </Badge>
                                    </div>
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-4 right-4 z-20">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-full animate-pulse-slow" />
                                        <Badge
                                            className="px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20 text-primary relative"
                                        >
                                            {project.category}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-8">
                                    {/* Project Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 z-10" />
                                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                        <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-1000">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="relative p-8 flex flex-col justify-center">
                                        <div className="space-y-6">
                                            <h3 className="text-3xl md:text-4xl font-bold transform-gpu">
                                                <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient inline-block">
                                                    {project.title}
                                                </span>
                                            </h3>

                                            <p className="text-muted-foreground text-lg transform-gpu">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <Badge
                                                        key={tech}
                                                        variant="secondary"
                                                        className="bg-primary/5 text-primary border border-primary/20 px-3 py-1 transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:border-primary/30"
                                                        style={{
                                                            transitionDelay: `${techIndex * 50}ms`
                                                        }}
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>

                                            <div className="flex gap-6">
                                                {project.github && (
                                                    <Link
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group/link flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                                                    >
                                                        <div className="relative p-2 rounded-full bg-primary/5 transition-all duration-300 group-hover/link:bg-primary/10 group-hover/link:scale-110">
                                                            <Github className="h-5 w-5" />
                                                        </div>
                                                        <span className="relative">
                                                            Source Code
                                                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover/link:w-full" />
                                                        </span>
                                                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                                                    </Link>
                                                )}
                                                {project.demo && (
                                                    <Link
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group/link flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                                                    >
                                                        <div className="relative p-2 rounded-full bg-primary/5 transition-all duration-300 group-hover/link:bg-primary/10 group-hover/link:scale-110">
                                                            <ExternalLink className="h-5 w-5" />
                                                        </div>
                                                        <span className="relative">
                                                            Live Demo
                                                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover/link:w-full" />
                                                        </span>
                                                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Open Source Projects */}
                    {filteredProjects.filter(p => !p.isWide && p.github).length > 0 && (
                        <div className="space-y-8">
                            <motion.h2
                                variants={itemVariants}
                                className="text-3xl font-bold"
                            >
                                <span className="text-gradient">Open Source Projects</span>
                            </motion.h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProjects
                                    .filter(p => !p.isWide && p.github)
                                    .map((project) => (
                                        <ProjectCard key={project.title} project={project} />
                                    ))}
                            </div>
                        </div>
                    )}

                    {/* Other Projects */}
                    {filteredProjects.filter(p => !p.isWide && !p.github).length > 0 && (
                        <div className="space-y-8">
                            <motion.h2
                                variants={itemVariants}
                                className="text-3xl font-bold"
                            >
                                <span className="text-gradient">Client Projects</span>
                            </motion.h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProjects
                                    .filter(p => !p.isWide && !p.github)
                                    .map((project) => (
                                        <ProjectCard key={project.title} project={project} />
                                    ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            </section>

            {/* Project Statistics Section */}
            <section className="relative z-10 py-32">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="container relative mx-auto max-w-7xl px-4 text-center"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl font-bold mb-16"
                    >
                        <span className="text-gradient">Project Metrics</span>
                    </motion.h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Projects Completed", value: "25+" },
                            { label: "Open Source", value: "10+" },
                            { label: "Technologies", value: "15+" },
                            { label: "Happy Clients", value: "20+" }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                variants={itemVariants}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl group-hover:bg-primary/10 transition-colors duration-500" />
                                <div className="relative space-y-2 bg-background/50 backdrop-blur-sm rounded-2xl border border-primary/10 p-6 group-hover:border-primary/20 transition-colors duration-500">
                                    <div className="text-4xl md:text-5xl font-bold text-gradient">
                                        {stat.value}
                                    </div>
                                    <div className="text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <TestimonialsSection
                title="What People Are Saying"
                description="Hear from some of the amazing people I've had the pleasure of working with."
                testimonials={clientTestimonials}
                className="py-24"
            />

            {/* CTA Section */}
            <section className="relative z-10 py-32">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="container relative mx-auto max-w-4xl px-4 text-center"
                >
                    <motion.div
                        variants={itemVariants}
                        className="relative overflow-hidden rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-sm p-12 group hover:border-primary/30 transition-colors duration-500"
                    >
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />
                        </div>

                        <div className="relative space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="text-gradient">Have a Project in Mind?</span>
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Let's collaborate and build something amazing together. I'm always open to discussing new projects and opportunities.
                            </p>
                            <motion.div
                                variants={itemVariants}
                                className="pt-6"
                            >
                                <Link
                                    href="/contact"
                                    className="group/link inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                                >
                                    <span>Get in Touch</span>
                                    <ArrowRight className="h-5 w-5 transform transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}

// ProjectCard Component for consistent card styling
const ProjectCard = ({ project }: { project: Project }) => (
    <motion.div
        variants={itemVariants}
        className="group relative h-full"
    >
        <div className="relative h-full overflow-hidden rounded-2xl border border-primary/10 bg-background/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 group-hover:-translate-y-2">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 right-4 z-20">
                <div className="relative">
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-full animate-pulse-slow" />
                    <Badge
                        className="px-4 py-2 bg-background/80 backdrop-blur-sm border-primary/20 text-primary relative"
                    >
                        {project.category}
                    </Badge>
                </div>
            </div>

            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 z-10" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-1000">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Project Content */}
            <div className="relative p-6">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold transform-gpu">
                        <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient inline-block">
                            {project.title}
                        </span>
                    </h3>

                    <p className="text-muted-foreground text-base transform-gpu line-clamp-3">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                            <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-primary/5 text-primary border border-primary/20 px-2 py-0.5 text-sm transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:border-primary/30"
                                style={{
                                    transitionDelay: `${techIndex * 50}ms`
                                }}
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        {project.github && (
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                            >
                                <div className="relative p-2 rounded-full bg-primary/5 transition-all duration-300 group-hover/link:bg-primary/10 group-hover/link:scale-110">
                                    <Github className="h-4 w-4" />
                                </div>
                                <span className="relative">
                                    Source
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover/link:w-full" />
                                </span>
                                <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                            </Link>
                        )}
                        {project.demo && (
                            <Link
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                            >
                                <div className="relative p-2 rounded-full bg-primary/5 transition-all duration-300 group-hover/link:bg-primary/10 group-hover/link:scale-110">
                                    <ExternalLink className="h-4 w-4" />
                                </div>
                                <span className="relative">
                                    Demo
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover/link:w-full" />
                                </span>
                                <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);