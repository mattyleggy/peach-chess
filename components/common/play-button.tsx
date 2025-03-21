import { FaArrowRight } from "react-icons/fa6";

export const PlayButton = () => {
    return (
        <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-secondary flex items-center justify-center cursor-pointer hover:bg-primary transition-colors border-8 border-white">
            <FaArrowRight className="w-8 h-8 text-white" />
        </div>
    );
};
