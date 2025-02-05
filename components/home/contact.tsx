"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

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

const ContactSection = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
        toast.success("Message sent successfully! I'll get back to you soon.");
        form.reset();
    };

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
                        linear-gradient(to bottom,
                            hsl(var(--background)) 0%,
                            hsla(var(--primary)/0.05) 30%,
                            hsla(var(--secondary)/0.05) 50%,
                            hsla(var(--background)) 70%
                        )
                    `
                }}
            />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-primary/10 rounded-full blur-3xl opacity-20" />
                {/* Bottom glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-secondary/10 rounded-full blur-3xl opacity-20" />
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
                        <span className="text-gradient">Let's Connect</span>
                        {/* Decorative underline */}
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 blur-sm" />
                        <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-primary via-secondary to-primary" />
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mt-8">
                        Have an innovative project in mind? Let's collaborate and bring your ideas to life.
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="relative mx-auto max-w-2xl"
                >
                    {/* Glass Card Container */}
                    <div className="relative rounded-2xl border border-primary/10 bg-background/40 backdrop-blur-sm shadow-2xl">
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

                        {/* Content Container */}
                        <div className="relative p-8 md:p-12">
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-8"
                                >
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-foreground/90 font-medium">Name</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="John Doe"
                                                            {...field}
                                                            className="bg-background/50 border-primary/10 hover:border-primary/20 focus:border-primary/30 transition-colors"
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-red-400" />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-foreground/90 font-medium">Email</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="email"
                                                            placeholder="john@example.com"
                                                            {...field}
                                                            className="bg-background/50 border-primary/10 hover:border-primary/20 focus:border-primary/30 transition-colors"
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-red-400" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="subject"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-foreground/90 font-medium">Subject</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="What would you like to discuss?"
                                                        {...field}
                                                        className="bg-background/50 border-primary/10 hover:border-primary/20 focus:border-primary/30 transition-colors"
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-foreground/90 font-medium">Message</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Tell me about your project or idea..."
                                                        className="min-h-[150px] bg-background/50 border-primary/10 hover:border-primary/20 focus:border-primary/30 transition-colors resize-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="flex justify-center pt-6">
                                        <InteractiveHoverButton
                                            type="submit"
                                            text="Send Message"
                                            className="w-full sm:w-auto border-primary/30 hover:border-primary"
                                        />
                                    </div>
                                </form>
                            </Form>
                        </div>

                        {/* Decorative Corner Elements */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-primary/10 rounded-tl-2xl" />
                        <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary/10 rounded-tr-2xl" />
                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-primary/10 rounded-bl-2xl" />
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-primary/10 rounded-br-2xl" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactSection;