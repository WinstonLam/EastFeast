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
        p-6 w-[90%] sm:w-full h-full max-w-[350px] sm:max-w-4xl flex flex-col justify-center sm:items-start items-center
        mx-auto transition-all duration-300">
            <div className="relative sm:absolute w-[150px] sm:w-[200px] md:w-[250px] 
                rounded-xl drop-shadow-lg -top-16 sm:top-4 sm:right-4
                scale-[1.8]  -translate-y-10 sm:translate-y-0
             transition-all duration-300 ">
                {dish.image}
            </div>
            <div className='hidden sm:block'>
                <button
                    onClick={onClose}
                    className="absolute top-4 left-4 z-50 p-2 bg-second rounded-full shadow-lg 
                hover:bg-prime text-white transition-all duration-300"
                >
                    <IoClose className="w-8 h-8" />
                </button>
            </div>

            <div className=" flex flex-col sm:flex-row items-center -mt-14 sm:mt-10 md:mt-0 w-full md:w-[45%] sm:w-[40%]  ">

                <div className="md:p-6 sm:mt-8 text-left text-background sm:h-[300px]  ">
                    <div className='flex justify-between'>
                        <h3 className="text-4xl sm:text-3xl font-bold sm:translate-y-0 ">{dish.title}</h3>

                        <button
                            onClick={onClose}
                            className="sm:hidden top-4 left-4 z-50 p-2 bg-second rounded-full shadow-lg 
                hover:bg-prime text-white transition-all duration-300"
                        >
                            <IoClose className="w-8 h-8" />
                        </button></div>
                    <hr className="bg-background border-0 h-[2px] rounded-xl w-[90%] mt-2 mb-2 sm:mt-6" />
                    <p className=" sm:mt-0 clamp(12px, 0.5vw, 20px) h-[150px] overflow-scroll">{dish.desc}</p>
                    {/* You can add more detailed info here */}
                </div>

            </div>
        </div>
    );
};

export default ExpandedDishCard;
