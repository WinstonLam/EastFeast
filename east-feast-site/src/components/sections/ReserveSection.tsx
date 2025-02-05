import React from 'react';

const ReserveSection: React.FC = () => (
    <section id="section3" className="relative min-h-[500px] md:min-h-[750px] max-h-[1000px] w-full overflow-x-hidden flex 
    flex-col sm:flex-row justify-start items-center bg-background px-4 sm:px-6 "
    >
        <div className='flex-5'>
            <h2 className="text-3xl font-semibold mb-4">Reserve</h2>
            <p className="text-lg text-gray-700 max-w-2xl text-center">
                We offer a wide range of catering services to suit your needs
            </p>
        </div>
        <div className='flex-5'></div>
    </section>
);

export default ReserveSection;