import Image from "next/image";

export default function ImageShadow({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="relative w-fit h-fit">            
            <div className="absolute h-full w-full bg-primary top-5 left-5 rounded-[300px] rounded-b-3xl" />
            <Image
                src={src}
                alt={alt}
                width={500}
                height={100}
                className="relative rounded-[300px] rounded-b-3xl z-10"
            />
        </div>
    );
}
