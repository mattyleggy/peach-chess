interface ProgressionCardProps {
    number: number;
    title: string;
    description: string;
}

export function ProgressionCard({ number, title, description }: ProgressionCardProps) {
    return (
        <div className=" rounded-lg p-6 flex gap-4">
            <span className="text-6xl font-bold text-white">{number}</span>
            <div className="space-y-2">
                <h3 className="text-white font-semibold text-xl">{title}</h3>
                <p className="text-gray-300 text-sm">{description}</p>
            </div>
        </div>
    );
}
