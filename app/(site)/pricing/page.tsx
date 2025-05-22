import { PricingPlans } from "@/components/sections/pricing-plans";
import Testimonials from "@/components/sections/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Chess Lesson Pricing - Peach Chess",
    description: "View our competitive chess lesson pricing in Toowoomba and online across Australia. Available in Sydney, Melbourne, Brisbane, Perth, Adelaide, Darwin, Hobart, Canberra, Gold Coast, Sunshine Coast, and all major regions. Flexible packages available for individual and group lessons, with options for all skill levels. Start your chess journey with affordable, high-quality coaching.",
    openGraph: {
        title: "Chess Lesson Pricing - Peach Chess",
        description: "View our competitive chess lesson pricing in Toowoomba and online across Australia. Available in Sydney, Melbourne, Brisbane, Perth, Adelaide, Darwin, Hobart, Canberra, Gold Coast, Sunshine Coast, and all major regions. Flexible packages available for individual and group lessons, with options for all skill levels. Start your chess journey with affordable, high-quality coaching.",
        url: '/pricing',
        type: 'website',
    },
};

export default function PricingPage() {
    return (
        <>
            <PricingPlans />
            <Testimonials />
        </>
    );
} 