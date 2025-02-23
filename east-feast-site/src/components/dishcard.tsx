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
            className="group relative max-w-[300px] flex flex-col items-center transform 
            transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
            onClick={onClick}
        >
            {/* Dish Image Container */}
            <div className="relative z-10 transition-transform duration-300">
                <div className="overflow-hidden rounded-xl drop-shadow-lg  ">
                    <div className='max-w-[150px] sm:max-w-[750px]'>
                        {image}
                    </div>
                </div>
            </div>

            {/* Card Content */}
            <div
                className="bg-background rounded-2xl shadow-lg w-full h-full 
                max-w-[170px] max-h-[160px]
                sm:max-w-[280px] md:max-h-[300px] min-h-[150px]
                sm:h-[170px] md:h-[300px] -mt-[40%] sm:-mt-[40%] md:-mt-[50%] pt-12 md:pt-24 px-4 pb-4 
                flex flex-col items-center justify-center 
                transition-all duration-300
                   group-hover:bg-prime"
            >
                <div className='mt-4 w-[90%] h-[70%] overflow-hidden text-ellipsis'>
                    <h3 className="group-hover:text-background text-lg font-bold transition-all duration-300">
                        {title}
                    </h3>
                    <p className="group-hover:text-background text-sm text-gray-600 clamp(12px, 0.5vw, 20px) 
                    transition-all duration-300 truncate md:overflow-visible md:whitespace-normal">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DishCard;
