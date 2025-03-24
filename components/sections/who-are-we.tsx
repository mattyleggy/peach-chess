import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import Section from "@/components/common/section";
import { Highlight } from "../common/highlight";
import { Separator } from "../ui/separator";
import { Statistics } from "../common/statistics";
import { AboutMe } from "../common/about-me";
import { Achievements } from "../common/achievements";
import { Button } from "../ui/button";
import Link from "next/link";

interface WhoAreWeProps {
    detailed?: boolean;
}

export default function WhoAreWe({ detailed = false }: WhoAreWeProps) {
    return (
        <Section variant="light" backgroundPosition="right" className="space-y-12">
            <div>
                <Badge variant="default">Who am I?</Badge>
                <Typography variant="h2">
                    Ben Peach{" "}
                    <span className="text-muted-foreground font-normal">Toowoomba, QLD</span>
                </Typography>

                {detailed ? (
                    <p className="text-muted-foreground">
                        I am a dedicated professional educator with a{" "}
                        <Highlight variant="p">degree in primary education</Highlight> and over a
                        decade of experience as a chess coach and competitor. Combining my deep
                        understanding of how students learn with proven pedagogical strategies, I
                        deliver tailored instruction that accelerates your progress and drives
                        outstanding results. Whether you're aiming to sharpen your skills or achieve
                        competitive success, I am committed to helping you reach your full potential
                        in chess.
                    </p>
                ) : (
                    <p className="text-muted-foreground text-xl">
                        I am a dedicated professional educator with a{" "}
                        <Highlight variant="p">degree in primary education</Highlight> and over a
                        decade of experience as a chess coach and competitor.
                    </p>
                )}

                {detailed ? (
                    <div className="mt-6 space-y-8">
                        <div>
                            <Typography variant="h3">My Chess Career</Typography>
                            <p className="text-muted-foreground mt-4">
                                My journey with chess has been both long and remarkable. Like many
                                children, I was captivated by the simplicity and beauty of the game.
                                At the age of six, I participated in my first chess tournament and
                                have competed every year since. Through chess, I have had the
                                privilege of meeting many extraordinary individuals who have become
                                lifelong friends.
                            </p>
                        </div>
                        <div>
                            <Typography variant="h3">My Current Focus</Typography>
                            <p className="text-muted-foreground mt-4">
                                After over a decade of teaching chess, I discovered I have profound
                                passion for teaching. With my degree in education, I am now
                                dedicated to teaching, inspiring and supporting the growth of other
                                chess players. In addition to my teaching endeavours, I run school
                                chess tournaments for the Toowoomba Chess Club, striving to promote
                                and strengthen chess in the region. Equipped with extensive chess
                                knowledge and proven teaching strategies, I am committed to guiding
                                you on your own chess journey.
                            </p>
                        </div>
                    </div>
                ) : (
                    <Button variant="default" className="mt-4" asChild>
                        <Link href="/about">Learn More</Link>
                    </Button>
                )}
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
