"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect } from "react";
import { plans } from "@/lib/plans";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { submitGetStartedForm } from "@/actions/get-started";
import { phoneNumberSchema } from "@/lib/schemas";
import { useModalStore } from "@/stores/use-modal-store";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    phone: phoneNumberSchema,
    plan: z.string(),
    message: z.string().optional(),
});

export function GetStartedModal() {
    const { isOpen, selectedPlan, onClose } = useModalStore();
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            plan: selectedPlan?.name,
            message: "",
        },
    });

    useEffect(() => {
        if (isOpen && selectedPlan) {
            form.reset({
                name: "",
                email: "",
                phone: "",
                plan: selectedPlan.name,
                message: "",
            });
        }
    }, [isOpen, selectedPlan, form]);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const result = await submitGetStartedForm(values);

            if (result.success) {
                toast({
                    title: "Success",
                    description: "Thank you for your interest! We'll be in touch soon.",
                });
                onClose();
            } else {
                toast({
                    title: "Error",
                    description: "Failed to submit form. Please try again later.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast({
                title: "Error",
                description: "Something went wrong. Please try again later.",
                variant: "destructive",
            });
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[425px] max-h-[calc(100vh-40px)] w-[calc(100vw-40px)] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Plan Enquiry Form</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your name" {...field} />
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
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="your@email.com"
                                            type="email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your phone number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="plan"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Plan</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a plan">
                                                    {field.value &&
                                                        plans.find((p) => p.name === field.value)
                                                            ?.name}
                                                </SelectValue>
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {plans.map((plan) => (
                                                <SelectItem
                                                    key={plan.name}
                                                    value={plan.name}
                                                    defaultChecked={
                                                        selectedPlan?.name === plan.name
                                                    }
                                                >
                                                    <div className="flex flex-col">
                                                        <span className="font-medium">
                                                            {plan.name}
                                                        </span>
                                                        <span className="text-sm text-muted-foreground">
                                                            {plan.price} {plan.description}
                                                        </span>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message (Optional)</FormLabel>
                                    <FormControl>
                                        <Textarea 
                                            placeholder="Leave us a message..."
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">
                            Submit
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
