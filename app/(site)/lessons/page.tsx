import ProgressionSection from "@/components/sections/progression-section";
import ProductSection from "@/components/sections/product-section";
import BenefitsSection from "@/components/sections/benefits-section";
import { LessonStructure } from "@/components/sections/lesson-structure";
import Testimonials from "@/components/sections/testimonials";
import LessonTypes from "@/components/sections/lesson-types";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Chess Lessons - Peach Chess",
    description: "Discover our comprehensive chess lessons in Toowoomba and online across Australia. Available in Sydney, Melbourne, Brisbane, Perth, Adelaide, Darwin, Hobart, Canberra, Gold Coast, Sunshine Coast, and all major regions. From beginner to advanced levels, our structured curriculum covers openings, tactics, strategy, and endgames. Book your personalized chess coaching session today.",
    openGraph: {
        title: "Chess Lessons - Peach Chess",
        description: "Discover our comprehensive chess lessons in Toowoomba and online across Australia. Available in Sydney, Melbourne, Brisbane, Perth, Adelaide, Darwin, Hobart, Canberra, Gold Coast, Sunshine Coast, and all major regions. From beginner to advanced levels, our structured curriculum covers openings, tactics, strategy, and endgames. Book your personalized chess coaching session today.",
        url: '/lessons',
        type: 'website',
    },
};

export default function LessonsPage() {
    return (
        <>
            <LessonTypes />
            <ProgressionSection />
            <ProductSection />
            <BenefitsSection />
            <LessonStructure />
            <Testimonials />
        </>
    );
}
