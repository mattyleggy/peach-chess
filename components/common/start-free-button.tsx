"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function StartFreeButton() {
    // const onOpen = useModalStore((state) => state.onOpen);

    // const handleClick = () => {
    //     onOpen({ name: "Starter", price: "$150/month" });
    // };

    return (
        <Button asChild variant={"outlineForeground"} className="flex text-sm px-4 py-2">
            <Link href="/get-started">
                Let&apos;s Start <FaArrowRight />
            </Link>
        </Button>
    );
}
