import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CircleBadgeProps {
    children: ReactNode;
    className?: string;
}

export function CircleBadge({ children, className }: CircleBadgeProps) {
    return (
        <div
            className={cn(
                "p-2 rounded-full w-20 h-20 flex items-center justify-center bg-secondary text-secondary-foreground text-2xl font-bold",
                className
            )}
        >
            {children}
        </div>
    );
} 