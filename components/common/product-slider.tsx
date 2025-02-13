import { Typography } from "./typography";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

export default function ProductSlider() {
    const openings = [
        {
            title: "French Defense",
            description:
                "Knight Variation is a response to the French Defense where White develops the knight early",
            image: "/images/openings/chess-opening.png",
        },
        {
            title: "French Defense",
            description:
                "Knight Variation is a response to the French Defense where White develops the knight early",
            image: "/images/openings/chess-opening.png",
        },
        {
            title: "French Defense",
            description:
                "Knight Variation is a response to the French Defense where White develops the knight early",
            image: "/images/openings/chess-opening.png",
        },
        {
            title: "French Defense",
            description:
                "Knight Variation is a response to the French Defense where White develops the knight early",
            image: "/images/openings/chess-opening.png",
        },
        {
            title: "French Defense",
            description:
                "Knight Variation is a response to the French Defense where White develops the knight early",
            image: "/images/openings/chess-opening.png",
        },
    ];

    return (
        <Carousel
            opts={{
                align: "start",
                loop: false,
            }}
            className="w-full relative"
        >
            <CarouselContent className="-ml-2 md:-ml-4">
                {openings.map((opening, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <div className="overflow-hidden rounded-t-md rounded-tl-md">
                                <Image
                                    src={opening.image}
                                    alt={opening.title}
                                    className="w-full object-cover"
                                    width={800}
                                    height={800}
                                />
                            </div> 
                            <div className="p-4 bg-white text-black rounded-b-md rounded-bl-md">
                                <Typography variant="h3" className="mb-2">
                                    {opening.title}
                                </Typography>
                                <p className="text-sm text-muted-foreground">{opening.description}</p>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="absolute -top-10 right-16">
                <CarouselPrevious />
                <CarouselNext />
            </div>
        </Carousel>
    );
}
