"use client"

import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Experience = () => {
    const experienceData = [
        {
            title: "2023-Present",
            content: (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="min-h-screen flex items-center"
                >
                    <div className="space-y-8 w-full">
                        <div className="space-y-4">
                            <h4 className="text-3xl md:text-5xl font-bold mb-4">
                                <span className="text-gradient">Senior AI Engineer</span> at TechCorp
                            </h4>
                            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl">
                                Leading AI initiatives and developing cutting-edge solutions for enterprise clients.
                                Spearheading innovation in machine learning and artificial intelligence applications.
                            </p>
                            <div className="flex flex-wrap gap-3 mb-8">
                                {["Large Language Models", "Computer Vision", "MLOps"].map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <Badge
                                            variant="outline"
                                            className="border-primary/50 hover:border-primary text-primary bg-primary/5 text-base px-4 py-2"
                                        >
                                            {skill}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 mb-12">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-6"
                                >
                                    <h5 className="text-xl font-bold text-gradient">Key Achievements</h5>
                                    <ul className="list-disc list-inside text-base text-muted-foreground space-y-4">
                                        <li>Led development of enterprise-scale AI solutions, resulting in 35% improvement in customer satisfaction</li>
                                        <li>Managed and mentored a team of 5 AI engineers, achieving all project milestones ahead of schedule</li>
                                        <li>Optimized model architecture reducing inference time by 40% while maintaining accuracy</li>
                                        <li>Implemented automated MLOps pipeline decreasing deployment time by 60%</li>
                                    </ul>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-6"
                                >
                                    <h5 className="text-xl font-bold text-gradient">Technologies & Tools</h5>
                                    <ul className="list-disc list-inside text-base text-muted-foreground space-y-4">
                                        <li>PyTorch, TensorFlow, and Hugging Face for model development</li>
                                        <li>Docker and Kubernetes for containerization and orchestration</li>
                                        <li>MLflow and DVC for experiment tracking and versioning</li>
                                        <li>AWS SageMaker and Azure ML for cloud deployment</li>
                                    </ul>
                                </motion.div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-4 group"
                                >
                                    <div className="relative overflow-hidden rounded-xl border border-primary/10 bg-primary/5 aspect-video group-hover:border-primary/30 transition-colors duration-500">
                                        <img
                                            src="/placeholder.svg"
                                            alt="AI Model Architecture"
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <p className="text-sm text-muted-foreground text-center">Advanced AI Model Architecture</p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="space-y-4 group"
                                >
                                    <div className="relative overflow-hidden rounded-xl border border-primary/10 bg-primary/5 aspect-video group-hover:border-primary/30 transition-colors duration-500">
                                        <img
                                            src="/placeholder.svg"
                                            alt="Team Collaboration"
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <p className="text-sm text-muted-foreground text-center">Team Collaboration & Leadership</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ),
        },
        {
            title: "2021-2023",
            content: (
                <div className="min-h-screen flex items-center">
                    <div className="space-y-8 w-full">
                        <div className="space-y-4">
                            <h4 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-exo">AI Engineer at DataInnovate</h4>
                            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl">
                                Specialized in developing and deploying sophisticated computer vision and natural language processing solutions for diverse industry applications.
                            </p>
                            <div className="flex flex-wrap gap-3 mb-8">
                                <Badge variant="outline" className="border-neon-blue text-neon-blue text-base px-4 py-2">
                                    PyTorch
                                </Badge>
                                <Badge variant="outline" className="border-neon-blue text-neon-blue text-base px-4 py-2">
                                    TensorFlow
                                </Badge>
                                <Badge variant="outline" className="border-neon-blue text-neon-blue text-base px-4 py-2">
                                    NLP
                                </Badge>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 mb-12">
                                <div className="space-y-6">
                                    <h5 className="text-xl font-bold text-neon-blue">Major Projects</h5>
                                    <ul className="list-disc list-inside text-base text-muted-foreground space-y-4">
                                        <li>Developed real-time object detection system for manufacturing safety</li>
                                        <li>Created sentiment analysis engine processing 1M+ customer reviews</li>
                                        <li>Built automated document processing pipeline with 95% accuracy</li>
                                        <li>Implemented multi-language support for NLP models</li>
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <h5 className="text-xl font-bold text-neon-blue">Impact & Metrics</h5>
                                    <ul className="list-disc list-inside text-base text-muted-foreground space-y-4">
                                        <li>Improved model accuracy by 25% through advanced architecture</li>
                                        <li>Reduced processing time by 60% using optimized algorithms</li>
                                        <li>Saved 100+ manual hours per week through automation</li>
                                        <li>Increased customer satisfaction score by 40%</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Object Detection Demo"
                                        className="rounded-xl object-cover w-full aspect-video neon-border"
                                    />
                                    <p className="text-sm text-muted-foreground text-center">Real-time Object Detection System</p>
                                </div>
                                <div className="space-y-4">
                                    <img
                                        src="/placeholder.svg"
                                        alt="NLP Pipeline"
                                        className="rounded-xl object-cover w-full aspect-video neon-border"
                                    />
                                    <p className="text-sm text-muted-foreground text-center">Advanced NLP Pipeline Architecture</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2019-2021",
            content: (
                <div className="min-h-screen flex items-center">
                    <div className="space-y-8 w-full">
                        <div className="space-y-4">
                            <h4 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-exo">Junior AI Developer at AIStartup</h4>
                            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl">
                                Kickstarted my journey in AI development, focusing on foundational machine learning projects and competitive programming challenges.
                            </p>
                            <div className="flex flex-wrap gap-3 mb-8">
                                <Badge variant="outline" className="border-neon-blue text-neon-blue text-base px-4 py-2">
                                    Machine Learning
                                </Badge>
                                <Badge variant="outline" className="border-neon-blue text-neon-blue text-base px-4 py-2">
                                    Python
                                </Badge>
                                <Badge variant="outline" className="border-neon-blue text-neon-blue text-base px-4 py-2">
                                    Algorithms
                                </Badge>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 mb-12">
                                <div className="space-y-6">
                                    <h5 className="text-xl font-bold text-neon-blue">Learning & Growth</h5>
                                    <ul className="list-disc list-inside text-base text-muted-foreground space-y-4">
                                        <li>Developed predictive analytics models for business forecasting</li>
                                        <li>Participated and won in 3 company-wide hackathons</li>
                                        <li>Mentored junior developers in algorithmic problem-solving</li>
                                        <li>Contributed to open-source ML projects</li>
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <h5 className="text-xl font-bold text-neon-blue">Technical Skills</h5>
                                    <ul className="list-disc list-inside text-base text-muted-foreground space-y-4">
                                        <li>Mastered Python and key ML libraries (scikit-learn, pandas)</li>
                                        <li>Implemented various classical ML algorithms from scratch</li>
                                        <li>Developed efficient data processing pipelines</li>
                                        <li>Created visualization tools for data analysis</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <img
                                        src="/placeholder.svg"
                                        alt="ML Model Training"
                                        className="rounded-xl object-cover w-full aspect-video neon-border"
                                    />
                                    <p className="text-sm text-muted-foreground text-center">Machine Learning Model Training Process</p>
                                </div>
                                <div className="space-y-4">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Hackathon Winner"
                                        className="rounded-xl object-cover w-full aspect-video neon-border"
                                    />
                                    <p className="text-sm text-muted-foreground text-center">Hackathon Victory Celebration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return <Timeline data={experienceData} />;
};

export default Experience;