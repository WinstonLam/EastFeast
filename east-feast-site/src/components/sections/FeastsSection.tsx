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
    const [selectedFeast, setSelectedFeast] = useState<number>(0);
    const [selectedDish, setSelectedDish] = useState<DishData | null>(null);

    // Dummy data for 10 dishes. In a real app, you’d change this based on the selected feast.
    const dishes: DishData[] = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        title: `Dish ${index + 1}`,
        desc: `A delicious dish number ${index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
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
            className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6 relative
                 min-h-[500px] md:min-h-[750px] max-h-[1000px]"
        >
            {/* Feast Selector */}
            <div className="w-full flex justify-center items-center mb-8">
                <Selector boxNames={['Silk Feast', 'Pearl Feast', 'Jade Feast']} />
            </div>

            <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
            <p className="text-lg text-gray-700 max-w-2xl text-center mb-8">
                We offer a wide range of catering services to suit your needs.
            </p>

            {/* When a dish is selected, display the expanded card above the grid */}
            {selectedDish && (
                <div className="w-full my-6">
                    <ExpandedDishCard dish={selectedDish} onClose={() => setSelectedDish(null)} />
                </div>
            )}

            {/* Grid of Dish Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {dishes
                    .filter((dish) => !selectedDish || dish.id !== selectedDish.id)
                    .map((dish) => (
                        <DishCard
                            key={dish.id}
                            image={dish.image}
                            title={dish.title}
                            desc={dish.desc}
                            onClick={() => setSelectedDish(dish)}
                        />
                    ))}
            </div>
        </section>
    );
};

export default FeastsSection;
