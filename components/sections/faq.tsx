import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import Section from "@/components/common/section";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// import { FaQuestion } from "react-icons/fa";
import { Separator } from "../ui/separator";

const faqs = [
    {
        question: "Is chess easy to learn?",
        answer: "Yes! I started playing and learning chess when I was six years old. I have also taught kids younger than six.",
    },
    {
        question: "How will your lessons help me to improve?",
        answer: "The first 40-minutes of the lesson will involve learning strategy and tactical combinations to improve your understanding and ability. The remaining 20-minutes will have you play training games, during which you will receive timely feedback for improvement.",
    },
    {
        question: "How can I improve my chess skills outside of the lessons?",
        answer: "I will provide you with a detailed schedule for studying chess that highlights where and how to focus your time and energy for maximal progression.",
    },
    {
        question: "Do you run any chess tournaments?",
        answer: "I run all the Toowoomba Chess Club school tournaments and some weekend tournaments. Details for these events can be found on the Toowoomba Chess Club website.",
    },
    {
        question: "What do I need for online chess lessons?",
        answer: "You will need a computer with internet access, zoom, headset + microphone, Lichess account, and optional but ideal is a camera.",
    },
];

export default function FAQ() {
    return (
        <Section variant="light" className="relative items-center justify-center">
            <div className="flex flex-col relative z-10 text-center items-center justify-center">
                <Badge variant="default">Got questions? We've got answers!</Badge>
                <Typography variant="h2" className="max-w-lg">
                    Frequently Asked Questions                    
                </Typography>
                <div className="w-36 py-10">
                    <Separator />
                </div>
            </div>

            {/* Right side - FAQ items */}
            <div className="md:w-2/3">
                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="rounded-3xl border-none bg-black/5 data-[state=open]:bg-primary/10 "
                        >
                            <AccordionTrigger className="px-6 hover:no-underline">
                                <div className="flex items-center gap-4">                                    
                                    <h3 className="font-semibold text-xl text-left">
                                        {faq.question}
                                    </h3>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6 text-black/70">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </Section>
    );
}
