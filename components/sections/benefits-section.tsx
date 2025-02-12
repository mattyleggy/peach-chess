import Section from "../common/section";
import { Typography } from "../common/typography";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

const benefits = [
    {
        title: "Improve Attention",
        description:
            "Chess improves focus, builds resistance to distractions, and strengthens mental discipline.",
    },
    {
        title: "Planning",
        description:
            "Chess enhances strategic thinking by fostering planning, analysis, and adaptability.",
    },
    {
        title: "Social Skills",
        description: "Chess develops sportsmanship, teamwork, and meaningful interpersonal skills.",
    },
] as const;

export default function BenefitsSection() {
    return (
        <Section className="relative" variant="texture">
            <div className="flex flex-col relative z-10">
                <Badge variant="default">Why Chess?</Badge>
                <Typography variant="h2" className="max-w-lg">
                    3 Benefits of learning how to play Chess
                </Typography>
                <div className="w-36 py-10">
                    <Separator />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <Image
                        src="/images/chess-pieces.png"
                        alt="Chess Board"
                        width={600}
                        height={600}
                        className="rounded-xl"
                    />
                </div>

                <div className="space-y-8">
                    {benefits.map((benefit) => (
                        <div key={benefit.title} className="space-y-4">
                            <div className="flex items-center gap-2">
                                <FaCheck className="text-secondary" />
                                <Typography variant="h3">{benefit.title}</Typography>
                            </div>
                            <p>{benefit.description}</p>
                        </div>
                    ))}

                    <div className="space-y-4">
                        <p className="text-3xl font-bold">Most importantly, it's fun!</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
