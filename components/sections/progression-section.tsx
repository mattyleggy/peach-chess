import { ProgressionLine } from "../common/progression";
import Section from "../common/section";
import { Typography } from "../common/typography";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export default function ProgressionSection() {
    return (
        <Section className="relative" variant="texture">            
            <div className="flex flex-col relative z-10">
                <Badge variant="default">Learning Progression</Badge>
                <Typography variant="h2" className="max-w-lg">
                    Explore what you can learn at all levels
                </Typography>
                <div className="w-36 py-10">
                    <Separator />
                </div>
            </div>
            <div className="w-full md:-mt-52 relative z-10">
                <ProgressionLine />
            </div>
        </Section>
    );
}
