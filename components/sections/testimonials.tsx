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
        quote: "As one of Ben's past students, I had lessons during my senior years of schooling. Thanks to Ben's support, my knowledge of openings and mid-game planning improved substantially, resulting in greater success in my games. I'd highly recommend Ben to any player who wants to elevate their chess to the next level.",
        author: "Thomas Dixon",
        role: "Advanced Student",
        image: "/images/testimonials/thomas.png",
    },
    {
        quote: "I have been learning chess with Coach Ben Peach for over two years, and he’s helped me go from a beginner to being one of the top 10 QJ-rated players in my age group. Unlike most coaches, Ben doesn’t make me memorise openings or do tons of exercises. Instead, he teaches me how to think about positional chess, and he changes the lessons as I get better. He is always friendly and makes learning fun, which has kept me excited about chess while helping me improve a lot.",
        author: "Francis Fu",
        role: "Advanced Student",
        image: "/images/testimonials/francis.jpg",
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
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <div className="flex flex-col items-center justify-center gap-4">
                                    {testimonial.image && (
                                        <div className="w-[80px] h-[80px] relative">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.author}
                                                fill
                                                className="rounded-full object-cover object-center"
                                            />
                                        </div>
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
