import Section from "@/components/common/section";
import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Palette, Code, Rocket } from "lucide-react";

const steps = [
    {
        icon: <MessageSquare className="w-8 h-8 text-primary" />,
        title: "1. Consultation",
        description: "We start with a detailed discussion to understand your business needs and goals."
    },
    {
        icon: <Palette className="w-8 h-8 text-primary" />,
        title: "2. Design",
        description: "Our team creates a custom design that aligns with your brand identity."
    },
    {
        icon: <Code className="w-8 h-8 text-primary" />,
        title: "3. Development",
        description: "We build your website using modern technologies and best practices."
    },
    {
        icon: <Rocket className="w-8 h-8 text-primary" />,
        title: "4. Launch",
        description: "After thorough testing, we deploy your site and provide ongoing support."
    }
];

export default function ServiceProcess() {
    return (
        <Section variant="default">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Badge variant="secondary" className="mb-4">Our Process</Badge>
                    <Typography variant="h2" className="mb-4">
                        How We Work
                    </Typography>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Our streamlined process ensures efficient delivery of high-quality websites that meet your business objectives.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20 -z-10" />
                            )}
                            
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 p-4 rounded-full bg-primary/10">
                                    {step.icon}
                                </div>
                                <Typography variant="h3" className="mb-2">
                                    {step.title}
                                </Typography>
                                <p className="text-muted-foreground">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
} 