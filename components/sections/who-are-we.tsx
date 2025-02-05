import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import Section from "@/components/common/section";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

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
        <Section backgroundPosition="right" className="space-y-6">
            <Badge variant="secondary">About Us</Badge>
            <Typography variant="h2">Who Are We?</Typography>

            <div className="flex flex-col-reverse md:flex-row justify-center items-center md:space-x-10 space-y-reverse space-y-10 md:space-y-0 w-full">
                {/* Left Column - Text Content */}
                <div className="space-y-6 w-full md:w-1/2">
                    <div className="space-y-6 text-lg text-muted-foreground">
                        <p>
                            I&apos;m Matthew, a Brissie local. I started Go Signal Websites with a goal to
                            make websites affordable and help businesses & contractors grow their
                            business and gain leads.
                        </p>

                        <p>
                            I have over 15 years experience creating websites for businesses and
                            noticed a lot of tradies don&apos;t have the time to worry about their
                            websites or leads.
                        </p>

                        <p>
                            Just as you&apos;re trusted in your business, you can trust me to provide the
                            exact result you need. I&apos;m here to listen to how you want to portray
                            your business and here to help whenever you need it.
                        </p>
                    </div>
                </div>

                {/* Right Column - Team Members */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10 pt-28">
                    <TeamMember
                        image="/images/matty-john.jpg"
                        name="Matty John"
                        role="Owner, Developer & Designer"
                        location="Brisbane, Australia"
                    />
                    <TeamMember
                        image="/images/jenn.png"
                        name="Jennifer Lisa"
                        role="Senior Marketing Consultant"
                        location="Brisbane, Australia"
                    />
                </div>
            </div>
        </Section>
    );
}
