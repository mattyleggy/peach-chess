import WhoAreWe from "@/components/sections/who-are-we";
import OurProcess from "@/components/sections/our-process";
import OurValues from "@/components/sections/our-values";
import AboutHero from "@/components/hero/about-hero";
import BackgroundGradient from "@/components/header/background-gradient";

export const metadata = {
    title: "About Us | Go Signal",
    description:
        "Learn more about Go Signal, your trusted partner in creating professional websites for tradies and health professionals in Brisbane.",
};

export default function AboutPage() {
    return (
        <>
            <BackgroundGradient />
            <AboutHero />
            <OurValues />            
            <WhoAreWe />            
            <OurProcess />
        </>
    );
}
