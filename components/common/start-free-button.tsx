"use client";
import { Button } from "@/components/ui/button";
import { useModalStore } from "@/stores/use-modal-store";
import { FaArrowRight } from "react-icons/fa6";

export default function StartFreeButton() {
    const onOpen = useModalStore((state) => state.onOpen);

    const handleClick = () => {
        onOpen({ name: "Starter", price: "$150/month" });
    };

    return (
        <Button variant={"outlineForeground"} onClick={handleClick} className="hidden md:flex text-sm px-4 py-2">
            Let&apos;s Start <FaArrowRight />
        </Button>

    );
}
