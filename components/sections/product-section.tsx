import ProductSlider from "../common/product-slider";
import Section from "../common/section";
import { Typography } from "../common/typography";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export default function ProductSection() {
    return (
        <Section variant="default">
            <div className="flex flex-col relative z-10">
                <Badge variant="default">Chess Openings</Badge>
                <Typography variant="h2" className="max-w-xl">
                    Learn Chess Openings: From Beginner to Advanced
                </Typography>
                <div className="w-36 py-10">
                    <Separator />
                </div>
            </div>
            <ProductSlider />
        </Section>
    );
}
