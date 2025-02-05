"use client";

import { Typography } from "@/components/common/typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Section from "@/components/common/section";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { submitCallbackForm } from "@/actions/callback";
import { useState } from "react";
import { phoneNumberSchema } from "@/lib/schemas";

const formSchema = z.object({
    contactNumber: phoneNumberSchema,
});

interface CallToActionProps {
    overlapsFooter?: boolean;
}

export function CallToAction({ overlapsFooter = false }: CallToActionProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            contactNumber: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setIsSubmitting(true);
            const result = await submitCallbackForm(values);

            if (result.success) {
                setIsSuccess(true);
                form.reset();
            }
        } catch (error) {
            console.error("Failed to submit form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section
            className={cn(
                "bg-primary text-white relative  md:rounded-3xl",
                "bg-[url('/images/spirals.png')] bg-cover bg-center bg-no-repeat",
                overlapsFooter && "-mb-32 z-10"
            )}
        >
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <Typography variant="h2" className="text-white">
                    Request A Call Back
                </Typography>

                <p className="text-white/80 max-w-2xl mx-auto">
                    Leave your phone number and we&apos;ll call you back ASAP to discuss how we can help grow your business.
                </p>

                {isSuccess ? (
                    <div className="bg-white/10 rounded-lg p-6 max-w-xl mx-auto">
                        <Typography variant="h3" className="text-white mb-2">
                            Thank You!
                        </Typography>
                        <p className="text-white/80 mb-4">
                            We&apos;ve received your request and will call you back shortly.
                        </p>
                        <Button
                            variant="secondary"
                            className="bg-white text-primary hover:bg-white/90"
                            onClick={() => setIsSuccess(false)}
                        >
                            Request Another Call
                        </Button>
                    </div>
                ) : (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl mx-auto">
                            <div className="flex flex-col md:flex-row gap-4">
                                <FormField
                                    control={form.control}
                                    name="contactNumber"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormControl>
                                                <Input
                                                    placeholder="Contact Number"
                                                    className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                                                    disabled={isSubmitting}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-left text-white/80" />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    variant="secondary"
                                    className="bg-white text-primary hover:bg-white/90 px-8"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Requesting..." : "Request"}
                                </Button>
                            </div>
                        </form>
                    </Form>
                )}
            </div>
        </Section>
    );
}
