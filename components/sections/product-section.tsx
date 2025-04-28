import ProductSlider from "../common/product-slider";
import Section from "../common/section";
import { Typography } from "../common/typography";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export default function ProductSection() {
    return (
        <Section variant="default">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full">
                <div className="flex flex-col relative z-10 w-full">
                    <Badge variant="default">Chess Openings</Badge>
                    <Typography variant="h2" className="max-w-xl">
                        Learn Chess Openings: From Beginner to Advanced
                    </Typography>
                    <p className="text-primary-foreground/80 mt-4">Here are some of my favourite chess openings</p>
                    <div className="w-36 py-6 md:py-10">
                        <Separator />
                    </div>
                </div>
                <div className="max-w-96 text-primary-foreground/80 text-left md:text-right md:pt-20 pb-20 md:pb-0">
                    From classic tactics to modern approaches, each opening is explained to help you
                    start every match with confidence and control.
                </div>
            </div>
            <ProductSlider />
        </Section>
    );
}
