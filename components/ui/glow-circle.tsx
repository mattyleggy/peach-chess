import { cn } from "@/lib/utils";

interface GlowCircleProps {
    className?: string;
    size?: "sm" | "md" | "lg";
}

const sizeClasses = {
    sm: "w-[200px] h-[200px]",
    md: "w-[300px] h-[300px]",
    lg: "w-[400px] h-[400px]",
};

export function GlowCircle({ className, size = "md" }: GlowCircleProps) {
    return (
        <div
            className={cn(
                "absolute rounded-full bg-primary/15 blur-[100px] -z-10",
                sizeClasses[size],
                className
            )}
        />
    );
}
