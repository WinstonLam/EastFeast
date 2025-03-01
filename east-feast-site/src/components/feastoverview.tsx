import React, { useState } from 'react';
import Image from 'next/image';
import { PiBowlFood } from "react-icons/pi";

import ImageModal from '@/components/imagemodel';

type FeastData = {
    price: number;
    dishes: string[];
};

type ImageData = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

type FeastOverviewProps = {
    isVisible: boolean;
    imageData: ImageData;
    feastData: FeastData;
};

const FeastOverview: React.FC<FeastOverviewProps> = ({ isVisible, imageData, feastData }) => {
    const [expand, setExpand] = useState(false)
    return (
        <>
            {expand && <ImageModal image={<Image src={imageData.src}
                alt={imageData.alt}
                width={imageData.width}
                height={imageData.height} />} onClose={() => setExpand(false)} />}

            <div className={`absolute flex flex-col items-center justify-center transition-all duration-300 
            ${isVisible ? "pointer-events-all opacity-100" : "pointer-events-none opacity-0"}`}>

                <div className="relative mb-20 ">
                    <Image
                        src={imageData.src}
                        alt={imageData.alt}
                        width={imageData.width}
                        height={imageData.height}
                        className='relative rounded-3xl shadow-lg md:scale-[1.2] z-10 hover:-translate-y-2 transition-all duration-300 cursor-pointer'
                        onClick={() => setExpand(true)}
                    />

                    {/* Info Box */}
                    <div className='w-full h-[250px] flex items-end justify-end
                    bg-gradient-to-br from-prime to-second rounded-2xl px-6 py-5 text-white shadow-lg
                    absolute left-1/2 -translate-x-1/2 -bottom-[125px] md:-bottom-[150px] md:scale-[1.2] z-0'>

                        {/* Price per person section */}
                        <div className="flex flex-col items-start justify-center h-[50%] w-1/3 text-left">
                            <span className="font-bold text-sm leading-none">Price per<br /> person</span>
                            <div className="text-xl sm:text-2xl font-bold ">€{feastData.price}</div>
                        </div>

                        {/* Vertical separator */}
                        <div className="h-[45%] w-[2px] bg-prime"></div>

                        {/* Contents section */}
                        <div className="flex flex-col h-full flex-grow w-2/3 pl-4 items-center justify-end">
                            <div className="flex items-center justify-start mb-2 w-full">
                                <PiBowlFood className="mr-1 h-5 w-5" />
                                <span className="font-bold text-sm sm:text-base">Contents</span>
                            </div>
                            {/* Just add the custom-scrollbar class here */}
                            <div className="overflow-y-auto max-h-16 pb-2 text-sm sm:text-base w-full custom-scrollbar">
                                {feastData.dishes.join(', ')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeastOverview;