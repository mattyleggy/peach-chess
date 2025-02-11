import { cn } from "@/lib/utils";
import Image from "next/image";
type SectionProps = {
    children: React.ReactNode;
    variant?: "default" | "light" | "texture";
    className?: string;
    backgroundPosition?: string;
};

export default function Section({
    children,
    variant = "default",
    className,
    backgroundPosition,
}: SectionProps) {
    return (
        <section
            className={cn(
                "w-full relative",
                variant !== "light" ? "bg-primary text-primary-foreground" : "bg-white"
            )}
            {...(variant === "default"
                ? {
                      style: {
                          backgroundImage: "url('images/repeating-squares.png')",
                          backgroundPosition: backgroundPosition || "center",
                          backgroundRepeat: "no-repeat",
                      },
                  }
                : {})}
        >
            {variant === "texture" && (
                <Image
                    src="/images/bg/textured-bg.png" // Update this path to your image
                    alt="Background pattern"
                    fill
                    className="object-cover z-10"
                    priority
                />
            )}
            <div
                className={cn(
                    "px-8 lg:px-0 w-full max-w-7xl min-h-96 mx-auto flex flex-col items-baseline leading-normal py-20",
                    className
                )}
            >
                {children}
            </div>
        </section>
    );
}
