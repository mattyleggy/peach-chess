import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import Section from "@/components/common/section";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Highlight } from "../common/highlight";
import { Separator } from "../ui/separator";
import { Statistics } from "../common/statistics";
import { AboutMe } from "../common/about-me";
import { Achievements } from "../common/achievements";
import { Button } from "../ui/button";

interface TeamMemberProps {
    image: string;
    name: string;
    role: string;
    location: string;
}

function TeamMember({ image, name, role, location }: TeamMemberProps) {
    return (
        <div className="bg-white rounded-3xl p-8 shadow-lg space-y-4 relative mb-24 md:mb-0">
            <div className="relative w-48 h-16 mx-auto">
                <div className="absolute h-48 w-48 -translate-y-2/3 rounded-full p-4 bg-primary/20">
                    <Image
                        src={image}
                        alt={name}
                        width={160}
                        height={160}
                        className="rounded-full relative z-10 bg-primary"
                    />
                </div>
            </div>

            <div className="text-center space-y-4">
                <Typography variant="h3">{name}</Typography>
                <p className="text-muted-foreground text-sm">{role}</p>
                <p className="font-medium">{location}</p>
            </div>

            <div className="flex justify-center gap-4 pt-2">
                <a href="#" className="text-primary hover:text-primary/80">
                    <FaFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                    <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                    <FaTwitter className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
}

export default function WhoAreWe() {
    return (
        <Section variant="light" backgroundPosition="right" className="space-y-12">
            <div>
                <Badge variant="default">What am I?</Badge>
                <Typography variant="h2">
                    Ben Peach{" "}
                    <span className="text-muted-foreground font-normal">Toowoomba, QLD</span>
                </Typography>
                <p className="text-muted-foreground text-xl">
                    I am a dedicated professional educator with a{" "}
                    <Highlight variant="p">degree in primary education</Highlight> and over a decade
                    of experience as a chess coach and competitor.
                </p>
                <Button variant="default" className="mt-4">Learn More</Button>
            </div>
            <div className="w-36">
                <Separator />
            </div>
            <div className="grid md:grid-cols-6 gap-8 w-full">
                <div className="md:col-span-2">
                    <Statistics />
                </div>
                <div className="md:col-span-4">
                    <AboutMe />
                </div>
            </div>
            <Achievements />
        </Section>
    );
}
