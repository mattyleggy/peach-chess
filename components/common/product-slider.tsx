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
import { IoMdStopwatch } from "react-icons/io";

export default function ProductSlider() {
    // State to track current positions and chess instances
    const [chessInstances, setChessInstances] = useState<Chess[]>([]);
    const [currentPositions, setCurrentPositions] = useState<string[]>([]);
    const [isAnimating, setIsAnimating] = useState<boolean[]>([]);

    const openings = [
        //white openings
        {
            title: "London System",
            description: "Construct a solid pawn formation with the potential to unleash winning tactical combinations",
            position: "rnbqkb1r/pp2pppp/5n2/2pp4/3P1B2/2P1P3/PP3PPP/RN1QKBNR b KQkq - 0 4",
            moves: ["d4", "d5", "Bf4", "Nf6", "e3", "c5", "c3"],
            orientation: "white",
        },        
        {
            title: "Queen's Gambit",
            description: "A classic opening where White offers a pawn to gain central control",
            position: "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2",
            moves: ["d4", "d5", "c4"],
            orientation: "white",
        },
        {
            title: "Smith-Morra gambit",
            description: "Sacrifice a pawn to accelerate development and generate excellent attacking chances",
            position: "rnbqkbnr/pp1ppppp/8/8/4P3/2N5/PP3PPP/R1BQKBNR b KQkq - 1 4",
            moves: ["e4", "c5", "d4", "cxd4", "c3", "dxc3", "Nxc3"],
            orientation: "white",

        },
        {
            title: "King's gambit",
            description: "Sacrifice a pawn to win the centre, gain a development lead and use your initiative to attack the Black King",
            position: "rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq - 0 2",
            moves: ["e4", "e5", "f4"],
            orientation: "white",
        },
        {
            title: "Evans gambit",
            description: "A romantic opening where White sacrifices a pawn to dominate the centre with tactical threats and powerful attacks",
            position: "r1bqk1nr/pppp1ppp/2n5/2b1p3/1PB1P3/5N2/P1PP1PPP/RNBQK2R b KQkq - 0 4",
            moves: ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5", "b4"],
            orientation: "white",
        },
        {
            title: "English Botvinnik System",
            description: "Seize control over the central light squares with the flexibility to attack everywhere, be it the Kingside, Queenside and/or in the centre!",
            position: "r1bqk2r/ppppbppp/2n2n2/4p3/2P1P3/2N3P1/PP1P1PBP/R1BQK1NR b KQkq - 0 5",
            moves: ["c4", "e5", "Nc3", "Nf6", "g3", "Nc6", "Bg2", "Be7", "e4"],
            orientation: "white",
        },
        
        //black openings
        {
            title: "Sicilian Defense",
            description: "A favourite of Bobby Fischer's and acclaimed by many as the best choice against 1.e4. Black fights for the centre with a complicated game ahead",
            position: "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            moves: ["e4", "c5"],
            orientation: "black",
        },
        {
            title: "Caro-Kann Defence",
            description: "The most solid opening against the 1.e4. Black secures the centre and looks to comfortably develop before launching a counterattack",
            position: "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
            moves: ["e4", "c6", "d4", "d5"],
            orientation: "black",
        },
        {
            title: "Scandinavian Defence",
            description: "A very rare opening that directly challenges White's central pawn control",
            position: "rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2",
            moves: ["e4", "d5"],
            orientation: "black",
        },
        {
            title: "King's Indian Defence",
            description: "A hypermodern opening where Black calmly develops and castles. Black allows White to place many pawns in the center but will look to destroy it later",
            position: "rnbq1rk1/ppp1ppbp/3p1np1/8/2PPP3/2N2N2/PP3PPP/R1BQKB1R w KQ - 1 6",
            moves: ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "Nf3", "O-O"],
            orientation: "black",
        },
        {
            title: "Semi-Slav",
            description: "Construct a strong pawn formation, complete development and look to activate the light-squared Bishop later.",
            position: "rnbqkb1r/pp3ppp/2p1pn2/3p4/2PP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5",
            moves: ["d4", "d5", "c4", "c6", "Nf3", "Nf6", "Nc3", "e6"],
            orientation: "black",
        },
        {
            title: "Dutch Defence",
            description: "A risky and ambitious opening that seeks imbalance, complications and excitement from the first move",
            position: "rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR w KQkq f6 0 2",
            moves: ["d4", "f5"],
            orientation: "black", 
        },

    ];

    // Initialize chess instances
    useEffect(() => {
        // Initialize with the final positions instead of starting positions
        const initialInstances = openings.map((opening) => {
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
        // Check if any animation is currently playing
        if (isAnimating.some(animating => animating)) return;
        
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
                        // Reset animation flag if move fails
                        const newAnimating = [...isAnimating];
                        newAnimating[index] = false;
                        setIsAnimating(newAnimating);
                        throw error;
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
                                        boardOrientation={opening.orientation as ('white' | 'black')}
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
                                    className={`mt-2 px-3 py-1 text-sm rounded-md ${
                                        isAnimating[index]
                                            ? "bg-primary text-primary-foreground" 
                                            : isAnimating.some(animating => animating)
                                                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    }`}
                                    disabled={isAnimating.some(animating => animating) && !isAnimating[index]}
                                >
                                    {isAnimating[index] 
                                        ? <div className="flex items-center gap-2"><IoMdStopwatch /> Playing... </div>
                                        : isAnimating.some(animating => animating) 
                                            ? <div className="flex items-center gap-2"><IoMdStopwatch /> Waiting...</div>
                                            : <div className="flex items-center gap-2"><FaPlay />Watch Opening</div>
                                    }
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
