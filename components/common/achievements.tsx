import { FaStar } from "react-icons/fa6";

interface AchievementProps {
    text: string;
}

function Achievement({ text }: AchievementProps) {
    return (
        <div className="flex items-start gap-4 bg-muted/50 rounded-2xl p-4 relative ml-2">
            <div className="bg-secondary p-2 rounded-full border-white border-4 absolute -left-5 top-1/2 -translate-y-1/2">
                <FaStar className="w-5 h-5 text-white" />
            </div>
            <div className="text-muted-foreground pl-6 flex flex-col justify-center items-center h-full">{text}</div>
        </div>
    );
}

export function Achievements() {
    const achievements = [
        "Toowoomba district Primary School chess champion in 2010 and 2011",
        "Toowoomba district Secondary School chess champion in 2014, 2015, and 2016",
        "1st place in the Tin Cup 2020",
        "Toowoomba Chess Club champion in 2020 and 2021",
        "Completed a four-year degree in Primary Education",
        "1st place in the Byron Capital Major division 2024",
        "Equal 4th in QLD interschool Primary School Teams State Finals in 2011 playing board 1",
        "Reached a rating of 2014 ACF",
        "Rated 2500+ online",
    ];

    return (
        <div className="grid gap-x-6 gap-y-4 md:grid-cols-3">
            {achievements.map((achievement, index) => (
                <Achievement key={index} text={achievement} />
            ))}
        </div>
    );
}
