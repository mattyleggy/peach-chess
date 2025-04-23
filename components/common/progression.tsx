"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimationControls } from "framer-motion";
import { ProgressionCard } from "./progression-card";
import { useState, useEffect } from "react";

interface ProgressionProps {
    className?: string;
}

const MOBILE_BREAKPOINT = 1024;

export function ProgressionLine({ className }: ProgressionProps) {
    const pathControls = useAnimationControls();
    const circle1Controls = useAnimationControls();
    const circle2Controls = useAnimationControls();
    const circle3Controls = useAnimationControls();
    const cardsControls = useAnimationControls();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        const handleResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const progressionLevels = [
        {
            number: 1,
            title: "Beginner",
            ratingOTB: "0-799",
            description:
                "Master the basics! Learn how each piece moves, fundamental rules, and simple strategies to set a strong foundation for your chess journey.",
            className: "lg:mt-0",
            delay: 0,
        },
        {
            number: 2,
            title: "Intermediate",
            ratingOTB: "800-1499",
            description:
                "Take your skills to the next level! Dive into tactical maneuvers like forks, pins, and skewers, while sharpening your opening and endgame techniques.",
            className: "lg:-mt-32",
            delay: 0.2,
        },
        {
            number: 3,
            title: "Advanced",
            ratingOTB: "1500+",
            description:
                "Compete like a pro! Refine your positional play, master opening theory, and gain the tools to analyse and dominate complex games.",
            className: "lg:-mt-64 xl:-mt-80",
            delay: 0.4,
        },
    ];

    // Start the sequence when component is in view
    const startSequence = async () => {
        // Only animate SVG elements if we're on desktop
        if (window.innerWidth >= MOBILE_BREAKPOINT) {
            await pathControls.start({ pathLength: 1 });
            await circle1Controls.start({ scale: 1 });
            await circle2Controls.start({ scale: 1 });
            await circle3Controls.start({ scale: 1 });
        }
        await cardsControls.start({ opacity: 1, y: 0 });
    };

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onViewportEnter={() => startSequence()}
                className={cn("w-full opacity-0 absolute md:relative md:block", className)}
            >
                <svg
                    width="1169"
                    height="418"
                    viewBox="0 0 1169 418"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto opacity-0 lg:opacity-100"
                >
                    <motion.path
                        d="M2 415.192C2 415.192 38.903 330.36 195.058 371.312C198.101 372.132 201.026 373.537 204.147 374.006C233.716 378.768 284.545 395.126 357.805 319.702C361.472 315.915 364.788 311.777 368.26 307.795C394.552 277.461 421.274 253.569 538.731 258.84C542.398 258.996 546.065 259.386 549.693 259.816C568.222 262.041 644.642 265.047 702.064 174.983C704.053 171.899 713.766 155.932 715.483 152.692C718.838 146.485 718.448 147.656 731.009 131.493C768.068 83.7483 803.917 74.496 850.027 70.2798C877.879 67.7032 919.112 66.7662 970.41 73.8323C985.272 75.8624 1000.25 76.6041 1015.19 75.5501C1060.95 72.3879 1149.7 58.8803 1166.24 2"
                        stroke="white"
                        strokeWidth="4"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={pathControls}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />
                    <motion.g
                        initial={{ scale: 0 }}
                        animate={circle1Controls}
                        transition={{ duration: 0.3 }}
                    >
                        <circle
                            cx="185"
                            cy="371.096"
                            r="20"
                            fill="#18191C"
                            stroke="#FFA7A7"
                            strokeWidth="4"
                        />
                        <circle cx="185" cy="371.096" r="9" fill="white" />
                    </motion.g>
                    <motion.g
                        initial={{ scale: 0 }}
                        animate={circle2Controls}
                        transition={{ duration: 0.3 }}
                    >
                        <circle
                            cx="596"
                            cy="258"
                            r="20"
                            fill="#18191C"
                            stroke="#86E2F9"
                            strokeWidth="4"
                        />
                        <circle cx="596" cy="258" r="9" fill="white" />
                    </motion.g>
                    <motion.g
                        initial={{ scale: 0 }}
                        animate={circle3Controls}
                        transition={{ duration: 0.3 }}
                    >
                        <circle
                            cx="1007"
                            cy="76"
                            r="20"
                            fill="#18191C"
                            stroke="#C5B1FF"
                            strokeWidth="4"
                        />
                        <circle cx="1007" cy="76" r="9" fill="white" />
                    </motion.g>
                </svg>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-8 mt-2 lg:mt-8">
                {progressionLevels.map((level, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={cardsControls}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 0.3, 
                            delay: !isMobile ? (index * 0.2) : 0
                        }}
                        key={level.number}
                        className={level.className}
                    >
                        <ProgressionCard
                            number={level.number}
                            title={level.title}
                            ratingOTB={level.ratingOTB}
                            description={level.description}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
