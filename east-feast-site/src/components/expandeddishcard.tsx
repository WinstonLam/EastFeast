import React from 'react';
import Image from 'next/image';

export interface DishData {
    id: number;
    title: string;
    desc: string;
    image: React.ReactElement;
}

interface ExpandedDishCardProps {
    dish: DishData;
    onClose: () => void;
}

const ExpandedDishCard: React.FC<ExpandedDishCardProps> = ({ dish, onClose }) => {
    return (
        <div className="relative bg-background rounded-2xl shadow-2xl p-6 w-full max-w-4xl mx-auto transition-all duration-300">
            <button
                className="absolute top-4 right-4 text-prime font-bold text-2xl"
                onClick={onClose}
            >
                &times;
            </button>
            <div className="flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 overflow-hidden rounded-xl drop-shadow-lg">
                    {dish.image}
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                    <h3 className="text-3xl font-bold">{dish.title}</h3>
                    <p className="mt-2 text-lg text-gray-700">{dish.desc}</p>
                    {/* You can add more detailed info here */}
                </div>
            </div>
        </div>
    );
};

export default ExpandedDishCard;
