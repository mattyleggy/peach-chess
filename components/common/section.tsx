import { cn } from "@/lib/utils";

type SectionProps = {
    children: React.ReactNode;
    variant?: "default" | "light";
    className?: string;
    backgroundPosition?: string;
};

export default function Section({ children, variant = "default", className, backgroundPosition }: SectionProps) {
    return (
        <section
            className={cn(
                "w-full relative",
                variant === "default" ? "bg-primary-light" : "bg-white"
            )}
            {...(variant === "default" ? {
                style: {
                    backgroundImage: "url('images/repeating-squares.png')",
                    backgroundPosition: backgroundPosition || "center",
                    backgroundRepeat: "no-repeat",
                }
            } : {})}
        >
            <div className={cn(
                "px-8 lg:px-0 w-full max-w-7xl min-h-96 mx-auto flex flex-col items-center leading-normal py-20",
                className
            )}>
                {children}
            </div>
        </section>
    );
}
