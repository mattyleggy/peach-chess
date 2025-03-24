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

export const metadata = {
    title: "Home - Peach Chess",    
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
