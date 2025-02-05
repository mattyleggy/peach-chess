"use client";
import { Button } from "@/components/ui/button";
import { useModalStore } from "@/stores/use-modal-store";

export default function StartFreeButton() {
    const onOpen = useModalStore((state) => state.onOpen);

    const handleClick = () => {
        onOpen({ name: "Starter", price: "$150/month" });
    };

    return (
        <Button onClick={handleClick} className="hidden lg:block text-sm px-4 py-2">
            Start For Free
        </Button>
    );
}
