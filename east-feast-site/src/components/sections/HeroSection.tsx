import React from 'react';
import Image from 'next/image';
import { withBasePath } from '@/utils/withBasePath';

const HeroSection: React.FC = () => (
    <section
        id="section1"
        className="absolute min-h-[500px] md:min-h-[750px] max-h-[1000px] w-full overflow-x-hidden flex flex-col justify-start items-center bg-background px-4 sm:px-6 -mt-1"
    >
        <div className=" w-full h-full flex justify-start items-center max-w-[1080px]">
            {/* Hero section */}
            <div className=" relative z-10 mt-20 w-[250px] sm:w-[50%] max-w-[1080px] flex flex-col justify-start">
                <h1
                    className="font-bold mb-4"
                    style={{ fontSize: 'clamp(16px, 2.5vw, 55px)' }}
                >
                    Experience <span className="text-prime">Asian</span>
                    <br /> dining like no other
                    <br /> with <span className="text-gradient">EastFeast</span>
                </h1>
                <p
                    className="text-gray-700 max-w-2xl  "
                    style={{ fontSize: 'clamp(12px, 2.5vw, 20px)' }}
                >
                    At EastFeast Catering we focus <br />
                    on providing you with the   <br />
                    best Asian dining experience,  <br />
                    catered to your personal wishes.
                </p>
                <div className="flex justify-evenly items-center mt-6 w-full min-w-[215px]">
                    <button
                        type="button"
                        className="text-white w-[25%] min-w-[100px] sm:min-w-[120px] sm:h-[50px] bg-gradient-to-br from-prime to-second hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300"
                        style={{ fontSize: 'clamp(12px, 2.5vw, 20px)' }}>
                        Feasts
                    </button>
                    <button
                        type="button"
                        className="relative w-[25%] min-w-[100px] sm:min-w-[120px] sm:h-[50px] inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 transition-all duration-300"
                    >
                        <span className="w-full h-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-background dark:text-prime rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent transition-all duration-300"
                            style={{ fontSize: 'clamp(12px, 2.5vw, 20px)' }}>
                            Reserve
                        </span>
                    </button>
                </div>
            </div>

            {/* Image section */}
            <div className="absolute -translate-x-[25%] w-[50%] z-0 right-0 sm:-translate-x-2">
                <Image
                    src={withBasePath('/wok.png')}
                    alt="wok image"
                    width={300}
                    height={300}
                    layout="responsive"
                    className="cursor-pointer max-w-[800px] min-w-[250px]"
                />
            </div>
        </div>
    </section>
);

export default HeroSection;
