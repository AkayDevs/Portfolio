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
                <span className="text-primary-foreground relative z-10 transform transition-all duration-500 ease-out scale-90 group-hover:scale-100">{text}</span>
                <ArrowRight className="w-4 h-4 relative z-10 transform transition-all duration-500 ease-out translate-x-4 scale-90 opacity-0 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100" />
            </div>

            {/* Animated Background */}
            <div
                className="absolute left-[12%] top-[40%] h-3 w-3 rounded-full bg-primary opacity-80 
                transition-all duration-500 ease-out transform origin-center scale-100
                group-hover:scale-[100] group-hover:left-0 group-hover:top-0 group-hover:opacity-100
                before:absolute before:inset-0 before:rounded-full before:bg-primary before:opacity-50 
                before:transform before:scale-150 before:transition-transform before:duration-500 
                group-hover:before:scale-100"
            />
        </button>
    );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
