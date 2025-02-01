import React from 'react';
import Image from 'next/image';
import { withBasePath } from '@/utils/withBasePath';

const HeroSection: React.FC = () => (
    <section id="section1" className="min-h-[500px] md:min-h-[750px] max-h-[1000px] flex flex-col justify-center items-center bg-background px-6">
        <div className='w-full h-full flex justify-center items-center '>

            {/* Hero section */}
            <div className='flex-5'>
                <h1 className="text-4xl font-bold mb-4">Experience <span className='text-prime'>Asian</span> <br /> dining like no other <br /> with <span className='text-gradient'>EastFeast</span></h1>
                <p className="text-lg text-gray-700 max-w-2xl text-center">
                    Your perfect partner for delicious catering services.
                </p>
            </div>

            {/* Image section */}
            <div className='flex-5 absolute'>
                <Image src={withBasePath('/wok.png')} alt="wok image" width={500} height={500} className='cursor-pointer' />
            </div>
        </div>
    </section>
);

export default HeroSection;