"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlowingStarsBackgroundCard = ({
    className,
    children,
    style,
}: {
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}) => {
    const [mouseEnter, setMouseEnter] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={style}
            onMouseEnter={() => {
                setMouseEnter(true);
            }}
            onMouseLeave={() => {
                setMouseEnter(false);
            }}
            className={cn(
                "relative overflow-hidden bg-background/50 backdrop-blur-md p-6 rounded-2xl border border-primary/10 transition-all duration-700",
                "hover:shadow-[0_0_30px_-5px_var(--primary-50)] hover:border-primary/30",
                "group/card",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/0 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
                <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700">
                    <Illustration mouseEnter={mouseEnter} />
                </div>
                <div className="relative z-20">{children}</div>
            </div>
        </motion.div>
    );
};

export const GlowingStarsDescription = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <p className={cn("text-base text-white max-w-[16rem]", className)}>
            {children}
        </p>
    );
};

export const GlowingStarsTitle = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <h2 className={cn("font-bold text-2xl text-[#eaeaea]", className)}>
            {children}
        </h2>
    );
};

export const Illustration = ({ mouseEnter }: { mouseEnter: boolean }) => {
    const stars = 108;
    const columns = 18;
    const [glowingStars, setGlowingStars] = useState<number[]>([]);
    const highlightedStars = useRef<number[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            highlightedStars.current = Array.from({ length: 5 }, () =>
                Math.floor(Math.random() * stars)
            );
            setGlowingStars([...highlightedStars.current]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="h-full w-full absolute inset-0"
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap: `1px`,
            }}
        >
            {[...Array(stars)].map((_, starIdx) => {
                const isGlowing = glowingStars.includes(starIdx);
                const delay = (starIdx % 10) * 0.1;
                const staticDelay = starIdx * 0.01;
                return (
                    <div
                        key={`matrix-col-${starIdx}}`}
                        className="relative flex items-center justify-center"
                    >
                        <Star
                            isGlowing={mouseEnter ? true : isGlowing}
                            delay={mouseEnter ? staticDelay : delay}
                        />
                        {mouseEnter && <Glow delay={staticDelay} />}
                        <AnimatePresence mode="wait">
                            {isGlowing && <Glow delay={delay} />}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
    return (
        <motion.div
            key={delay}
            initial={{ scale: 1 }}
            animate={{
                scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
                background: isGlowing ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                delay: delay,
            }}
            className={cn("h-[1px] w-[1px] rounded-full relative z-20")}
        />
    );
};

const Glow = ({ delay }: { delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                delay: delay,
            }}
            exit={{ opacity: 0 }}
            className="absolute left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-primary/50 blur-[2px] shadow-[0_0_10px_2px_var(--primary)]"
        />
    );
};