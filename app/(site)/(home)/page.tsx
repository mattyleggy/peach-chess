import HomeHeader from "../../../components/hero/home-hero";
import BackgroundGradient from "@/components/header/background-gradient";
import KeyFeatures from "../../../components/sections/key-features";
import { ReasonsToChooseUs } from "../../../components/sections/reasons-to-choose-us";
import { PricingSection } from "../../../components/sections/pricing-section";
import { PricingPlans } from "../../../components/sections/pricing-plans";
import StandOut from "../../../components/sections/stand-out";
import WhoAreWe from "../../../components/sections/who-are-we";
import FAQ from "../../../components/sections/faq";
import { CaseStudies } from "@/components/sections/case-studies";
import ProgressionSection from "@/components/sections/progression-section";
import ProductSection from "@/components/sections/product-section";
import BenefitsSection from "@/components/sections/benefits-section";
import { LessonStructure } from "@/components/sections/lesson-structure";
import Testimonials from "@/components/sections/testimonials";

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
