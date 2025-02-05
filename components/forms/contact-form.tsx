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
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/common/typography";
import { FaPaperPlane } from "react-icons/fa6";
import { submitContactForm } from "@/actions/contact";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect, useRef } from "react";
import ImageShadow from "../common/image-shadow";

interface ContactFormProps {
    variant?: "default" | "light";
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
        <Section backgroundPosition="top" variant={variant}>
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
                    {/* Left Panel - Form */}
                    <div className="flex-1 space-y-6">
                        <div className="mb-8 space-y-6">
                            <Badge variant="secondary">Contact Us</Badge>
                            <Typography variant="h2" className="text-3xl md:text-4xl">
                                Let&apos;s Get In Touch
                            </Typography>
                        </div>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                                                    <FormLabel>
                                                        Full Name{" "}
                                                        <span className="text-red-500">*</span>
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Your full name"
                                                            {...field}
                                                        />
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
                                                    <FormLabel>
                                                        Email{" "}
                                                        <span className="text-red-500">*</span>
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="e.g. john.smith@example.com"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="businessName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Business Name{" "}
                                                        <span className="text-red-500">*</span>
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="e.g. My Business"
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
                                                    <FormLabel>
                                                        Contact Number{" "}
                                                        <span className="text-red-500">*</span>
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="e.g. 04XX XXX XXX"
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
                                                    <FormLabel>Message</FormLabel>
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
                                            size="lg"
                                            className="gap-2"
                                            variant="dropShadow"
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

                    {/* Right Panel - Image */}
                    <div className="relative h-[400px] lg:h-full w-full lg:w-auto lg:pr-4">
                        <ImageShadow 
                            src="/images/matty-portrait.jpg" 
                            alt="Contact Us"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
};
