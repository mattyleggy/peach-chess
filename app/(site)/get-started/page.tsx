"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Typography } from "@/components/common/typography";
import Image from "next/image";
import Testimonials from "@/components/sections/testimonials";

export default function GetStarted() {
    return (
        <>
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
                    <div className="mb-8">
                        <Typography variant="h1" className="inline-block">
                            <span className="bg-emerald-400 px-2">Enquire</span> <span>Now!</span>
                        </Typography>
                        <p className="text-muted-foreground mt-2">
                            Contact me below and I&apos;ll get back to you ASAP!
                        </p>
                    </div>

                    <form className="space-y-4">
                        <Input type="text" placeholder="Name" className="w-full" />
                        <Input type="tel" placeholder="Contact Number" className="w-full" />
                        <Input type="email" placeholder="Email Address" className="w-full" />
                        <Input
                            type="text"
                            placeholder="Preferred Lesson Date & Time"
                            className="w-full"
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Lesson Size" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="individual">Individual</SelectItem>
                                    <SelectItem value="group">Group</SelectItem>
                                    <SelectItem value="class">Class</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Skill Level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="beginner">Beginner</SelectItem>
                                    <SelectItem value="intermediate">Intermediate</SelectItem>
                                    <SelectItem value="advanced">Advanced</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <Button className="w-full bg-emerald-400 hover:bg-emerald-500 text-black">
                            Register Your Interest
                        </Button>
                    </form>
                </div>
            </section>

            <Testimonials />
        </>
    );
}
