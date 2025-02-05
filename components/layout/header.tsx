"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Technologies", href: "/#technologies" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-lg border-b border-border/50"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link
                        href="/"
                        className="text-2xl font-heading font-bold hover:cursor-pointer"
                    >
                        <span className="text-gradient">Akay</span>{" "}
                        <span className="text-foreground">Devs</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-all duration-300 hover:text-primary",
                                    pathname === item.href
                                        ? "text-gradient"
                                        : "text-foreground/90"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button
                            variant="outline"
                            className="border-primary/50 hover:border-primary text-primary hover:bg-primary/5 hover-glow"
                        >
                            Resume
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={false}
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    variants={{
                        open: { opacity: 1, height: "auto" },
                        closed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-t border-border/50"
                >
                    <div className="py-4 space-y-4 px-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "block transition-all duration-300 hover:text-primary py-2",
                                    pathname === item.href
                                        ? "text-gradient"
                                        : "text-foreground/90"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button
                            variant="outline"
                            className="w-full border-primary/50 hover:border-primary text-primary hover:bg-primary/5 hover-glow mt-4"
                        >
                            Resume
                        </Button>
                    </div>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;