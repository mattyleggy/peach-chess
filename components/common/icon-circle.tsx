import { cn } from "@/lib/utils";

interface IconCircleProps {
    icon: React.ReactNode;
    className?: string;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "light" | "white";
}

const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
};

const variantClasses = {
    default: "bg-primary/10",
    light: "bg-gray-100",
    white: "bg-white/10",
};

export function IconCircle({ 
    icon, 
    className,
    size = "md",
    variant = "default"
}: IconCircleProps) {
    return (
        <div 
            className={cn(
                "flex items-center justify-center rounded-full whitespace-nowrap shrink-0",
                sizeClasses[size],
                variantClasses[variant],
                className
            )}
        >
            {icon}
        </div>
    );
} 