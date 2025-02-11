import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const highlightVariants = cva(
    "text-secondary-foreground bg-secondary inline leading-none relative", 
    {
        variants: {
            variant: {
                default: "px-4",
                p: "px-[8px] py-[4px] font-bold",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

interface HighlightProps extends VariantProps<typeof highlightVariants> {
    children: React.ReactNode;
    className?: string;
}

export function Highlight({ children, className = "", variant }: HighlightProps) {
    return (
        <span className={cn(highlightVariants({ variant }), className)}>            
            <span className="relative">{children}</span>
        </span>
    );
} 