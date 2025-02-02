import React from 'react';
import Image from 'next/image';
import { withBasePath } from '@/utils/withBasePath';

const HeroSection: React.FC = () => (
    <section
        id="section1"
        className="min-h-[500px] md:min-h-[750px] max-h-[1000px] w-full overflow-x-hidden flex flex-col justify-start items-center bg-background px-6"
    >
        <div className="w-full h-full flex justify-start items-center max-w-[1080px]">
            {/* Hero section */}
            <div className=" flex-4 relative z-10 mt-20 max-w-[1080px] flex flex-col justify-start">
                <h1
                    className="font-bold mb-4"
                    style={{ fontSize: 'clamp(16px, 4vw, 30px)' }}
                >
                    Experience <span className="text-prime">Asian</span>
                    <br /> dining like no other
                    <br /> with <span className="text-gradient">EastFeast</span>
                </h1>
                <p
                    className="text-gray-700 max-w-2xl mx-auto "
                    style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
                >
                    At EastFeast Catering we focus on <br />
                    providing you with the best Asian <br />
                    dining experience, catered <br />
                    to your personal wishes.
                </p>
                <div className="flex justify-start items-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                        type="button"
                        className="text-white bg-gradient-to-br from-prime to-second hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300"
                    >
                        Reserve
                    </button>
                    <button
                        type="button"
                        className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                    >
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-background dark:text-prime rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                            Services
                        </span>
                    </button>
                </div>
            </div>

            {/* Image section */}
            <div className=" z-0 right-0">
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
