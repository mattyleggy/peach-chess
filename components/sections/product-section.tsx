import ProductSlider from "../common/product-slider";
import Section from "../common/section";
import { Typography } from "../common/typography";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export default function ProductSection() {
    return (
        <Section variant="default">
            <div className="flex flex-row gap-10 w-full">
                <div className="flex flex-col relative z-10 w-full">
                    <Badge variant="default">Chess Openings</Badge>
                    <Typography variant="h2" className="max-w-xl">
                        Learn Chess Openings: From Beginner to Advanced
                    </Typography>
                    <div className="w-36 py-10">
                        <Separator />
                    </div>
                </div>
                <div className="max-w-96 text-primary-foreground/80 text-right pt-20">
                    From classic tactics to modern approaches, each opening is explained to help you
                    start every match with confidence and control.
                </div>
            </div>
            <ProductSlider />
        </Section>
    );
}
