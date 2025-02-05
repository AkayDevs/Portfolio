import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
}

const InteractiveHoverButton = React.forwardRef<
    HTMLButtonElement,
    InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                "group relative min-w-[10rem] md:min-w-[12rem] cursor-pointer overflow-hidden rounded-full border bg-background pl-12 pr-8 py-3 text-center font-medium transition-all duration-500 ease-out",
                className,
            )}
            {...props}
        >
            {/* Static Text */}
            <span className="relative z-10 inline-block w-full transform transition-all duration-500 ease-out group-hover:translate-x-[150%] group-hover:opacity-0">
                {text}
            </span>

            {/* Hover Text + Icon */}
            <div className="absolute inset-0 z-20 flex items-center justify-center gap-2 transform translate-x-[150%] opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                <span className="text-primary-foreground relative z-10">{text}</span>
                <ArrowRight
                    className="w-4 h-4 relative z-10 transition-transform duration-500 ease-out group-hover:translate-x-1"
                />
            </div>

            {/* Animated Background */}
            <div
                className="absolute left-[12%] top-[40%] h-3 w-3 rounded-full bg-primary opacity-80 
                transition-all duration-500 ease-out
                group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:opacity-100
                before:absolute before:inset-0 before:rounded-full before:bg-primary/20 before:transform before:scale-0 before:opacity-0
                before:transition-all before:duration-500 before:ease-out
                group-hover:before:scale-[2.5] group-hover:before:opacity-100"
            >
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-sm transform scale-[1.35] opacity-0 transition-all duration-500 ease-out group-hover:opacity-100" />
            </div>
        </button>
    );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
