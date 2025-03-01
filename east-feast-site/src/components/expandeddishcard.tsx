import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
    const [isBrowser, setIsBrowser] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // This ensures we only render the portal on the client side, not during SSR
    useEffect(() => {
        setIsBrowser(true);

        // Prevent scrolling when modal is open
        document.body.style.overflow = 'hidden';

        // Trigger animation after a small delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 50); // Small delay to ensure DOM is ready

        // Clean up when component unmounts
        return () => {
            document.body.style.overflow = '';
            clearTimeout(timer);
        };
    }, []);

    // Handle closing with animation
    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 300); // Match this delay with your transition duration
    };

    // Only render on client-side
    if (!isBrowser) {
        return null;
    }

    const content = (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out
                ${isVisible ? 'bg-black bg-opacity-70' : 'bg-black bg-opacity-0'}`}
            onClick={handleClose}
        >
            {/* The actual card content - stops propagation to prevent closing when clicking inside */}
            <div
                className={`relative bg-gradient-to-br from-prime to-second rounded-2xl shadow-2xl 
                p-6 w-[90%] sm:w-[70%] sm:max-w-xl flex flex-col justify-center items-center
                mx-auto transition-all duration-300 max-h-[90vh] transform 
                ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button for larger screens */}
                <div className='hidden sm:block'>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClose();
                        }}
                        className="absolute top-4 left-4 p-2 bg-second rounded-full shadow-lg 
                        hover:bg-prime text-white transition-all duration-300"
                    >
                        <IoClose className="w-8 h-8" />
                    </button>
                </div>

                {/* Mobile close button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleClose();
                    }}
                    className="absolute top-2 left-2 sm:hidden p-2 bg-second rounded-full shadow-lg 
                                hover:bg-prime text-white transition-all duration-300"
                >
                    <IoClose className="w-8 h-8" />
                </button>

                {/* Image container with better relative positioning */}
                <div className={`relative sm:absolute w-[275px] sm:w-[400px] md:w-[550px] 
                    rounded-xl drop-shadow-lg sm:-top-[2rem] sm:-right-[10rem] md:-right-[20rem]
                    mb-4 sm:mb-0 sm:transform-none transition-all duration-500
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                    {dish.image}
                </div>

                <div className={`flex flex-col sm:flex-row w-full -mt-10 sm:mt-8 transition-all duration-500 delay-150
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="sm:p-6 text-left text-background sm:min-h-[200px] sm:w-[60%]">
                        <div className='flex justify-between items-center'>
                            <h3 className="text-3xl font-bold">{dish.title}</h3>
                        </div>

                        <hr className="bg-background border-0 h-[2px] rounded-xl w-[90%] my-4" />

                        {/* Scrollable description with max height */}
                        <div className="text-sm md:text-base overflow-y-auto max-h-[150px] pr-2 custom-scrollbar">
                            {dish.desc}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(content, document.body);
};

export default ExpandedDishCard;