import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { withBasePath } from '@/utils/withBasePath';
import type { VantaFogEffect } from 'vanta/dist/vanta.fog.min';


const HeroSection: React.FC = () => {
    // Create a ref for the element that will host the Vanta effect.
    const vantaRef = useRef<HTMLDivElement>(null);
    // Use a ref to store the Vanta instance so we can destroy it on unmount.
    const vantaEffect = useRef<VantaFogEffect | null>(null);

    useEffect(() => {
        if (!vantaEffect.current && vantaRef.current) {
            Promise.all([
                import('vanta/dist/vanta.fog.min'),
                import('three'),
            ]).then(([VANTA, THREE]) => {
                vantaEffect.current = VANTA.default({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: true,
                    baseColor: 0xFDEFD0,
                    highlightColor: 0xffffff,
                    midtoneColor: 0xe5e5e5,
                    lowlightColor: 0xcccccc,
                    blurFactor: 0.40,
                    speed: 3.50,
                });
            });
        }
        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
            }
        };
    }, []);

    return (
        <section
            id="section1"
            className="relative min-h-[500px] md:min-h-[750px] max-h-[1000px] w-full overflow-hidden flex flex-col justify-start items-center bg-background px-4 sm:px-6 -mt-1"
        >
            <div className="w-full h-full flex flex-col sm:flex-row justify-center sm:justify-start items-center max-w-[1080px] -mt-6 sm:mt-0">
                {/* Hero section */}
                <div className="relative z-10 mt-20 w-full m:w-[50%] max-w-[1080px] flex flex-col justify-start z-20 items-center sm:items-start ml-0 md:ml-20">
                    <h1
                        className="font-bold mb-4 text-center sm:text-left"
                        style={{ fontSize: 'clamp(27px, 3.5vw, 58px)' }}
                    >
                        Experience <span className="text-prime">Asian</span>
                        <br /> dining like no other
                        <br /> with <span className="text-gradient">EastFeast</span>
                    </h1>
                    <p
                        className="text-gray-700 font-semibold sm:font-normal max-w-2xl text-center sm:text-left"
                        style={{ fontSize: 'clamp(16px, 2.5vw, 20px)' }}
                    >
                        At EastFeast Catering we focus <br />
                        on providing you with the <br />
                        best Asian dining experience, <br />
                        catered to your personal wishes.
                    </p>
                    <div className="flex justify-evenly items-center mt-6 w-[80%] sm:w-full">
                        <Link href="#section2">
                            <button
                                type="button"
                                className="text-white w-[25%] min-w-[100px] sm:min-w-[120px] sm:h-[50px] bg-gradient-to-br from-prime to-second hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 transform hover:scale-105 transition-transform duration-300"
                                style={{ fontSize: 'clamp(12px, 2.5vw, 20px)' }}
                            >
                                Feasts
                            </button>
                        </Link>
                        <Link href="#section3">
                            <button
                                type="button"
                                className="relative w-[25%] min-w-[100px] sm:min-w-[120px] sm:h-[50px] inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 transform hover:scale-105 transition-transform duration-300"
                            >
                                <span
                                    className="w-full h-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-background dark:text-prime rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent"
                                    style={{ fontSize: 'clamp(12px, 2.5vw, 20px)' }}
                                >
                                    Reserve
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Image section */}
                <Image
                    src={withBasePath('/wok.png')}
                    alt="wok image"
                    width={300}
                    height={300}

                    className="cursor-pointer max-w-[800px] min-w-[460px] mr-10 sm:mr-0 relative z-10 w-[50%] flex items-center justify-center -mt-[150px] sm:-mt-0"
                />
            </div>
            {/* Overlay div for the Vanta effect */}
            <div
                ref={vantaRef}
                className="absolute inset-0 pointer-events-none z-0 h-[110%]"
            ></div>
        </section>
    );
};

export default HeroSection;
