import ProgressionSection from "@/components/sections/progression-section";
import ProductSection from "@/components/sections/product-section";
import BenefitsSection from "@/components/sections/benefits-section";
import { LessonStructure } from "@/components/sections/lesson-structure";
import Testimonials from "@/components/sections/testimonials";
import LessonTypes from "@/components/sections/lesson-types";

export const metadata = {
    title: "Lessons - Peach Chess",    
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
