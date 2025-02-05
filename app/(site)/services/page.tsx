import BackgroundGradient from "@/components/header/background-gradient";
import OurServices from "@/components/sections/our-services";
import ServiceFeatures from "@/components/sections/service-features";
import ServiceProcess from "@/components/sections/service-process";
import ServicesHero from "@/components/hero/services-hero";

export const metadata = {
    title: "Our Services | Go Signal",
    description:
        "Discover our professional web design and development services for tradies and health professionals in Brisbane.",
};

export default function ServicesPage() {
    return (
        <>
            <BackgroundGradient />
            <ServicesHero />
            <OurServices />
            <ServiceProcess />
            <ServiceFeatures />
        </>
    );
} 