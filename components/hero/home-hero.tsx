"use client";
import Header from "@/components/header/header";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import { ScrollButton } from "@/components/common/scroll-button";
import { useModalStore } from "@/stores/use-modal-store";
import { Highlight } from "@/components/common/highlight";

export default function HomeHeader() {
    const onOpen = useModalStore((state) => state.onOpen);

    return (
        <Header
            badge="Online & Group Lessons"
            title={
                <div className="">
                    <div className="w-full md:w-[700px] z-10 leading-none">
                        <Highlight>Learn</Highlight> Chess with Ben <Highlight>Peach</Highlight>
                    </div>
                </div>
            }
            subTitle={<div>With over 10 years of coaching experience and a <span className="font-bold">degree in primary education</span>, I am committed to helping you reach your full potential in chess. Whether you&apos;re a beginner or aiming for competitive success, I am here to help!</div>}
            buttons={
                <>
                    <Button variant="secondary" onClick={() => onOpen()}>
                        Get Started
                    </Button>
                    <ScrollButton targetId="contact" variant="outline">
                        Contact Us <ArrowDownIcon className="w-4 h-4" />
                    </ScrollButton>
                </>
            }
            rightContent={
                <div className="w-full h-full flex-col md:flex-row flex justify-center md:justify-end items-center md:items-end relative">
                    {/* Image Shuffle */}
                    <div className="relative block">
                        <Image
                            src="/images/hero/home-hero.png"
                            alt="Hero Image"
                            width={650}
                            height={650}
                            className=""
                        />
                    </div>
                </div>
            }
            leftClassName=""
            className=""
        />
    );
}
