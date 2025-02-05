import Section from "@/components/common/section";
import USPCard from "@/components/common/usp-card";
import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import { GlowCircle } from "@/components/ui/glow-circle";
import { FaRegThumbsUp } from "react-icons/fa";
import { IconCircle } from "@/components/common/icon-circle";
import ImageShadow from "@/components/common/image-shadow";

const reasons = [
    {
        icon: <FaRegThumbsUp className="text-xl" />,
        title: "Lifetime Support & Updates",
        description:
            "Never worry about maintenance again. We handle all updates, security, and changes to keep your site running perfectly.",
    },
    {
        icon: <FaRegThumbsUp className="text-xl" />,
        title: "Custom-Built Solutions",
        description:
            "Tailored websites built specifically for your business needs, not generic templates that limit your growth.",
    },
    {
        icon: <FaRegThumbsUp className="text-xl" />,
        title: "We get you more customers",
        description:
            "We build websites that actually work - bringing you real customers, not just pretty designs.",
    },
];

export function ReasonsToChooseUs() {
    return (
        <Section variant="light" className="relative">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">
                {/* Left side - Image */}
                <div className="relative order-2 lg:order-1">
                    <div className="px-4 lg:px-0">
                        <ImageShadow src="/images/house.png" alt="Modern building" />

                        <GlowCircle size="lg" className="absolute -bottom-1/3 -right-1/3 z-10" />
                        {/* Stats overlay */}
                        <USPCard className="flex flex-row gap-3 justify-center items-center absolute left-6 lg:left-2 top-14 z-10">
                            <IconCircle
                                icon={<FaRegThumbsUp className="text-xl" />}
                                variant="light"
                            />
                            <div className="leading-none whitespace-nowrap">
                                <div className="leading-none font-bold">398K</div>
                                <div className="leading-none text-xs text-gray-500">
                                    Happy users
                                </div>
                            </div>
                        </USPCard>
                    </div>
                </div>

                {/* Right side - Content */}
                <div className="space-y-8 order-1 lg:order-2 px-4 lg:px-0">
                    <div className="flex flex-col items-start gap-4">
                        <Badge variant="secondary">Why Choose Us</Badge>
                        <Typography variant="h2" className="text-3xl lg:text-5xl">
                            Reasons To Choose Us For Your Website
                        </Typography>
                        <p className="text-muted-foreground">
                            With over 15+ years of experience in web development and digital marketing, 
                            we specialise in creating websites that drive real business growth. Our team 
                            of developers and designers are committed to delivering solutions 
                            that exceed expectations.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {reasons.map((reason, index) => (
                            <div key={index} className="flex gap-4">
                                <IconCircle icon={reason.icon} size="lg" />
                                <div>
                                    <h3 className="font-semibold">{reason.title}</h3>
                                    <p className="text-muted-foreground">{reason.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <GlowCircle size="lg" className="z-0 hidden lg:block -top-1/4 -right-60" />
        </Section>
    );
}
