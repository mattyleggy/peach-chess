import Section from "../common/section";
import { Typography } from "../common/typography";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonialsData = [
    {
        quote: "I have been learning chess with Coach Ben Peach for over two years, and he's helped me go from a beginner to being one of the top 10 QJ-rated players in my age group. Unlike most coaches, Ben doesn't make me memorise openings or do tons of exercises. Instead, he teaches me how to think about positional chess, and he changes the lessons as I get better. He is always friendly and makes learning fun, which has kept me excited about chess while helping me improve a lot.",
        name: "Francis Fu",
        designation: "Top 10 QJ-rated player in age group",
        src: "/images/testimonials/francis.jpg",
    },
    {
        quote: "I had previously played and studied chess to a basic level when I was younger but stopped for many years until deciding to start again. Within a year, I was able to go from someone who only had a surface level view of the game to being part of the representative team for state competitions, a goal that I had set early in the year and thought was unachievable. I can say very confidently that working with Ben Peach was a very core reason for this as I developed in all areas of the game far quicker and greater than I could have on my own. I was able to receive personally tailored lessons pertaining to all aspects of chess, be it from openings to endgames to analysis. I highly recommend his services.",
        name: "Hugh Wilson",
        designation: "Advanced Student",
        src: "/images/testimonials/hugh.png",
    },
    {
        quote: "My name is Shafiuddin Aanan, and I am a five-time Toowoomba Regional Secondary Champion, a former Under-18 Queensland Champion, and I placed fourth in the 2024 Open Queensland Championship. Ben has been one of my longest-standing coaches. In addition to coaching chess at my school, I have had numerous one-on-one training sessions with him, which were pivotal to my overall development in chess. Thanks to Ben's guidance, I was able to refine my opening repertoire and develop a more strategic approach to planning and thinking through chess middlegames and endgames. This significantly elevated my level of play above that of my peers. Ben is an exceptional teacher who explains new concepts in a clear and accessible manner, using plenty of examples and practice materials. I highly encourage you to take the opportunity to work with him as your coach.",
        name: "Shafiuddin Aanan",
        designation: "Five-time Toowoomba Regional Secondary Champion",
        src: "/images/testimonials/shafiuddin.jpg",
    },
    {
        quote: "As one of Ben's past students, I had lessons during my senior years of schooling. Thanks to Ben's support, my knowledge of openings and mid-game planning improved substantially, resulting in greater success in my games. I'd highly recommend Ben to any player who wants to elevate their chess to the next level.",
        name: "Thomas Dixon",
        designation:
            "Equal 1st place in the Toowoomba Secondary School Individual competition in 2023",
        src: "/images/testimonials/thomas.png",
    },
];

export default function Testimonials() {
    return (
        <Section variant="texture" className="relative items-center justify-center text-center">
            <div className="flex flex-col  items-center justify-center relative z-10 text-center">
                <Badge variant="default">Student Testimonials</Badge>
                <Typography variant="h2" className="max-w-lg">
                    Happy Words From Happy Students
                </Typography>
                <div className="w-36 py-10">
                    <Separator />
                </div>
            </div>

            <AnimatedTestimonials testimonials={testimonialsData} />
        </Section>
    );
}
