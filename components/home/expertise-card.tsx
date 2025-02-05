"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface StatItem {
    label: string;
    value: string;
}

interface ExpertiseCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    skills: string[];
    stats: StatItem[];
}

const ExpertiseCard = ({ title, description, icon: Icon, skills, stats }: ExpertiseCardProps) => {
    return (
        <Card className="group relative overflow-hidden border-primary/10 bg-background/20 backdrop-blur-sm transition-all duration-500 hover:border-primary/50">
            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
            </div>

            <CardHeader className="relative flex flex-row items-center gap-4">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative p-3 rounded-lg bg-primary/5 border border-primary/20 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors duration-500"
                >
                    <Icon className="h-8 w-8 text-primary" />
                </motion.div>
                <CardTitle className="text-xl">
                    <span className="text-gradient">{title}</span>
                </CardTitle>
            </CardHeader>

            <CardContent className="relative space-y-6">
                <p className="text-muted-foreground">{description}</p>

                <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative overflow-hidden text-center p-3 rounded-lg border border-primary/10 bg-primary/5 group-hover:border-primary/20 group-hover:bg-primary/10 transition-colors duration-500"
                        >
                            <div className="text-primary font-bold text-xl">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <Badge
                                variant="secondary"
                                className="bg-primary/5 text-primary border border-primary/20 hover:border-primary/50 transition-colors duration-300"
                            >
                                {skill}
                            </Badge>
                        </motion.div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default ExpertiseCard;