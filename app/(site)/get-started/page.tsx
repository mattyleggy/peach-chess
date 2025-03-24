import GetStartedSection from "@/components/sections/get-started-section";
import Testimonials from "@/components/sections/testimonials";

export const metadata = {
    title: "Get Started - Peach Chess",    
};

export default function GetStarted() {
    return (
        <>
            <GetStartedSection />
            <Testimonials />
        </>
    );
}
