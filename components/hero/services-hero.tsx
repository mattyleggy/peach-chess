"use client";
import Header from "@/components/header/header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Arrow } from "../common/arrow";
import { WaveBackground } from "../common/wave-background";
import { useModalStore } from "@/stores/use-modal-store";

export default function ServicesHero() {
    const onOpen = useModalStore((state) => state.onOpen);

    return (
        <div className="relative pb-10">
            <WaveBackground className="absolute top-1/3 right-10 w-3/12 h-auto opacity-50 -z-10" />
            <Header
                badge="Professional Web Services"
                title={
                    <>
                        Expert Web Solutions for{" "}
                        <span className="text-primary inline leading-none">Australian Businesses</span>
                    </>
                }
                subTitle="From custom website design to ongoing maintenance, we provide comprehensive digital solutions tailored to your business needs."
                buttons={
                    <>
                        <Button variant="outline" onClick={() => onOpen()}>
                            Get a Quote <ArrowRight className="w-4 h-4" />
                        </Button>
                    </>
                }
                rightContent={
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Desktop Arrow */}
                        <Arrow className="absolute -left-10 top-10 hidden md:block" delay={0} rotation={120} />
                        <Image
                            src="/images/hero/services.png"
                            alt="Web Services Illustration"
                            width={600}
                            height={600}
                            className="object-contain"
                        />
                    </div>
                }                
            />
        </div>
    );
} 