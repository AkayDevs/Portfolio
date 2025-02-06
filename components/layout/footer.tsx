"use client"

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
    {
        icon: Github,
        href: "https://github.com",
        label: "GitHub",
    },
    {
        icon: Linkedin,
        href: "https://linkedin.com",
        label: "LinkedIn",
    },
    {
        icon: Mail,
        href: "mailto:your.email@example.com",
        label: "Email",
    },
];

const Footer = () => {
    return (
        <footer className="relative border-t border-primary/10">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background: `
                        linear-gradient(to top,
                            hsla(var(--background)) 0%,
                            hsla(var(--primary)/0.05) 30%,
                            hsla(var(--background)) 70%
                        )
                    `
                }}
            />

            {/* Content */}
            <div className="container max-w-7xl mx-auto px-4 relative z-10">
                <div className="py-12 md:py-16 grid gap-8">
                    {/* Logo & Description */}
                    <div className="text-center relative">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl font-bold mb-4"
                        >
                            <span className="text-gradient">Akay</span>{" "}
                            <span className="text-foreground">Devs</span>
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-muted-foreground max-w-md mx-auto"
                        >
                            Building innovative AI solutions and creating impactful digital experiences.
                        </motion.p>
                    </div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex justify-center gap-6"
                    >
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-3 rounded-full hover:bg-primary/5 transition-colors"
                                aria-label={label}
                            >
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/10 blur-lg" />

                                {/* Icon */}
                                <Icon className="h-6 w-6 relative z-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                            </a>
                        ))}
                    </motion.div>

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-center"
                    >
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Akay Devs. All rights reserved.
                        </p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;