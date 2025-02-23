import React from 'react';
import { IoClose } from "react-icons/io5";

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
        <div className="group relative bg-gradient-to-br from-prime to-second rounded-2xl shadow-2xl 
        p-6 w-full h-full max-w-4xl mx-auto transition-all duration-300">

            <button
                onClick={onClose}
                className="absolute top-4 left-4 z-50 p-2 bg-second rounded-full shadow-lg 
                hover:bg-prime text-white transition-all duration-300"
            >
                <IoClose className="w-8 h-8" />
            </button>

            <div className=" flex flex-row items-center w-[40%] md:w-[50%] ">

                <div className="md:p-6 mt-12 md:mt-8 text-left text-background h-[275px] overflow-hidden text-ellipsis">
                    <h3 className="text-3xl font-bold ">{dish.title}</h3>
                    <hr className="bg-background border-0 h-[2px] rounded-xl w-[90%] mt-2" />
                    <p className="mt-2 clamp(12px, 0.5vw, 20px)">{dish.desc}</p>
                    {/* You can add more detailed info here */}
                </div>
                <div className="absolute w-[200px] md:w-[250px] overflow-hidden 
                rounded-xl drop-shadow-lg top-5 right-6 sm:right-5 scale-[1.7] 
             transition-all duration-300">
                    {dish.image}
                </div>
            </div>
        </div>
    );
};

export default ExpandedDishCard;
