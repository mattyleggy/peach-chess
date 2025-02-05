"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ScrollButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    targetId: string;
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "dropShadow";
    children: React.ReactNode;
    className?: string;
}

export function ScrollButton({ targetId, variant = "default", children, className, ...props }: ScrollButtonProps) {
    const scrollToElement = () => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Button
            variant={variant}
            onClick={scrollToElement}
            className={cn(className)}
            {...props}
        >
            {children}
        </Button>
    );
} 