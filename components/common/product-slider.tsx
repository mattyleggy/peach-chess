'use client';

import { useState, useEffect } from "react";
import { Typography } from "./typography";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { FaPlay } from "react-icons/fa6";

export default function ProductSlider() {
    // State to track current positions and chess instances
    const [chessInstances, setChessInstances] = useState<Chess[]>([]);
    const [currentPositions, setCurrentPositions] = useState<string[]>([]);
    const [isAnimating, setIsAnimating] = useState<boolean[]>([]);

    const openings = [
        {
            title: "French Defense",
            description: "Knight Variation is a response to the French Defense where White develops the knight early",
            position: "rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2",
            moves: ["e4", "e6", "d4"], // Moves that lead to the position
        },
        {
            title: "Sicilian Defense",
            description: "A sharp opening where Black immediately fights for the center with the c-pawn",
            position: "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            moves: ["e4", "c5"],
        },
        {
            title: "King's Indian Defense",
            description: "A hypermodern opening where Black allows White to establish a central pawn mass",
            position: "rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
            moves: ["d4", "Nf6", "c4", "g6"],
        },
        {
            title: "Ruy Lopez",
            description: "One of the oldest and most popular openings, attacking Black's e5 pawn",
            position: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 3",
            moves: ["e4", "e5", "Nf3", "Nc6", "Bb5"],
        },
        {
            title: "Queen's Gambit",
            description: "A classic opening where White offers a pawn to gain central control",
            position: "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
            moves: ["d4", "d5", "c4"],
        },
    ];

    // Initialize chess instances
    useEffect(() => {
        // Initialize with the final positions instead of starting positions
        const initialInstances = openings.map((opening, idx) => {
            const chess = new Chess();
            chess.load(opening.position);
            return chess;
        });
        
        setChessInstances(initialInstances);
        setCurrentPositions(openings.map(opening => opening.position));
        setIsAnimating(openings.map(() => false));
    }, []);

    // Function to play the opening sequence for a specific index
    const playOpening = (index: number) => {
        if (isAnimating[index]) return;
        
        // Create a new array and set the specific index to true
        const newAnimating = [...isAnimating];
        newAnimating[index] = true;
        setIsAnimating(newAnimating);
        
        // Reset the board to starting position
        const chess = new Chess();
        const newInstances = [...chessInstances];
        newInstances[index] = chess;
        setChessInstances(newInstances);
        
        // Update the current position to starting position
        const newPositions = [...currentPositions];
        newPositions[index] = chess.fen();
        setCurrentPositions(newPositions);
        
        // Play the moves with a delay
        let moveIndex = 0;
        const playNextMove = () => {
            if (moveIndex < openings[index].moves.length) {
                setTimeout(() => {
                    try {
                        chess.move(openings[index].moves[moveIndex]);
                        
                        // Create a new array to update position after each move
                        const updatedPositions = [...currentPositions];
                        updatedPositions[index] = chess.fen();
                        setCurrentPositions(updatedPositions);
                        
                        moveIndex++;
                        playNextMove();
                    } catch (error) {
                        console.error("Invalid move:", openings[index].moves[moveIndex]);
                        // Reset animation flag if move fails
                        const newAnimating = [...isAnimating];
                        newAnimating[index] = false;
                        setIsAnimating(newAnimating);
                    }
                }, 800); // 800ms delay between moves
            } else {
                // Animation complete
                const newAnimating = [...isAnimating];
                newAnimating[index] = false;
                setIsAnimating(newAnimating);
            }
        };
        
        playNextMove();
    };

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
                                <div 
                                    style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}
                                    onClick={() => playOpening(index)}
                                >
                                    <Chessboard 
                                        position={currentPositions[index] || 'start'}
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
                                <button 
                                    onClick={() => playOpening(index)}
                                    className={`mt-2 px-3 py-1 text-sm rounded-md transition-colors ${
                                        isAnimating[index] 
                                            ? "bg-gray-300 text-gray-600 cursor-not-allowed" 
                                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    }`}
                                    disabled={isAnimating[index]}
                                >
                                    {isAnimating[index] ? "Playing..." : <div className="flex items-center gap-2"><FaPlay /> Watch Opening</div>}
                                </button>
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
