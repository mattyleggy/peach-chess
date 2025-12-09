import { Typography } from "@/components/common/typography";

interface StatisticProps {
    value: string;
    label: string;
}

function Statistic({ value, label }: StatisticProps) {
    const hasPlus = value.endsWith('+');
    const number = hasPlus ? value.slice(0, -1) : value;
    return (
        <div className="space-y-1">
            <Typography variant="h2" className="text-5xl font-bold">
                {number}
                {hasPlus && <span className="text-secondary leading-none">+</span>}
            </Typography>
            <p className="text-sm text-primary-foreground/80">{label}</p>
        </div>
    );
}

const stats = [
    { value: "2500+", label: "Online Rating" },
    { value: "2014", label: "ACF Rating" },
    { value: "10+", label: "Years coaching experience" },
];

export function Statistics() {
    return (
        <div className="bg-black text-white rounded-3xl p-8 space-y-8 h-full w-full flex flex-col justify-center items-baseline">
            {stats.map((stat) => (
                <Statistic key={stat.label} {...stat} />
            ))}
        </div>
    );
} 