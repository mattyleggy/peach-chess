import HomeHeader from "../../../components/hero/home-hero";
import BackgroundGradient from "@/components/header/background-gradient";
import { PricingPlans } from "../../../components/sections/pricing-plans";
import WhoAreWe from "../../../components/sections/who-are-we";
import FAQ from "../../../components/sections/faq";
import ProgressionSection from "@/components/sections/progression-section";
import ProductSection from "@/components/sections/product-section";
import BenefitsSection from "@/components/sections/benefits-section";
import { LessonStructure } from "@/components/sections/lesson-structure";
import Testimonials from "@/components/sections/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home - Peach Chess",
    description: "Welcome to Peach Chess - Your premier chess coaching service in Toowoomba and across Australia. Available in Sydney, Melbourne, Brisbane, Perth, Adelaide, Darwin, Hobart, Canberra, Gold Coast, Sunshine Coast, and all major regions. Offering personalized chess lessons for all skill levels, from beginners to advanced players. Learn chess strategies, improve your game, and join our community of chess enthusiasts.",
    openGraph: {
        title: "Home - Peach Chess",
        description: "Welcome to Peach Chess - Your premier chess coaching service in Toowoomba and across Australia. Available in Sydney, Melbourne, Brisbane, Perth, Adelaide, Darwin, Hobart, Canberra, Gold Coast, Sunshine Coast, and all major regions. Offering personalized chess lessons for all skill levels, from beginners to advanced players. Learn chess strategies, improve your game, and join our community of chess enthusiasts.",
        url: '/',
        type: 'website',
    },
};

export default function Home() {
    return (
        <>
            <BackgroundGradient />
            <HomeHeader />
            <WhoAreWe />
            <ProgressionSection />
            <ProductSection />
            <PricingPlans />
            <BenefitsSection />
            <LessonStructure />
            <FAQ />
            <Testimonials />
        </>
    );
}
