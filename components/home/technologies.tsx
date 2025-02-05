"use client"

import { Badge } from "@/components/ui/badge";
import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogTitle,
    MorphingDialogDescription,
    MorphingDialogContainer,
    MorphingDialogClose,
} from "@/components/ui/morphing-dialog";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

// Dynamically import IconCloud with no SSR
const IconCloud = dynamic(
    () => import('@/components/ui/interactive-icon-cloud').then(mod => mod.IconCloud),
    { ssr: false }
);

interface Technology {
    slug: string;
    name: string;
    experience: string;
    projects: string[];
    description: string;
}

const technologies: Technology[] = [
    {
        slug: "typescript",
        name: "TypeScript",
        experience: "3+ years",
        projects: ["AI Image Generator", "NLP Chatbot", "Portfolio Website"],
        description: "Advanced TypeScript development including generics, utility types, and complex type inference systems.",
    },
    {
        slug: "python",
        name: "Python",
        experience: "5+ years",
        projects: ["Computer Vision App", "ML Model Training", "Data Analysis Tools"],
        description: "Expert-level Python programming with focus on ML/AI applications, data processing, and automation.",
    },
    {
        slug: "tensorflow",
        name: "TensorFlow",
        experience: "3+ years",
        projects: ["Image Recognition System", "Neural Network Training", "Real-time Object Detection"],
        description: "Deep expertise in building and training neural networks, custom model architectures, and deployment.",
    },
    {
        slug: "pytorch",
        name: "PyTorch",
        experience: "2+ years",
        projects: ["GANs for Image Generation", "NLP Models", "Research Projects"],
        description: "Extensive experience with PyTorch for deep learning research and production deployments.",
    },
    {
        slug: "react",
        name: "React",
        experience: "4+ years",
        projects: ["Portfolio Website", "Dashboard Applications", "Interactive UI Components"],
        description: "Advanced React development including hooks, context, and performance optimization.",
    },
    {
        slug: "docker",
        name: "Docker",
        experience: "3+ years",
        projects: ["ML Model Containerization", "Microservices Architecture", "CI/CD Pipelines"],
        description: "Containerization of AI applications and development environments for seamless deployment.",
    },
    {
        slug: "kubernetes",
        name: "Kubernetes",
        experience: "2+ years",
        projects: ["ML Model Orchestration", "Scalable AI Services", "Cloud Infrastructure"],
        description: "Orchestration of containerized AI applications in production environments.",
    },
    {
        slug: "opencv",
        name: "OpenCV",
        experience: "3+ years",
        projects: ["Real-time Object Detection", "Image Processing Pipeline", "Video Analytics"],
        description: "Computer vision library expertise for image processing and real-time video analysis.",
    },
    {
        slug: "scikitlearn",
        name: "Scikit-learn",
        experience: "4+ years",
        projects: ["ML Model Development", "Feature Engineering", "Data Preprocessing"],
        description: "Machine learning library for classical ML algorithms and data preprocessing.",
    },
    {
        slug: "pandas",
        name: "Pandas",
        experience: "4+ years",
        projects: ["Data Analysis", "ETL Pipelines", "Feature Engineering"],
        description: "Data manipulation and analysis using Python's powerful DataFrame library.",
    },
    {
        slug: "numpy",
        name: "NumPy",
        experience: "4+ years",
        projects: ["Scientific Computing", "ML Model Development", "Data Processing"],
        description: "Numerical computing library for efficient array operations and mathematical computations.",
    },
    {
        slug: "amazonwebservices",
        name: "AWS",
        experience: "3+ years",
        projects: ["Cloud ML Deployment", "Serverless Applications", "Data Processing"],
        description: "Cloud infrastructure for deploying and scaling AI applications.",
    },
    {
        slug: "git",
        name: "Git",
        experience: "5+ years",
        projects: ["Version Control", "Team Collaboration", "Code Management"],
        description: "Version control system for managing code and collaborating with teams.",
    },
    {
        slug: "linux",
        name: "Linux",
        experience: "5+ years",
        projects: ["Server Administration", "Development Environment", "ML Infrastructure"],
        description: "Linux system administration and development environment setup.",
    },
    {
        slug: "vscode",
        name: "VS Code",
        experience: "4+ years",
        projects: ["Code Development", "Debugging", "Extensions Development"],
        description: "Primary IDE for development with custom extensions and configurations.",
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
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

const TechnologyDialog = ({ tech, children }: { tech: Technology, children: React.ReactNode }) => (
    <MorphingDialog
        transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
        }}
    >
        <MorphingDialogTrigger className="cursor-pointer">
            {children}
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
            <MorphingDialogContent
                style={{ borderRadius: "24px" }}
                className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-primary/10 bg-background/80 backdrop-blur-md p-6 shadow-lg sm:w-[500px]"
            >
                <MorphingDialogTitle className="text-2xl font-bold mb-4">
                    <span className="text-gradient">{tech.name}</span>
                </MorphingDialogTitle>
                <MorphingDialogDescription
                    className="space-y-6"
                    disableLayoutAnimation
                    variants={{
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: 20 },
                    }}
                >
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-lg">Experience:</span>
                        <span className="text-primary text-lg">{tech.experience}</span>
                    </div>
                    <div className="space-y-3">
                        <span className="font-semibold text-lg">Key Projects:</span>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            {tech.projects.map((project, index) => (
                                <li key={index} className="text-base">{project}</li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed">
                        {tech.description}
                    </p>
                </MorphingDialogDescription>
                <MorphingDialogClose className="text-muted-foreground hover:text-primary transition-colors" />
            </MorphingDialogContent>
        </MorphingDialogContainer>
    </MorphingDialog>
);

const Technologies = () => {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(
                            circle at top center,
                            hsla(var(--primary)/0.1) 0%,
                            hsla(var(--background)) 50%
                        ),
                        radial-gradient(
                            circle at bottom center,
                            hsla(var(--secondary)/0.1) 0%,
                            hsla(var(--background)) 50%
                        )
                    `
                }}
            />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

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
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
                        <span className="text-gradient">Technologies & Tools</span>
                        {/* Decorative underline */}
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 blur-sm" />
                        <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-primary via-secondary to-primary" />
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mt-8">
                        Leveraging cutting-edge technologies to build innovative AI solutions and robust applications.
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="relative mx-auto max-w-5xl"
                >
                    {/* Glass Card Container */}
                    <div className="relative rounded-2xl border border-primary/10 bg-background/40 backdrop-blur-sm shadow-2xl">
                        {/* Inner Glow */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Content Container */}
                        <div className="relative p-8 md:p-12">
                            {/* Cloud Container */}
                            <div className="w-full aspect-[16/10] min-h-[500px] md:min-h-[600px]">
                                <IconCloud iconSlugs={technologies.map(tech => tech.slug)}>
                                    {(renderedIcon: React.ReactNode, slug: string) => {
                                        const tech = technologies.find(t => t.slug === slug);
                                        if (!tech) return renderedIcon;
                                        return (
                                            <TechnologyDialog key={slug} tech={tech}>
                                                {renderedIcon}
                                            </TechnologyDialog>
                                        );
                                    }}
                                </IconCloud>
                            </div>
                        </div>

                        {/* Decorative Corner Elements */}
                        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl" />
                        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl" />
                        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/20 rounded-bl-2xl" />
                        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/20 rounded-br-2xl" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Technologies;
