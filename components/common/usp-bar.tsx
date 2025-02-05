interface Usp {
    title: string;
    icon: React.ReactNode;
}

interface UspBarProps {
    usps: Usp[];
    className?: string;
}

export default function UspBar({ usps, className }: UspBarProps) {
    return (
        <div
            className={`mt-6 lg:mt-0 w-full max-w-7xl mx-auto rounded-xl py-6 sm:py-8 bg-gradient-to-r from-primary to-primary/40 ${
                className || ""
            }`}
        >
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0">
                {usps.map((usp, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 justify-center rounded-xl px-3 py-2 sm:px-4 bg-white shadow-md w-full sm:w-auto"
                    >
                        <div className="text-orange-400">{usp.icon}</div>
                        <span className="font-medium text-sm sm:text-base">{usp.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
