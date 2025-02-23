import React, { useState } from 'react';
import Image from 'next/image';
import { withBasePath } from '@/utils/withBasePath';

import Selector from '@/components/selector';
import DishCard from '@/components/dishcard';
import ExpandedDishCard, { DishData } from '@/components/expandeddishcard';

// Dummy image data (adjust as needed)
const imageData = {
    0: {
        src: withBasePath('/dish.png'),
        alt: 'dish1',
        width: 300,
        height: 300,
    },
};

const FeastsSection: React.FC = () => {
    // const [selectedFeast, setSelectedFeast] = useState<number>(0);
    const [selectedDish, setSelectedDish] = useState<DishData | null>(null);
    const [selectedView, setSelectedView] = useState<number>(0);

    // Dummy data for 4 dishes. In a real app, change this based on the selected feast.
    const dishes: DishData[] = Array.from({ length: 4 }, (_, index) => ({
        id: index + 1,
        title: `Dish ${index + 1}`,
        desc: `A delicious dish number ${index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,

        image: (
            <Image
                src={imageData[0].src}
                alt={imageData[0].alt}
                width={imageData[0].width}
                height={imageData[0].height}
            />
        ),
    }));



    return (
        <section
            id="section2"
            className=" flex flex-col justify-center items-center bg-gray-100 px-6 relative 
            min-h-[500px] md:min-h-[750px] max-h-[1000px]"
        >
            {/* Feast Selector */}
            <div className="w-full flex justify-center items-center mb-8">
                <Selector boxNames={['Silk Feast', 'Pearl Feast', 'Jade Feast']} />
            </div>

            <p className="text-2xl mb-4 text-center">Checkout the <span className='text-prime'>
                Overview</span> of the entire feast<br /> or view the <span className='text-second'>Dishes</span> in detail</p>
            <div className="flex justify-evenly items-center w-full sm:w-[50%] max-w-[750px] p-6">
                <button
                    type="button"
                    className="text-white w-[25%] min-w-[100px] sm:min-w-[120px] sm:h-[50px] 
                    bg-gradient-to-br from-prime to-second hover:bg-gradient-to-bl font-medium 
                    rounded-lg text-sm px-5 py-2.5 transform hover:scale-105 transition-transform duration-300"
                    style={{ fontSize: 'clamp(12px, 2.5vw, 20px)' }}
                    onClick={() => setSelectedView(0)}
                >
                    Overview
                </button>


                <button
                    type="button"
                    className="relative w-[25%] min-w-[100px] sm:min-w-[120px] sm:h-[50px] inline-flex items-center 
                    justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group 
                    bg-gradient-to-br from-pink-500 to-orange-400 hover:text-white focus:ring-4 focus:outline-none 
                    focus:ring-pink-200 dark:focus:ring-pink-800 transform hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedView(1)}
                >
                    <span
                        className="w-full h-full relative px-5 py-2.5 transition-all ease-in duration-75 
                        bg-white dark:bg-white dark:text-prime rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent"
                        style={{ fontSize: 'clamp(12px, 2.5vw, 20px)' }}
                    >
                        Dishes
                    </span>
                </button>

            </div>
            <div className='h-[650px] max-w-[1050px]'>

                {/* Overview of Menu */}
                {selectedView == 0 && (
                    <>

                    </>)}


                {/* Grid of Dish Cards */}


                <div className={`w-full h-[600px] mb-10 overflow-hidden bg-gradient-to-br from-prime to-second 
                rounded-2xl p-1 inset-shadow-sm transition-all duration-300
                ${selectedView == 1 ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-4"}`}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 md:gap-x-20 md:gap-y-10
                     h-full overflow-y-auto bg-white rounded-2xl inset-shadow-sm p-3">
                        {dishes.map((dish) => (
                            <DishCard
                                key={dish.id}
                                image={dish.image}
                                title={dish.title}
                                desc={dish.desc}
                                onClick={() => setSelectedDish(dish)}
                            />
                        ))}
                    </div>
                </div>


            </div>

            {/* Modal Overlay for Expanded Dish */}
            {selectedDish && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={() => setSelectedDish(null)} // close when clicking outside
                >
                    <div
                        className="relative p-4 w-[500px] md:w-[650px] h-[400px]"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        <ExpandedDishCard dish={selectedDish} onClose={() => setSelectedDish(null)} />
                    </div>
                </div>
            )}




        </section>
    );
};

export default FeastsSection;
