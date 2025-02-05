"use client";
import Header from "@/components/header/header";
import { WaveBackground } from "../common/wave-background";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { GiAustralia } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import { Arrow } from "../common/arrow";
import { ScrollButton } from "../common/scroll-button";

export default function AboutHero() {
    return (
        <div className="relative">
            <WaveBackground className="absolute top-1/3 right-10 w-3/12 h-auto opacity-50 -z-10" />
            <Header
                badge="About Go Signal"
                title="Crafting Digital Excellence for over 15+ Years"
                subTitle="With over 15+ years experience, we've been transforming how businesses connect with their customers online. Based in Brisbane, we combine local insight with technical expertise to deliver websites that drive real business growth."
                rightContent={
                    <div className="relative w-full h-full flex items-center justify-center">
                        <Arrow
                            className="absolute -left-10 top-10 hidden md:block"
                            delay={0}
                            rotation={120}
                        />
                        <Image
                            src="/images/hero/me-about-hero.png"
                            alt="Go Signal Team"
                            width={500}
                            height={500}
                            className="object-contain"
                        />
                    </div>
                }
                buttons={
                    <>
                        <ScrollButton targetId="contact" variant="dropShadow">
                            Get In Touch <ArrowDown className="w-4 h-4" />
                        </ScrollButton>
                    </>
                }
                stats={
                    <div className="flex gap-8 pt-4">
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <FaCheck className="text-primary" />
                            </div>
                            <div className="font-medium">
                                <div>15+ Years</div>
                                <div className="text-sm text-muted-foreground">Experience</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <GiAustralia className="text-primary" />
                            </div>
                            <div className="font-medium">
                                <div>Australian Owned</div>
                                <div className="text-sm text-muted-foreground">&amp; Operated</div>
                            </div>
                        </div>
                    </div>
                }
                className="md:py-0"
            />
        </div>
    );
}
