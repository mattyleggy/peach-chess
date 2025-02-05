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

const faqs = [
    {
        question: "How Is Open Lid Different?",
        answer: "We focus exclusively on helping businesses (e.g. tradies, doctors, small businesses, etc.) to succeed online with affordable, high-quality websites.",
    },
    {
        question: "Does My Business Need A Website?",
        answer: "Businesses With Business Quality Websites On Average See An Increase In Sales Of 30%. It helps you get more customers and grow your business.",
    },
    {
        question: "How Long Does It Take For Me To Get A Website Up And Running?",
        answer: "We typically complete websites within 2-4 weeks from receiving your content and requirements.",
    },
    {
        question: "Can I Talk To Someone In Australia?",
        answer: "Yes! We're 100% Australian owned and operated. You'll always speak with someone local who understands your needs.",
    },
    {
        question: "I'm Only A Small Business With Limited Cash Flow, Can I Afford A Website?",
        answer: "We offer flexible payment plans starting at $150/month with $0 down to make professional websites accessible for small businesses.",
    },
    {
        question: "How Many Changes Can I Make To My Website?",
        answer: "Our plans include changes and updates to keep your website current and effective.",
    },
    {
        question: "Is There Anything Else I Need To Do To Get An Online Footprint?",
        answer: "We handle everything from domain registration to hosting, SEO, and ongoing maintenance.",
    },
];

export default function FAQ() {
    return (
        <Section variant="light">
            <div className="relative w-full max-w-7xl z-10">
                <GlowCircle size="lg" className="absolute -right-20 -bottom-20" />
                <div className="flex flex-col md:flex-row gap-16">
                    {/* Left side - Title */}
                    <div className="md:w-1/3 space-y-4">
                        <Badge variant="secondary">You&apos;ve got questions, we&apos;ve got answers!</Badge>
                        <Typography variant="h2">Frequently Asked Questions (FAQ)</Typography>

                        <div className="relative inline-block">
                            <QuestionCloud />
                            <Arrow className="absolute -right-24 -bottom-24" rotation={90} />
                        </div>
                    </div>

                    {/* Right side - FAQ items */}
                    <div className="md:w-2/3">
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="rounded-3xl border-none bg-white data-[state=open]:bg-primary data-[state=open]:text-white shadow-lg shadow-gray-100"
                                >
                                    <AccordionTrigger className="px-6 hover:no-underline">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 group-data-[state=open]:bg-white/10">
                                                <FaQuestion className="text-primary text-xl group-data-[state=open]:text-white" />
                                            </div>
                                            <h3 className="font-semibold text-xl text-left">
                                                {faq.question}
                                            </h3>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6 text-white/90">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </Section>
    );
}
