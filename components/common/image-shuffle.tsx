import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ImageShuffle() {
    const imageStyles = "rounded-lg";
    const images = [
        { src: "/images/portfolio/painting.png", alt: "Hero Image" },
        { src: "/images/portfolio/roofing.png", alt: "Hero Image" },
        { src: "/images/portfolio/saas.png", alt: "Hero Image" },
    ];

    return (
        <>
            {/* Desktop layout */}
            <div className="relative w-[540px] h-[490px] hidden md:block">
                <Image src="/images/portfolio/painting.png" alt="Hero Image" width={250} height={250} className={`${imageStyles} absolute top-0 left-[15%]`} />
                <Image src="/images/portfolio/chess.png" alt="Hero Image" width={250} height={250} className={`${imageStyles} absolute top-[35%] left-[50%]`} />
                <Image src="/images/portfolio/roofing.png" alt="Hero Image" width={250} height={250} className={`${imageStyles} absolute bottom-5 left-10`} />
            </div>

            {/* Mobile carousel */}
            <div className="md:hidden w-full mx-auto px-12">
                {/* <Typography variant="h3" className="text-center mb-4">Previous Projects</Typography> */}
                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={1000}
                                        height={1000}
                                        className={imageStyles}
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    );
}
