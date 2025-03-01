import React from 'react';

const ContactSection: React.FC = () => (
    <section id="section5" className="
     flex flex-col justify-center items-center w-full -mt-[50px] px-6">
        <div className='bg-background w-[80%] h-[170px] rounded-[3rem] drop-shadow-lg flex items-center justify-evenly translate-y-24 max-w-[800px] px-2 py-2'>
            <h2 className="text-3xl font-semibold mb-4 " style={{ fontSize: 'clamp(14px, 3.5vw, 24px)' }}><span className='text-prime'>Questions?</span><br /> <span className='text-second'>Reach</span> out to us!</h2>
            <button
                type="button"
                className="text-white w-[25%] min-w-[100px] sm:min-w-[120px] sm:h-[50px] cursor-pointer bg-prime hover:bg-second font-medium rounded-lg text-sm px-5 py-2.5 transform hover:scale-105 transition-transform duration-300"
                style={{ fontSize: 'clamp(12px, 2.5vw, 20px)' }}
            >
                Contact
            </button>
        </div>

    </section>
);

export default ContactSection;