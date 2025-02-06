"use client";
import Header from "@/components/header/header";
import { Arrow } from "@/components/common/arrow";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { ScrollButton } from "@/components/common/scroll-button";
import { useModalStore } from "@/stores/use-modal-store";

export default function HomeHeader() {
    const onOpen = useModalStore((state) => state.onOpen);

    return (
        <Header
            badge="Custom Websites For Aussie Businesses"
            title={
                <>
                    Businesses with modern websites get{" "}
                    <span className="text-primary inline leading-none">30% more customers</span>
                </>
            }
            subTitle="With over 15 years of experience, we deliver affordable and high quality websites to help you get more customers."
            buttons={
                <>
                    <Button variant="dropShadow" onClick={() => onOpen()}>
                        Get Started
                    </Button>
                    <ScrollButton targetId="contact" variant="outline">
                        Contact Us <ArrowRightIcon className="w-4 h-4" />
                    </ScrollButton>
                </>
            }
            rightContent={
                <div className="w-full h-full flex-col md:flex-row flex justify-center md:justify-end items-center md:items-end relative">
                    {/* Image Shuffle */}
                    <div className="relative hidden md:block">
                        <Image src="/images/hero/home-hero.png" alt="Hero Image" width={650} height={650} className={`-mt-16`} />
                    </div>

                    {/* Mobile Image */}
                    <div className="flex flex-col md:hidden gap-4">
                        {/* <Image src="/images/hero-man.png" alt="Hero Image" width={650} height={650} className="" /> */}
                        <Image src="/images/hero-woman.png" alt="Hero Image" width={650} height={650} className="" />
                    </div>
                </div>
            }
            leftClassName="md:-mt-20"
            className="md:py-0"

        />
    );
}
