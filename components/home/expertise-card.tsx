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
        <Card className="group relative h-full overflow-hidden border-primary/10 bg-background/20 backdrop-blur-sm transition-all duration-500">
            {/* Glow Effects */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent" />
            </div>
            <div className="absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent blur-xl" />
            </div>

            <CardHeader className="relative pb-4">
                <div className="flex items-center gap-4 mb-4">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative p-3 rounded-xl bg-primary/5 border border-primary/20 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors duration-500"
                    >
                        <Icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <CardTitle className="text-2xl">
                        <span className="text-gradient bg-gradient-to-r from-primary to-secondary">{title}</span>
                    </CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
            </CardHeader>

            <CardContent className="relative space-y-6">
                <div className="grid grid-cols-3 gap-3">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="relative overflow-hidden p-3 rounded-xl border border-primary/10 bg-primary/5 group-hover:border-primary/20 group-hover:bg-primary/10 transition-all duration-500"
                        >
                            <div className="text-primary font-bold text-2xl mb-1">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-primary/5 text-primary border border-primary/20 hover:border-primary/50 transition-colors duration-300 text-sm"
                        >
                            {skill}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default ExpertiseCard;