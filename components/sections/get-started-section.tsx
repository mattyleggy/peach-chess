"use client"
import Image from "next/image";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Typography } from "../common/typography";
import { submitEnquiry } from "@/actions/enquiry";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

// Define Zod schema
const EnquirySchema = z.object({
    name: z.string().min(1, "Name is required"),
    phone: z.string().min(1, "Contact Number is required"),
    email: z.string().email("Invalid email address"),
    lessonType: z.string().min(1, "Lesson Type is required"),
});

export default function GetStartedSection() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [userName, setUserName] = useState("");

    async function handleEnquiry(formData: FormData) {
        setIsSubmitting(true);

        try {
            const rawFormData = {
                name: formData.get('name') as string,
                phone: formData.get('phone') as string,
                email: formData.get('email') as string,
                lessonType: formData.get('lessonType') as string,
            };

            const validationResult = EnquirySchema.safeParse(rawFormData);

            if (!validationResult.success) {
                console.error("Validation failed:", validationResult.error.flatten().fieldErrors);
                toast({
                    title: "Error",
                    description: "Please fill in all required fields correctly.",
                    variant: "destructive",
                });
                return;
            }

            const result = await submitEnquiry(validationResult.data);

            if (result.success) {
                setUserName(validationResult.data.name);
                setIsSubmitted(true);
                toast({
                    title: "Enquiry Submitted",
                    description: "Thank you for your interest! We'll contact you soon.",
                });
            } else {
                toast({
                    title: "Submission Failed",
                    description: "There was an error submitting your enquiry. Please try again.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error("Error submitting enquiry:", error);
            toast({
                title: "Unexpected Error",
                description: "An unexpected error occurred. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section className="h-full w-full grid md:grid-cols-2 items-center">
                <div className="relative h-full min-h-[calc(100vh-76px)] w-full order-2 lg:order-1">
                    <Image
                        src="/images/student-thinking.png"
                        alt="Chess student thinking"
                        className="object-cover w-full h-full"
                        fill
                    />
                    <div className="absolute bottom-8 left-8 right-8 bg-black/70 p-6 rounded-lg">
                        <blockquote className="text-white mb-4">
                            Every chess master was once a beginner.
                        </blockquote>
                        <div className="flex items-center gap-2">
                            <Image
                                src="/images/testimonials/irving-chernev.jpg"
                                alt="Irving Chernev"
                                width={32}
                                height={32}
                                className="rounded-full object-cover"
                            />
                            <span className="text-white">Irving Chernev</span>
                        </div>
                    </div>
                </div>

                <div className="p-6 order-1 lg:order-2">
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-8">
                            <Typography variant="h1" className="inline-block">
                                <span className="bg-emerald-400 px-2">Enquire</span> <span>Now!</span>
                            </Typography>
                            <p className="text-muted-foreground mt-2">
                                Contact me below and I&apos;ll get back to you ASAP!
                            </p>
                        </div>

                        {isSubmitted ? (
                            <div className="text-center py-8 space-y-4">
                                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto" />
                                <Typography variant="h2">Thank You!</Typography>
                                <p className="text-muted-foreground">
                                    Your enquiry has been submitted successfully. I'll be in touch with you soon to discuss your chess lessons.
                                </p>
                            </div>
                        ) : (
                            <form id="enquiry-form" action={handleEnquiry} className="space-y-4">
                                <Input name="name" type="text" placeholder="Name" className="w-full" required />
                                <Input name="phone" type="tel" placeholder="Contact Number" className="w-full" required />
                                <Input name="email" type="email" placeholder="Email Address" className="w-full" required />

                                <div className="">
                                    <Select name="lessonType" required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Lesson Type" />
                                        </SelectTrigger>
                                        <SelectContent>                                        
                                            <SelectItem value="group-beginner">Group - Beginner (Saturday 11-12pm)</SelectItem>
                                            <SelectItem value="group-intermediate">Group - Intermediate (Sunday 9:30-10:30am)</SelectItem>
                                            <SelectItem value="group-advanced">Group - Advanced (Sunday 11-12pm)</SelectItem>
                                            <SelectItem value="private-beginner">Private Lesson - Beginner</SelectItem>
                                            <SelectItem value="private-intermediate">Private Lesson - Intermediate</SelectItem>
                                            <SelectItem value="private-advanced">Private Lesson - Advanced</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <Button 
                                    type="submit" 
                                    className="w-full bg-emerald-400 hover:bg-emerald-500 text-black"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Submitting..." : "Register Your Interest"}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
    );
}

