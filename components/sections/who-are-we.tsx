import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import Section from "@/components/common/section";
import { Highlight } from "../common/highlight";
import { Separator } from "../ui/separator";
import { Statistics } from "../common/statistics";
import { AboutMe } from "../common/about-me";
import { Achievements } from "../common/achievements";
import { Button } from "../ui/button";

export default function WhoAreWe() {
    return (
        <Section variant="light" backgroundPosition="right" className="space-y-12">
            <div>
                <Badge variant="default">Who am I?</Badge>
                <Typography variant="h2">
                    Ben Peach{" "}
                    <span className="text-muted-foreground font-normal">Toowoomba, QLD</span>
                </Typography>
                <p className="text-muted-foreground text-xl">
                    I am a dedicated professional educator with a{" "}
                    <Highlight variant="p">degree in primary education</Highlight> and over a decade
                    of experience as a chess coach and competitor.
                </p>
                <Button variant="default" className="mt-4">
                    Learn More
                </Button>
            </div>
            <div className="w-36">
                <Separator />
            </div>
            <div className="grid md:grid-cols-6 gap-8 w-full">
                <div className="md:col-span-2 order-2 md:order-1">
                    <Statistics />
                </div>
                <div className="md:col-span-4 order-1 md:order-2">
                    <AboutMe />
                </div>
            </div>
            <Achievements />
        </Section>
    );
}
