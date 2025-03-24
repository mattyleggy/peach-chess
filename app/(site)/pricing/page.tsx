import { PricingPlans } from "@/components/sections/pricing-plans";
import Testimonials from "@/components/sections/testimonials";

export const metadata = {
    title: "Pricing - Peach Chess",    
};

export default function PricingPage() {
    return (
        <>
            <PricingPlans />
            <Testimonials />
        </>
    );
} 