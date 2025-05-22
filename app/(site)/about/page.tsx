import WhoAreWe from "@/components/sections/who-are-we";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me - Peach Chess",
    description: "Meet your chess coach in Toowoomba, Queensland and online remotely all around Australia (Brisbane, Sydney, Melbourne, Gold Coast, Adelaide, Perth, Darwin, Sunshine Coast, Ipswich, Toowoomba). Learn about my chess journey, teaching philosophy, and how I can help you improve your game.",
    openGraph: {
        title: "About Me - Peach Chess",
        description: "Meet your chess coach in Toowoomba, Queensland and online remotely all around Australia (Brisbane, Sydney, Melbourne, Gold Coast, Adelaide, Perth, Darwin, Sunshine Coast, Ipswich, Toowoomba). Learn about my chess journey, teaching philosophy, and how I can help you improve your game.",
        url: '/about',
        type: 'profile',
    },
};

export default function AboutPage() {
    return (
        <>
            <WhoAreWe detailed={true} />
        </>
    );
}
