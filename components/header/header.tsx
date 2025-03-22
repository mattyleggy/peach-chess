"use client";
import { Badge } from "../ui/badge";
import { GlowCircle } from "../ui/glow-circle";
import { Typography } from "../common/typography";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header({
    badge,
    title,
    subTitle,
    buttons,
    rightContent,
    leftClassName,
    className,
    stats,
}: {
    badge?: React.ReactNode;
    title: React.ReactNode;
    subTitle: React.ReactNode;
    buttons?: React.ReactNode;
    rightContent: React.ReactNode;
    leftClassName?: string;
    className?: string;
    stats?: React.ReactNode;
}) {
    return (
        <header className={`flex w-full justify-center bg-gray-400 relative ${className || ""}`}>
            <Image
                src="/images/bg/section-bg.png"
                alt="Background"
                fill
                className="object-cover"
                priority
                quality={100}
            />

            <div className="flex flex-col md:flex-row gap-4 md:gap-4 w-full max-w-7xl py-6 md:py-10 relative px-4 md:px-8 2xl:px-0 text-primary-foreground">
                <motion.div
                    // initial={{ opacity: 0, x: -50 }}
                    // whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    // transition={{ duration: 0.4 }}
                    className={`w-full md:w-2/3 flex flex-col gap-4 md:gap-8 items-center md:items-start justify-center text-center md:text-left ${
                        leftClassName || ""
                    }`}
                >
                    <div className="flex flex-col gap-2 items-center md:items-baseline">
                        {badge && (
                            <div className="hidden lg:block">
                                <Badge variant={"outline"}>{badge}</Badge>
                            </div>
                        )}
                        <Typography variant="h1" className="w-full md:w-4/5 uppercase">
                            {title}
                        </Typography>
                    </div>
                    <div className="text-primary-foreground/90 md:text-lg md:pr-10">{subTitle}</div>
                    <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4 items-center md:items-start">
                        {buttons}
                    </div>
                    {stats && (
                        <div className="w-full flex flex-col sm:flex-row gap-4 items-center md:items-start">
                            {stats}
                        </div>
                    )}
                </motion.div>
                <motion.div
                    // initial={{ opacity: 0, x: 50 }}
                    // whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    // transition={{ duration: 0.8, delay: 0.8 }}
                    className="w-full md:w-1/2 flex justify-center"
                >
                    {rightContent}
                </motion.div>
                <GlowCircle size="lg" className="hidden md:block -left-1/4 top-10" />
            </div>
        </header>
    );
}
