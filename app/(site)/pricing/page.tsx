import { PricingSection } from "@/components/sections/pricing-section";
import { PricingPlans } from "@/components/sections/pricing-plans";

export const metadata = {
    title: "Pricing | Go Signal",
    description:
        "Explore our flexible pricing plans for professional websites. Starting at $150/month with $0 down payment. Perfect for tradies and health professionals in Brisbane.",
};

export default function PricingPage() {
    return (
        <>
            <PricingSection />
            <PricingPlans />
        </>
    );
} 