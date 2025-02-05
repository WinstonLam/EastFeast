import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { withBasePath } from '@/utils/withBasePath';

const HeroSection: React.FC = () => {
    // Create a ref for the element that will host the Vanta effect.
    const vantaRef = useRef<HTMLDivElement>(null);
    // Use a ref to store the Vanta instance so we can destroy it on unmount.
    const vantaEffect = useRef<any>(null);

    useEffect(() => {
        // Vanta only works on the client so we import dynamically.
        if (!vantaEffect.current && vantaRef.current) {
            // Dynamically import Vanta's fog effect and three.js.
            Promise.all([
                import('vanta/dist/vanta.fog.min'),
                import('three'),
            ]).then(([VANTA, THREE]) => {
                // Initialize VANTA.FOG on the referenced element.
                vantaEffect.current = VANTA.default({

                    el: vantaRef.current,
                    THREE: THREE, // Pass in the three.js library
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: true,
                    minHeight: 300.0,
                    minWidth: 300.0,
                    baseColor: 0xFDEFD0,       // Matches your section background
                    highlightColor: 0xffffff,  // Bright areas of the fog
                    midtoneColor: 0xe5e5e5,     // Middle tone for the fog
                    lowlightColor: 0xcccccc,    // Darker parts for depth
                    blurFactor: 0.40,
                    speed: 3.50,
                });

            });
        }
        // Cleanup the effect on unmount
        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
            }
        };
    }, []);

    return (
        <section
            id="section1"
            className=" min-h-[500px] md:min-h-[750px] max-h-[1000px] w-full overflow-x-hidden flex flex-col justify-start items-center bg-background px-4 sm:px-6 -mt-1"
        >
            <div className=" w-full h-full flex justify-center sm:justify-start items-center max-w-[1080px] -mt-6 sm:mt-0">
                {/* Hero section */}
                <div className=" relative z-10 mt-20 w-[80%] sm:w-[50%] max-w-[1080px] flex flex-col justify-start z-20">
                    <h1
                        className="font-bold mb-4 text-center sm:text-left"
                        style={{ fontSize: 'clamp(27px, 3.5vw, 58px)' }}
                    >
                        Experience <span className="text-prime">Asian</span>
                        <br /> dining like no other
                        <br /> with <span className="text-gradient">EastFeast</span>
                    </h1>
                    <p
                        className="text-gray-700 max-w-2xl text-center sm:text-left "
                        style={{ fontSize: 'clamp(12px, 2.5vw, 20px)' }}
                    >
                        At EastFeast Catering we focus <br />
                        on providing you with the   <br />
                        best Asian dining experience,  <br />
                        catered to your personal wishes.
                    </p>
                    <div className="flex justify-evenly items-center mt-6 w-full min-w-[215px]">

                        <Link href="#section2">

                            <button
                                type="button"
                                className="text-white w-[25%] min-w-[100px] sm:min-w-[120px] sm:h-[50px] bg-gradient-to-br from-prime to-second hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300"
                                style={{ fontSize: 'clamp(12px, 2.5vw, 20px)' }}>
                                Feasts
                            </button>
                        </Link>

                        <Link href="#section3">
                            <button
                                type="button"
                                className="relative w-[25%] min-w-[100px] sm:min-w-[120px] sm:h-[50px] inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 transition-all duration-300"
                            >
                                <span className="w-full h-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-background dark:text-prime rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent transition-all duration-300"
                                    style={{ fontSize: 'clamp(12px, 2.5vw, 20px)' }}>
                                    Reserve
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Image section */}
                <div className="absolute sm:-translate-x-[25%] z-10 w-[50%] sm:right-0 bottom-20 flex items-center justify-center">
                    <Image
                        src={withBasePath('/wok.png')}
                        alt="wok image"
                        width={300}
                        height={300}
                        layout="responsive"
                        className="cursor-pointer max-w-[800px] min-w-[360px] mr-10 sm:mr-0"
                    />

                </div>

            </div>
            {/* Overlay div for the Vanta steam effect */}
            <div
                ref={vantaRef}
                className="absolute w-full min-h-[575px] md:min-h-[750px] pointer-events-none top-0 z-0 "
            // Ensure the overlay appears above the image. Adjust z-index if necessary.

            ></div>
        </section>
    )
}

export default HeroSection;
