import React from 'react';

interface DishCardProps {
    image: React.ReactElement; // Pass your Next.js Image component
    title: string;
    desc: string;
    onClick?: () => void;
}

const DishCard: React.FC<DishCardProps> = ({ image, title, desc, onClick }) => {
    return (
        <div
            className="group relative max-w-[300px] flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
            onClick={onClick}
        >
            {/* Dish Image Container */}
            <div className="relative z-10 transition-transform duration-300">
                <div className="overflow-hidden rounded-xl drop-shadow-lg">
                    {image}
                </div>
            </div>

            {/* Card Content */}
            <div
                className="bg-background rounded-2xl shadow-lg w-full max-w-[280px] h-[120px] sm:h-[250px] md:h-[300px] -mt-[40%] sm:-mt-[40%] md:-mt-[50%] pt-12 px-4 pb-4 
                flex flex-col items-center justify-center 
                transition-all duration-300
                   group-hover:bg-prime"
            >
                <div className='w-[90%]'>
                    <h3 className="group-hover:text-background text-lg font-bold transition-all duration-300">
                        {title}
                    </h3>
                    <p className="group-hover:text-background text-sm text-gray-600 clamp(12px, 1.5vw, 20px) transition-all duration-300 truncate sm:overflow-visible sm:whitespace-normal">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DishCard;
