import Section from "@/components/common/section";
import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Laptop, Paintbrush, Settings, LineChart } from "lucide-react";

const services = [
    {
        icon: <Laptop className="w-8 h-8 text-primary" />,
        title: "Custom Website Design",
        description: "Beautiful, responsive websites tailored to your brand and business goals."
    },
    {
        icon: <Paintbrush className="w-8 h-8 text-primary" />,
        title: "UI/UX Design",
        description: "User-friendly interfaces that engage visitors and drive conversions."
    },
    {
        icon: <Settings className="w-8 h-8 text-primary" />,
        title: "Website Maintenance",
        description: "Regular updates and maintenance to keep your site secure and performing optimally."
    },
    {
        icon: <LineChart className="w-8 h-8 text-primary" />,
        title: "SEO Optimization",
        description: "Improve your search rankings and attract more organic traffic."
    }
];

export default function OurServices() {
    return (
        <Section variant="light">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Badge variant="secondary" className="mb-4">Our Services</Badge>
                    <Typography variant="h2" className="mb-4">
                        Comprehensive Web Solutions
                    </Typography>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We offer a full range of web services to help your business succeed online. Each service is tailored to meet your specific needs and goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                            <div className="mb-4">{service.icon}</div>
                            <Typography variant="h3" className="mb-2">
                                {service.title}
                            </Typography>
                            <p className="text-muted-foreground">
                                {service.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
} 