import Section from "@/components/common/section";
import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import { GlowCircle } from "@/components/ui/glow-circle";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { CircleBadge } from "@/components/common/circle-badge";

export function LessonStructure() {
    const usps = [
        {
            title: "Chess Online",
            description: "Learn chess from anywhere in the world with professional online lessons.",
            bullets: [
                "Communicate using Discord",                
                "Chess platform used is Lichess (Lichess is 100% free and the main site I use personally)",                
            ]
        },
        {
            title: "Lesson Structure",
            description: "Structured lessons designed for optimal learning and practice.",
            bullets: [
                "60 minutes in length (40 minutes of learning, 20 minutes of training games)",                
                "Training games are essential for practicing what is taught"
            ]
        },
        {
            title: "Foundations",
            description: "Comprehensive coverage of chess fundamentals.",
            bullets: [
                "Opening",
                "Middlegame",
                "Endgame",
                "Tactical combinations"
            ]
        },
        {
            title: "Training Plan",
            description: "Personalised training approach for continuous improvement based on:",
            bullets: [
                "Your ability",
                "The amount of time you intend to spend practicing chess"
            ]
        }
    ];

    return (
        <Section variant="default" className="relative justify-center items-center text-center">
            <div className="flex flex-col relative z-10 items-center justify-center text-center">
                <Badge variant="default">Lesson Structure</Badge>
                <Typography variant="h2" className="max-w-lg">
                    What does a typical lesson look like?
                </Typography>
                <div className="w-36 py-10">
                    <Separator />
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 relative z-10 w-full pb-20">
                    <GlowCircle size="lg" className="hidden lg:block -top-1/4 -right-1/4" />
                    <GlowCircle size="lg" className="hidden lg:block -bottom-1/4 -left-1/4" />
                    {usps.map((usp, index) => (
                        <div
                            key={index}
                            className={cn(
                                "p-6 rounded-xl shadow-lg bg-white/90 text-primary relative",
                                index % 2 === 1 ? "lg:translate-y-20" : ""
                            )}
                        >
                            <div className="absolute -top-4 -left-4">
                                <CircleBadge>{index + 1}</CircleBadge>
                            </div>
                            <div className="pl-12 md:pl-16 space-y-4 text-left">
                                <h3 className="font-semibold text-xl text-left">{usp.title}</h3>
                                <p className="text-muted-foreground text-left">{usp.description}</p>
                                <ul className="list-disc pl-4 text-muted-foreground space-y-1">
                                    {usp.bullets.map((bullet, i) => (
                                        <li key={i}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
