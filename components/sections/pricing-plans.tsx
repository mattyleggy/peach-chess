"use client";
import Section from "@/components/common/section";
import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { plans } from "@/lib/plans";
import { useModalStore } from "@/stores/use-modal-store";
import { Separator } from "../ui/separator";

export function PricingPlans() {
    const onOpen = useModalStore((state) => state.onOpen);

    return (
        <div id="pricing" className="w-full">
            <Section variant="light" className="relative z-10 items-center">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <Badge>Lesson Pricing</Badge>
                    <Typography variant="h2" className="max-w-xl mx-auto">
                        Choose a lesson plan that works for you
                    </Typography>
                    <div className="w-36 py-10">
                        <Separator />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {plans
                        .filter((plan) => plan.visibleOnPage)
                        .map((plan) => (
                            <div
                                key={plan.name}
                                className={cn("rounded-2xl relative z-10 text-center")}
                            >
                                <div
                                    className={cn(
                                        "z-10 space-y-6 relative rounded-2xl shadow border-2 flex flex-col justify-center items-center",
                                        plan.popular
                                            ? "bg-primary/90 text-primary-foreground border-primary"
                                            : "bg-white "
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "p-8 rounded-t-2xl rounded-tl-2xl w-full justify-center items-center border-b-2 border-primary/10",
                                            plan.popular ? "bg-primary text-primary-foreground" : ""
                                        )}
                                    >
                                        <div className="flex gap-3 text-center justify-center items-center">
                                            {/* {plan.icon && (
                                                <span className="text-2xl">{plan.icon}</span>
                                            )} */}
                                            <h3 className="text-xl font-semibold text-center">
                                                {plan.name}
                                            </h3>
                                            {/* {plan.popular && (
                                                <Badge className="ml-auto bg-primary text-white">
                                                    Most Popular
                                                </Badge>
                                            )} */}
                                        </div>

                                        <div className="flex items-center justify-center gap-2 mt-4">
                                            <span className="text-4xl font-bold">{plan.price}</span>
                                            <span className="text-2xl line-through text-gray-400">
                                                {plan.originalPrice}
                                            </span>
                                        </div>
                                        <p className="text-sm opacity-80">{plan.description}</p>
                                    </div>
                                    <div className="px-12">
                                        <ul className="flex flex-col text-center">
                                            {plan.features.map((feature) => (
                                                <li
                                                    key={feature}
                                                    className="flex justify-center items-center text-center border-b-[1px] border-primary/20 py-4"
                                                >
                                                    <span className="text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="pb-10">
                                        <Button
                                            variant={plan.popular ? "secondary" : "outlineDark"}
                                            className={cn("")}
                                            asChild
                                        >
                                            <a href={`/get-started?plan=${encodeURIComponent(plan.key)}`}>
                                                Get Started
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                                {/* {plan.popular && (
                                    <div className="absolute w-full h-full bg-primary rounded-2xl top-5 left-5 -z-10"></div>
                                )} */}
                            </div>
                        ))}
                </div>
            </Section>
        </div>
    );
}
