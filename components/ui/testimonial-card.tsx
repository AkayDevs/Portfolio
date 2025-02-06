import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { User } from "lucide-react"

export interface TestimonialAuthor {
    name: string
    role: string
    image: string
}

interface TestimonialCardProps {
    text: string
    author: TestimonialAuthor
    href?: string
    className?: string
}

export function TestimonialCard({
    text,
    author,
    href,
    className
}: TestimonialCardProps) {
    const CardWrapper = ({ children }: { children: React.ReactNode }) => {
        if (href) {
            return (
                <Link href={href} className={cn(
                    "group/card flex w-[320px] shrink-0 flex-col gap-4 rounded-lg border bg-card p-6 text-card-foreground shadow transition-colors",
                    "hover:bg-muted",
                    className
                )}>
                    {children}
                </Link>
            )
        }
        return (
            <div className={cn(
                "group/card flex w-[320px] shrink-0 flex-col gap-4 rounded-lg border bg-card p-6 text-card-foreground shadow transition-colors",
                className
            )}>
                {children}
            </div>
        )
    }

    return (
        <CardWrapper>
            <div className="relative">
                <p className="text-sm leading-loose">
                    {text}
                </p>
            </div>

            <div className="flex items-center gap-4">
                <Avatar>
                    <AvatarImage
                        src={author.image}
                        alt={author.name}
                    />
                    <AvatarFallback>
                        <User className="h-5 w-5 text-muted-foreground" />
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                    <div className="text-sm font-medium leading-none">
                        {author.name}
                    </div>
                    <div className="text-sm leading-none text-muted-foreground">
                        {author.role}
                    </div>
                </div>
            </div>
        </CardWrapper>
    )
} 