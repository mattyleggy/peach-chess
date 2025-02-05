"use client";
import Section from "@/components/common/section";
import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowCircle } from "@/components/ui/glow-circle";
import { plans } from "@/lib/plans";
import { useModalStore } from "@/stores/use-modal-store";

export function PricingPlans() {
    const onOpen = useModalStore((state) => state.onOpen);

    return (
        <div id="pricing" className="w-full">
            <Section variant="light" className="relative z-10">
                <div className="text-center space-y-4 mb-12">
                    <Badge variant="secondary">A Package Fit For Everyone</Badge>
                    <Typography variant="h2" className="max-w-3xl mx-auto">
                        We Have Exactly What You Need To Help Your Business Grow
                    </Typography>
                </div>

                <GlowCircle size="lg" className="absolute ml-72 mt-20 -z-10" />
                <GlowCircle size="lg" className="absolute -bottom-20 -right-20 -z-10" />

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {plans
                        .filter((plan) => plan.visibleOnPage)
                        .map((plan) => (
                            <div
                                key={plan.name}
                                className={cn("rounded-2xl relative z-10", "bg-white ")}
                            >
                                <div
                                    className={cn(
                                        "p-8 z-10 space-y-6 relative bg-white rounded-2xl shadow border-2",
                                        plan.popular ? "border-primary" : "border-black/10"
                                    )}
                                >
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{plan.icon}</span>
                                            <h3 className="text-xl font-semibold">{plan.name}</h3>
                                            {plan.popular && (
                                                <Badge className="ml-auto bg-primary text-white">
                                                    Most Popular
                                                </Badge>
                                            )}
                                        </div>

                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl font-bold">{plan.price}</span>
                                            <span className="text-2xl line-through text-gray-400">
                                                {plan.originalPrice}
                                            </span>
                                        </div>
                                        <p className="text-sm opacity-80">{plan.description}</p>
                                    </div>

                                    <Button
                                        className={cn("w-full")}
                                        onClick={() =>
                                            onOpen({ name: plan.name, price: plan.price })
                                        }
                                    >
                                        Get Started Now
                                    </Button>

                                    <ul className="space-y-4">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex gap-3 items-start">
                                                <Check className="w-5 h-5 shrink-0 mt-0.5" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                        {plan.optionalFeatures?.map((feature) => (
                                            <li
                                                key={feature.text}
                                                className="flex gap-3 items-start opacity-60"
                                            >
                                                <Plus className="w-5 h-5 shrink-0 mt-0.5" />
                                                <span className="text-sm">{feature.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {plan.popular && (
                                    <div className="absolute w-full h-full bg-primary rounded-2xl top-5 left-5 -z-10"></div>
                                )}
                            </div>
                        ))}
                </div>
            </Section>
        </div>
    );
}
