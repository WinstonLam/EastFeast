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
            className="group relative flex items-center transition-all duration-300 cursor-pointer"
        >
            <div className={`flex w-full items-center ${flexDirection}`}>
                {/* Info Box */}
                <div className="p-6 w-[200px] sm:w-[500px]  ">
                    <div
                        className={`rounded-xl shadow-lg flex flex-col  h-[175px] bg-gradient-to-br from-prime to-second  transition-all duration-300 
                             ${outline ? "items-center justify-center" : "items-start justify-left text-white p-6"}`}>
                        {outline ? (
                            <div className='bg-white w-[95%] h-[95%] p-4 rounded-xl mr-[3%]'>
                                <h3 className="text-xl font-bold ">{title}</h3>
                                <p className="mt-2 text-sm w-[70%]">{desc}</p>
                            </div>) : (
                            <>
                                <h3 className="text-xl font-bold">{title}</h3>
                                <p className="mt-2 text-sm w-[50%]">{desc}</p>
                            </>)}

                    </div>
                </div>

                {/* Image Container */}
                <div className={`p-6 ${imageOverlapClass}`}>
                    <div
                        className=" absolute top-0 -right-[13%] sm:h-[250px] sm:w-[400px] 
                                    hover:w-[350px] sm:hover:w-[500px]
                                    -translate-x-[50px] hover:translate-x-[50px] transition-all duration-300  ">
                        {styledImage}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AboutCard;
