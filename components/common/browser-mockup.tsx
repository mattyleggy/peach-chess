import { ArrowUpRight } from "lucide-react";

interface BrowserMockupProps {
    url: string;
    children: React.ReactNode;
    className?: string;
}

export function BrowserMockup({ url, children, className }: BrowserMockupProps) {
    return (
        <div className={`bg-white rounded-3xl p-4 shadow-lg ${className || ''}`}>
            {/* Browser controls */}
            <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 max-w-xl mx-auto">
                    <div className="bg-slate-100 rounded-full px-4 py-2 flex items-center gap-2">
                        <span className="text-slate-600 text-sm truncate block w-full max-w-[50vw] md:max-w-full">
                            {url}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-primary shrink-0" />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="w-auto">
                {children}
            </div>
        </div>
    );
} 