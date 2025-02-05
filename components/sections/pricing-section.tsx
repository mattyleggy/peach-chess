import Section from "@/components/common/section";
import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import { GlowCircle } from "@/components/ui/glow-circle";
import { FaRegClock, FaRegHandshake, FaRegStar } from "react-icons/fa6";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { RiCustomerService2Line, RiTeamLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { ScrollButton } from "../common/scroll-button";
import { ArrowDown } from "lucide-react";

export function PricingSection() {
    const usps = [
        {
            icon: <FaRegStar className="w-5 h-5" />,
            title: "We're Aussie Based",
            description:
                "Australian-based team that understands local market needs and businesses.",
        },
        {
            icon: <HiOutlineCurrencyDollar className="w-5 h-5" />,
            title: "Simple Monthly Plans",
            description: "Clear, all-inclusive pricing with no surprise costs.",
        },
        {
            icon: <FaRegHandshake className="w-5 h-5" />,
            title: "Direct Communication",
            description: "No middlemen - work directly with your development team.",
        },
        {
            icon: <RiCustomerService2Line className="w-5 h-5" />,
            title: "SEO Optimised",
            description:
                "Transparent SEO strategies with clear explanations and realistic results.",
        },
        {
            icon: <FaRegClock className="w-5 h-5" />,
            title: "Ongoing Support",
            description: "Regular updates, backups, and maintenance included.",
        },
        {
            icon: <RiTeamLine className="w-5 h-5" />,
            title: "Expert Team",
            description: "Senior developers with 15+ years industry experience.",
        },
    ];

    return (
        <Section variant="light" className="relative">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                <div className="w-full lg:w-3/4">
                    <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
                        <Badge variant="secondary">Afforable &amp; Transparent Pricing</Badge>
                        <Typography variant="h2" className="leading-tight">
                            $0 Down, $150 Per Month. 12 Months Minimum
                        </Typography>
                        <p className="text-muted-foreground text-lg">
                            Start with our standard 5-page business website package with no upfront
                            costs. If you need more pages, we can customise a solution for your
                            needs. Every website includes professional design, reliable hosting,
                            included revisions, and ongoing support.
                        </p>
                        <ScrollButton
                            targetId="pricing"
                            variant={"dropShadow"}
                            className="bg-primary text-white hover:bg-primary/90 mt-4"
                        >
                            See Available Plans <ArrowDown className="w-4 h-4" />
                        </ScrollButton>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 w-full">
                    <GlowCircle size="lg" className="hidden lg:block -top-1/4 -right-1/4" />
                    <GlowCircle size="lg" className="hidden lg:block -bottom-1/4 -left-1/4" />
                    {usps.map((usp, index) => (
                        <div
                            key={index}
                            className={cn(
                                "p-6 rounded-xl space-y-4",
                                "shadow-lg",
                                index === 2 ? "bg-primary text-white" : "bg-white",
                                index % 2 === 1 ? "lg:-translate-y-10" : ""
                            )}
                        >
                            <div
                                className={cn(
                                    "p-2 rounded-full w-10 h-10 flex items-center justify-center",
                                    index === 3 ? "bg-white/10" : "bg-primary/10"
                                )}
                            >
                                {usp.icon}
                            </div>
                            <h3 className="font-semibold text-xl">{usp.title}</h3>
                            <p
                                className={cn(
                                    index === 2 ? "text-white/80" : "text-muted-foreground"
                                )}
                            >
                                {usp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
