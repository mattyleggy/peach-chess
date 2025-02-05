export default function USPCard({ 
    children, 
    className,
    ...props
}: { 
    children: React.ReactNode;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`bg-white shadow-lg text-black px-4 py-4 rounded-xl text-md ${className || ''}`} {...props}>
            {children}
        </div>
    );
}
