"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Section from "@/components/common/section";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem, FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/common/typography";
import { FaPaperPlane } from "react-icons/fa6";
import { submitContactForm } from "@/actions/contact";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect, useRef } from "react";
import { Highlight } from "../common/highlight";

interface ContactFormProps {
    variant?: "default" | "light" | "texture" | "textureLight";
}

// Form validation schema
const formSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    businessName: z.string().min(2, "Business name must be at least 2 characters"),
    contactNumber: z.string().regex(/^0[0-9]{9}$/, "Invalid Australian phone number"),
    message: z.string().optional(),
});

export const ContactForm = ({ variant = "default" }: ContactFormProps) => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const successMessageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isSubmitted && successMessageRef.current) {
            successMessageRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [isSubmitted]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            businessName: "",
            contactNumber: "",
            message: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setIsSubmitting(true);

            const result = await submitContactForm(values);

            if (result.success) {
                setIsSubmitted(true);
                form.reset();
            } else {
                toast({
                    title: "Error",
                    description: "Failed to send message. Please try again later.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error(error);
            toast({
                title: "Error",
                description: "Something went wrong. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section variant={variant}>
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-col lg:space-x-16 space-y-8 lg:space-y-0">
                    {/* Left Panel - Form */}
                    <div className="flex-1 space-y-6 z-20 flex flex-col justify-center items-center">
                        <div className="flex flex-col relative z-10 w-full justify-center items-center text-center space-y-4">
                            <Typography variant="h2" className="max-w-xl lg:text-7xl">
                                <Highlight>Ready</Highlight> for your chess{" "}
                                <span className="text-secondary leading-3">success</span>?
                            </Typography>
                            <p className="text-muted-foreground">Contact me below and I&apos;ll get back to you ASAP!</p>
                        </div>

                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6 z-20 max-w-3xl w-full"
                            >
                                <fieldset
                                    disabled={isSubmitted}
                                    className={isSubmitted ? "opacity-50" : ""}
                                >
                                    <div className="space-y-3">
                                        <FormField
                                            control={form.control}
                                            name="fullName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input placeholder="Full Name" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Email Address"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="contactNumber"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Contact Number (e.g. 04XX XXX XXX)"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Your Message Goes Here..."
                                                            className="resize-none"
                                                            rows={6}
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </fieldset>

                                <div className="text-center space-y-4">
                                    {isSubmitted ? (
                                        <>
                                            <Typography variant="h3" className="text-green-600">
                                                Thank You for Contacting Us!
                                            </Typography>
                                            <p className="text-gray-600">
                                                We have received your message and will get back to
                                                you shortly.
                                            </p>
                                            <Button
                                                onClick={() => setIsSubmitted(false)}
                                                variant="dropShadow"
                                            >
                                                Send Another Message
                                            </Button>
                                        </>
                                    ) : (
                                        <Button
                                            type="submit"                                            
                                            className="gap-2 py-8 px-12"
                                            variant="secondary"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                            <FaPaperPlane />
                                        </Button>
                                    )}
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </Section>
    );
};
