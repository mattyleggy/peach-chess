import Image from "next/image";
import Section from "../common/section";
import { Typography } from "../common/typography";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
    {
        quote: "I'm so impressed by your dedication to learning. The lessons have helped me improve significantly.",
        author: "Matthew Lord",
        role: "Beginner Group Lesson",
        image: "/images/testimonials/matthew.png",
    },
    {
        quote: "The structured approach to learning chess has made complex concepts much easier to understand.",
        author: "Sarah Chen",
        role: "Intermediate Student",
        image: "/images/testimonials/sarah.png",
    },
    {
        quote: "Ben's teaching style is excellent. He breaks down advanced strategies into manageable pieces.",
        author: "James Wilson",
        role: "Advanced Player",
        image: "/images/testimonials/james.png",
    },
];

export default function Testimonials() {
    return (
        <Section variant="texture" className="relative items-center justify-center text-center">
            <div className="flex flex-col  items-center justify-center relative z-10 text-center">
                <Badge variant="default">Student Testimonials</Badge>
                <Typography variant="h2" className="max-w-lg">
                    Happy Words From Happy Students
                </Typography>
                <div className="w-36 py-10">
                    <Separator />
                </div>
            </div>

            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full relative flex flex-col items-center justify-center"
            >
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="basis-full">
                            <div className="p-6 rounded-3xl space-y-6">
                                <p className="text-primary-foreground/80 text-lg italic">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex flex-col items-center justify-center gap-4">
                                    {testimonial.image && (
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            width={60}
                                            height={60}
                                            className="rounded-full"
                                        />
                                    )}
                                    <div>
                                        <Typography variant="h3" className="text-white">
                                            {testimonial.author}
                                        </Typography>
                                        <p className="text-primary-foreground/60">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="relative w-0 mt-10">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </Section>
    );
}
