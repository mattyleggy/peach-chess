import { Typography } from "@/components/common/typography";
import Image from "next/image";
import { PlayButton } from "@/components/common/play-button";

export function AboutMe() {
    return (
        <div className="relative">
            <div className="overflow-hidden rounded-3xl">
                <Image
                    src="/images/about-me.png"
                    alt="Chess pieces"
                    width={800}
                    height={400}
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white space-y-2 h-full w-full">
                    <Typography
                        variant="h3"
                        className="text-4xl uppercase tracking-widest font-normal"
                    >
                        About Me
                    </Typography>
                </div>
            </div>
            <div className="absolute -bottom-6 -right-6">
                <PlayButton />
            </div>
        </div>
    );
}
