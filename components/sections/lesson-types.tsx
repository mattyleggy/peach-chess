"use client"
import Section from "../common/section";
import { Typography } from "../common/typography";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ArrowRight, BookOpen, Brain, Trophy } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Highlight } from "../common/highlight";

export default function LessonTypes() {
    return (
        <Section variant="light" className="">
            <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <Typography variant="h1" className="mb-6">
                            Chess <Highlight>Lessons</Highlight>
                        </Typography>
                        <p>
                            Master the game of chess with our comprehensive learning paths. From
                            beginner to advanced, we&apos;ve got you covered.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="group hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <BookOpen className="w-8 h-8 text-primary mb-4" />
                                <CardTitle>Beginner&apos;s Path</CardTitle>
                                <CardDescription>Start your chess journey</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 mb-6">
                                    <li>• Basic piece movement</li>
                                    <li>• Essential tactics</li>
                                    <li>• Opening principles</li>
                                    <li>• Basic endgames</li>
                                </ul>
                                <Button variant="default" className="w-full" asChild>
                                    <Link href="/get-started">
                                        Start Learning <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="group hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Brain className="w-8 h-8 text-primary mb-4" />
                                <CardTitle>Intermediate Strategy</CardTitle>
                                <CardDescription>Deepen your understanding</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 mb-6">
                                    <li>• Advanced tactics</li>
                                    <li>• Positional play</li>
                                    <li>• Complex endgames</li>
                                    <li>• Opening theory</li>
                                </ul>
                                <Button variant="default" className="w-full" asChild>
                                    <Link href="/get-started">
                                        Continue Learning <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="group hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <Trophy className="w-8 h-8 text-primary mb-4" />
                                <CardTitle>Advanced Mastery</CardTitle>
                                <CardDescription>Reach expert level</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 mb-6">
                                    <li>• Grandmaster strategies</li>
                                    <li>• Tournament preparation</li>
                                    <li>• Advanced endgames</li>
                                    <li>• Psychological aspects</li>
                                </ul>
                                <Button variant="default" className="w-full" asChild>
                                    <Link href="/get-started">
                                        Master Chess <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Section>
    );
}
