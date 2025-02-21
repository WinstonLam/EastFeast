import React from 'react';
import AboutCard from '../aboutcard';
import Image from 'next/image';
import { withBasePath } from '@/utils/withBasePath';

const images = [
    <Image
        key="Impression1"
        src={withBasePath('/Impression1.jpg')}
        alt="Impression1"
        width={300}
        height={300}
    />,
    <Image
        key="Impression2"
        src={withBasePath('/Impression2.jpg')}
        alt="Impression2"
        width={300}
        height={300}
    />,
    <Image
        key="Impression3"
        src={withBasePath('/Impression3.jpg')}
        alt="Impression3"
        width={300}
        height={300}
    />
];

const AboutSection: React.FC = () => (
    <section id="section4" className="min-h-screen flex flex-col justify-evenly items-center bg-white px-6">
        <div className='w-[80%] max-w-[750px] h-[300px] sm:h-[500px] flex items-center justify-start'>
            <AboutCard image={images[0]} title='Serious Fresh' desc="We seriously care about fresh food, that is why all our food is freshly made based on each feast" />
        </div>
        <div className='w-[80%] max-w-[750px] h-[500px] flex items-center justify-start'>
            <AboutCard outline={true} image={images[0]} title='Serious Fresh' desc="We seriously care about fresh food, that is why all our food is freshly made based on each feast" />
        </div>
        <div className='w-[80%] max-w-[750px] h-[500px] flex items-center justify-start'>
            <AboutCard image={images[0]} title='Serious Fresh' desc="We seriously care about fresh food, that is why all our food is freshly made based on each feast" />
        </div>
    </section>
);

export default AboutSection;