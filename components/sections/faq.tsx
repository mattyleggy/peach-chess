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
import { FaQuestion } from "react-icons/fa6";
import { Arrow } from "@/components/common/arrow";
import { GlowCircle } from "@/components/ui/glow-circle";
import { QuestionCloud } from "@/components/common/question-cloud";
import { Separator } from "../ui/separator";

const faqs = [
    {
        question: "Is chess easy to learn for young children?",
        answer: "Yes! Chess is very accessible for children. The basic moves can be learned in just a few sessions, and children as young as 5 can start playing. The game naturally grows with the child's abilities, allowing them to discover deeper strategies as they progress.",
    },
    {
        question: "Do you teach lessons to people outside of Australia?",
        answer: "Yes, we offer online chess lessons to students worldwide through video conferencing platforms. Our flexible scheduling accommodates different time zones, making it convenient for international students to learn and improve their chess skills.",
    },
    {
        question: "What schools do you teach at?",
        answer: "I currently teach at several primary and secondary schools in Toowoomba, offering both in-school programs and after-school chess clubs.",
    },
    {
        question: "How long will it take me to become a good chess player?",
        answer: "With regular practice and dedication, most students see significant improvement within 3-6 months. However, chess is a journey of continuous learning. We focus on building strong fundamentals and strategic thinking skills, which create a solid foundation for long-term growth in the game.",
    },
];

export default function FAQ() {
    return (
        <Section variant="light" className="relative items-center justify-center">
            <div className="flex flex-col relative z-10 text-center items-center justify-center">
                <Badge variant="default">Why Chess?</Badge>
                <Typography variant="h2" className="max-w-lg">
                    3 Benefits of learning how to play Chess
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
