import Section from "@/components/common/section";
import { GlowCircle } from "@/components/ui/glow-circle";
import { Typography } from "@/components/common/typography";

export default function Reasons() {
    return (
        <Section variant="light" className="z-10 w-full">
            <div className="z-10F">
                <Typography variant="h2">Why Choose Us?</Typography>
            </div>
            <GlowCircle size="lg" className="z-0 -top-1/2 -right-60" />
        </Section>
    );
}
