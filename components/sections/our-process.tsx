import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/common/typography";
import Section from "@/components/common/section";

export default function OurProcess() {
    return (
        <Section variant="light" className="space-y-12">
            <div className="text-center space-y-6">
                <Badge variant="secondary">Our Process</Badge>
                <Typography variant="h2">How We Work</Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    {
                        step: "01",
                        title: "Discovery",
                        description:
                            "We start by understanding your business, goals, and target audience.",
                    },
                    {
                        step: "02",
                        title: "Planning",
                        description:
                            "Creating a detailed roadmap for your website's development.",
                    },
                    {
                        step: "03",
                        title: "Development",
                        description:
                            "Building your website with cutting-edge technology and best practices.",
                    },
                    {
                        step: "04",
                        title: "Launch",
                        description: "Thorough testing and deployment of your new website.",
                    },
                ].map((item) => (
                    <div key={item.step} className="relative">
                        <div className="bg-white rounded-3xl p-8 shadow-lg space-y-4">
                            <div className="text-4xl font-bold text-primary/20">
                                {item.step}
                            </div>
                            <Typography variant="h3">{item.title}</Typography>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
} 