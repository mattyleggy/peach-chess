import GetStartedSection from "@/components/sections/get-started-section";
import Testimonials from "@/components/sections/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Start Your Chess Journey - Peach Chess",
    description: "Begin your chess journey with Peach Chess. Available in Sydney, Melbourne, Brisbane, Perth, Adelaide, Darwin, Hobart, Canberra, Gold Coast, Sunshine Coast, and all major regions. Easy steps to start learning chess in Toowoomba or online. Book your first lesson, choose your preferred learning style, and start improving your game today.",
    openGraph: {
        title: "Start Your Chess Journey - Peach Chess",
        description: "Begin your chess journey with Peach Chess. Available in Sydney, Melbourne, Brisbane, Perth, Adelaide, Darwin, Hobart, Canberra, Gold Coast, Sunshine Coast, and all major regions. Easy steps to start learning chess in Toowoomba or online. Book your first lesson, choose your preferred learning style, and start improving your game today.",
        url: '/get-started',
        type: 'website',
    },
};

export default function GetStarted() {
    return (
        <>
            <GetStartedSection />
            <Testimonials />
        </>
    );
}
