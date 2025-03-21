'use client';

import { Typography } from "./typography";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Chessboard } from "react-chessboard";

export default function ProductSlider() {
    const openings = [
        {
            title: "French Defense",
            description: "Knight Variation is a response to the French Defense where White develops the knight early",
            position: "rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
        },
        {
            title: "Sicilian Defense",
            description: "A sharp opening where Black immediately fights for the center with the c-pawn",
            position: "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
        },
        {
            title: "King's Indian Defense",
            description: "A hypermodern opening where Black allows White to establish a central pawn mass",
            position: "rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
        },
        {
            title: "Ruy Lopez",
            description: "One of the oldest and most popular openings, attacking Black's e5 pawn",
            position: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 3",
        },
        {
            title: "Queen's Gambit",
            description: "A classic opening where White offers a pawn to gain central control",
            position: "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
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
                        <div className="p-2">
                            <div className="overflow-hidden rounded-t-md rounded-tl-md">
                                <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
                                    <Chessboard 
                                        position={opening.position}
                                        areArrowsAllowed={false}
                                        arePiecesDraggable={false}
                                        customDarkSquareStyle={{ backgroundColor: '#59bc90' }}
                                        customLightSquareStyle={{ backgroundColor: '#eae0e1' }}
                                    />
                                </div>
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
