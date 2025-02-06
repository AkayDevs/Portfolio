import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
    title: string
    description: string
    testimonials: Array<{
        author: TestimonialAuthor
        text: string
        href?: string
    }>
    className?: string
}

export function TestimonialsSection({
    title,
    description,
    testimonials,
    className
}: TestimonialsSectionProps) {
    return (
        <section className={cn(
            "bg-background text-foreground",
            "py-12 sm:py-24 md:py-32 px-0",
            className
        )}>
            <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
                <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
                    <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
                        {title}
                    </h2>
                    <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
                        {description}
                    </p>
                </div>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    {/* First row moving left */}
                    <div className="flex w-full overflow-hidden [--gap:1rem] [--duration:30s]">
                        <div className="flex shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee">
                            {[...testimonials, ...testimonials].map((testimonial, i) => (
                                <TestimonialCard
                                    key={`first-${i}`}
                                    {...testimonial}
                                />
                            ))}
                        </div>
                        <div className="flex shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee">
                            {[...testimonials, ...testimonials].map((testimonial, i) => (
                                <TestimonialCard
                                    key={`second-${i}`}
                                    {...testimonial}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Second row moving right */}
                    <div className="flex w-full overflow-hidden mt-8 [--gap:1rem] [--duration:35s]">
                        <div className="flex shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee-reverse">
                            {[...testimonials, ...testimonials].reverse().map((testimonial, i) => (
                                <TestimonialCard
                                    key={`third-${i}`}
                                    {...testimonial}
                                />
                            ))}
                        </div>
                        <div className="flex shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee-reverse">
                            {[...testimonials, ...testimonials].reverse().map((testimonial, i) => (
                                <TestimonialCard
                                    key={`fourth-${i}`}
                                    {...testimonial}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Gradient overlays */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />
                </div>
            </div>
        </section>
    )
} 