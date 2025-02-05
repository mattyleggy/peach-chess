import Section from "@/components/common/section";
import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const features = [
    "Mobile-First Responsive Design",
    "Search Engine Optimization",
    "Fast Loading Speed",
    "Security Best Practices",
    "Regular Backups",
    "Aussie Support",
];

export default function ServiceFeatures() {
    return (
        <Section variant="light">
            <div className="w-full  px-4">
                <div className="flex flex-col items-center">
                    <Badge variant="secondary" className="mb-4">
                        Why Choose Us
                    </Badge>

                    <Typography variant="h2" className="mb-4">
                        Features that Set Us Apart
                    </Typography>
                    <p className="text-muted-foreground mb-8">
                        We deliver more than just websites. Our services come packed with features
                        that ensure your online success.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div className="flex-shrink-0">
                                    <Check className="w-5 h-5 text-primary" />
                                </div>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
