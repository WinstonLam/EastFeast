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
        className: "object-cover rounded-xl shadow-lg w-full h-full"
    });

    return (
        <div
            onClick={onClick}
            className="relative flex items-center transition-all duration-300 cursor-pointer"
        >
            <div className={`group flex w-full items-center -translate-x-[7%] md:-translate-x-[10%] ${flexDirection}`}>
                {/* Info Box */}
                <div className=" p-5 sm:p-3">
                    <div
                        className={`rounded-xl shadow-lg flex flex-col w-[250px] sm:w-[500px] h-[200px] sm:h-[250px] bg-gradient-to-br from-prime to-second transition-all duration-300 
                             ${outline ? "items-center justify-center p-1" : "items-start justify-left text-white p-6"}`}>
                        {outline ? (
                            <div className='bg-white w-full h-full p-4 rounded-xl'>
                                <h3 className="text-xl font-bold ">{title}</h3>
                                <p className="mt-2 text-sm w-[60%] sm:w-[49%]">{desc}</p>
                            </div>) : (
                            <>
                                <h3 className="text-xl font-bold">{title}</h3>
                                <p className="mt-2 text-sm w-[60%] sm:w-[48%]">{desc}</p>
                            </>)}

                    </div>
                </div>

                {/* Image Container */}
                <div className={`p-6 ${imageOverlapClass}`}>
                    <div
                        className=" absolute top-0 -right-[15%] sm:-right-[10%] md:-right-[20%] 
                                    h-[150px] w-[175px] sm:h-[250px] sm:w-[350px] md:w-[400px] 
                                    group-hover:w-[350px] sm:group-hover:w-[400px] md:group-hover:w-[500px]
                                    transition-all duration-300">
                        {styledImage}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AboutCard;
