"use client";

import { FaArrowRight, FaPlay } from "react-icons/fa6";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, useRef } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";
import Link from "next/link";

export const PlayButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
        if (open && videoRef.current) {
            videoRef.current.play();
        } else if (!open && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <>
            <div
                // onClick={() => handleOpenChange(true)}
                className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-secondary flex items-center justify-center cursor-pointer hover:bg-primary transition-colors border-8 border-white"
            >                
                <FaArrowRight className="w-8 h-8 text-white" />                
                {/* <FaPlay className="w-8 h-8 text-white" /> */}
            </div>

            <Dialog open={isOpen} onOpenChange={handleOpenChange}>
                <DialogTitle></DialogTitle>
                <DialogContent className="h-full max-h-[90vh] w-full max-w-4xl ">
                    <video ref={videoRef} controls className="h-full aspect-video bg-black">
                        <source src="video/bp.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </DialogContent>
            </Dialog>
        </>
    );
};
