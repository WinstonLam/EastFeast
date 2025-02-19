// components/AboutCard.tsx
import React, { cloneElement } from 'react';

export interface AboutCardProps {
    image: React.ReactElement<{ className?: string }>;
    title: string;
    desc: string;
    onClick?: () => void;
    reverse?: boolean;
    outline?: boolean;
}

const AboutCard: React.FC<AboutCardProps> = ({
    image,
    title,
    desc,
    onClick,
    reverse = false,
    outline = false,
}) => {
    const imageOverlapClass = reverse ? '-mr-8' : '-ml-8';
    const flexDirection = reverse ? 'flex-row-reverse' : 'flex-row';

    // Clone the image element and add styling
    const styledImage = cloneElement(image, {
        className: "object-cover rounded-xl shadow-lg -translate-x-[50px]"
    });

    return (
        <div
            onClick={onClick}
            className="group relative flex items-center transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
            <div className={`flex w-full items-center ${flexDirection}`}>
                {/* Info Box */}
                <div className="p-6">
                    {outline ? (
                        <div className="p-1 bg-gradient-to-br from-prime to-second rounded-xl shadow-lg h-[200px] translate-x-[50px]">
                            <div className="bg-transparent rounded-xl p-6">
                                <h3 className="text-xl font-bold">{title}</h3>
                                <p className="mt-2 text-sm text-gray-700">{desc}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-gradient-to-br from-prime to-second rounded-xl p-6 shadow-lg h-full w-full translate-x-[50px]">
                            <h3 className="text-xl font-bold text-white">{title}</h3>
                            <p className="mt-2 text-sm text-white">{desc}</p>
                        </div>
                    )}
                </div>
                {/* Image Container */}
                <div className={`p-6 ${imageOverlapClass}`}>
                    <div className='relative w-[300px] h-[300px]'>
                        {styledImage}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;
