import { cn } from "@/lib/utils";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "featured";
}

export default function FeatureCard({ 
    icon, 
    title, 
    children, 
    className,
    variant = "default" 
}: FeatureCardProps) {
    return (
        <div className={cn(
            "flex flex-col items-center gap-4 p-6 rounded-3xl md:max-w-80",
            variant === "featured" 
                ? "bg-primary text-white shadow-lg [&_p]:text-white/80" 
                : "bg-white shadow-md",
            className
        )}>
            <div className={cn(
                "p-3 rounded-full",
                variant === "featured" 
                    ? "bg-white/10 text-white" 
                    : "bg-primary/10"
            )}>
                {icon}
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-center text-muted-foreground leading-normal">{children}</p>
        </div>
    );
}
