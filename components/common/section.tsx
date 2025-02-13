import { cn } from "@/lib/utils";
import Image from "next/image";
type SectionProps = {
    children: React.ReactNode;
    variant?: "default" | "light" | "texture" | "textureLight";
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
                variant !== "light" && variant !== "textureLight"
                    ? "bg-primary text-primary-foreground"
                    : "bg-white"
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
                    src={"/images/bg/textured-bg.png"}
                    alt="Background pattern"
                    fill
                    className="object-cover z-0"
                    priority
                />
            )}

            {variant === "textureLight" && (
                <Image
                    src="/images/bg/section-bg-light.png"
                    alt="Background pattern"
                    className="z-0 absolute bottom-0 left-0 w-full"
                    width={1920}
                    height={1080}
                />
            )}

            <div
                className={cn(
                    "px-8 lg:px-0 w-full max-w-7xl min-h-96 mx-auto flex flex-col items-baseline leading-normal py-20 z-20",
                    className
                )}
            >
                {children}
            </div>
        </section>
    );
}
