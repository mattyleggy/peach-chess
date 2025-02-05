import UspBar from "@/components/common/usp-bar";
import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import FeatureCard from "@/components/common/feature-card";
import Section from "@/components/common/section";
import { FaStar } from "react-icons/fa6";
import { Arrow } from "@/components/common/arrow";

export default function KeyFeatures() {
    const FaStarIcon = <FaStar className="text-xl" />;

    const usps = [
        {
            title: "Included Edits",
            icon: FaStarIcon,
        },
        {
            title: "$0 Upfront - Risk Free",
            icon: FaStarIcon,
        },
        {
            title: "Professional & Affordable",
            icon: FaStarIcon,
        },
        {
            title: "Australian owned and operated",
            icon: FaStarIcon,
        },
    ];

    const features = [
        {
            title: "Included Edits",
            icon: FaStarIcon,
            description:
                "We include edits in your website package, so you can keep your website content up-to-date.",
            variant: "default",
        },
        {
            title: "Fast Turnaround",
            icon: FaStarIcon,
            description:
                "We typically complete websites within 14 days of receiving your content and requirements. Our process is efficient and we never compromise on quality.",
            variant: "featured",
        },
        {
            title: "We handle everything",
            icon: FaStarIcon,
            description:
                "We handle everything for you. You can focus on your business while we handle the rest.",
            variant: "default",
        },
    ];

    return (
        <div className="md:mt-20 w-full">
            <Section className="relative pt-0">
                <Arrow
                    className="absolute right-52 top-56 hidden md:block"
                    rotation={180}
                    flip
                    size={80}
                />
                <UspBar usps={usps} className="mb-20 md:mb-0 md:-translate-y-1/2" />
                <div className="flex flex-col justify-center items-center text-center gap-4 px-4 md:px-0">
                    <Badge variant="secondary">Key Features</Badge>
                    <Typography variant="h2">What We Do</Typography>
                    <p className="max-w-2xl">
                        By getting more customers you are also able to increase your rates and be
                        more selective with your jobs
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-10">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                variant={feature.variant as "default" | "featured"}
                            >
                                {feature.description}
                            </FeatureCard>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
