import React, { useState, cloneElement } from 'react';
import Image, { ImageProps } from 'next/image';
import { IoClose } from "react-icons/io5";

interface GalleryProps {
    images: React.ReactElement[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const [paused, setPaused] = useState(false);
    const [enlargedImage, setEnlargedImage] = useState<React.ReactElement | null>(null);

    const handleMouseEnter = () => setPaused(true);
    const handleMouseLeave = () => setPaused(false);
    const handleClick = (img: React.ReactElement) => {
        setPaused(true);
        setEnlargedImage(img);
    };
    const closeModal = () => {
        setPaused(false);
        setEnlargedImage(null);
    };

    // Duplicate images for continuous looping.
    const duplicatedImages = [...images, ...images];
    // Pause animation when hovering or when an image is enlarged.
    const animationPlayState = paused || enlargedImage ? 'paused' : 'running';

    // Wrap the passed image with styling using cloneElement.
    const renderStyledImage = (img: React.ReactElement) => (
        <div className="relative w-full h-48">
            {cloneElement(img as React.ReactElement<ImageProps>, {
                className: "w-full h-full object-cover rounded-2xl",
                sizes: "(max-width: 768px) 100vw, 50vw",
            })}
        </div>
    );

    // Similar styling for the modal image.
    const renderModalImage = (img: React.ReactElement) => (
        <div className="relative w-full h-full">
            <button
                onClick={closeModal}
                className="absolute top-4 left-4 z-50 p-2 bg-white/80 rounded-full shadow-lg hover:bg-prime text-white transition-all duration-300"
            >
                <IoClose className="w-8 h-8" />
            </button>
            {cloneElement(img as React.ReactElement<ImageProps>, {
                className: "w-full h-full object-cover rounded-2xl",
                sizes: "(max-width: 768px) 100vw, 50vw",
            })}
        </div>
    );

    return (
        <div className="relative">
            {/* Desktop Gallery: Two columns scrolling vertically */}
            <div
                className="hidden md:block relative h-[900px]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="overflow-hidden h-full rotate-[-11deg]">
                    <div
                        className="grid grid-cols-2 gap-4 animate-scroll-vertical"
                        style={{
                            animationPlayState,
                            "--scroll-duration": `${duplicatedImages.length * 2}s`
                        } as React.CSSProperties}
                    >
                        {duplicatedImages.map((img, idx) => (
                            <div key={idx} className="cursor-pointer" onClick={() => handleClick(img)}>
                                <div className="rounded-lg overflow-visible transform transition-transform duration-300 hover:scale-105 m-[4px]">
                                    {renderStyledImage(img)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Gallery: Horizontal scrolling */}
            <div
                className="md:hidden relative h-50 overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className="flex gap-2 animate-scroll-horizontal w-[700px]"
                    style={{
                        animationPlayState,
                        "--scroll-duration": `${duplicatedImages.length * 3}s`
                    } as React.CSSProperties}
                >
                    {duplicatedImages.map((img, idx) => (
                        <div
                            key={idx}
                            className="cursor-pointer flex-none w-[300px] " // fixed width to avoid thinning
                            onClick={() => handleClick(img)}
                        >
                            <div className="rounded-lg overflow-visible transform transition-transform duration-300 hover:scale-105">
                                {renderStyledImage(img)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for enlarged image */}
            {enlargedImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"></div>
                    {/* Modal content */}
                    <div className="relative w-full h-96 max-w-3xl transform transition-transform duration-300 scale-100 rounded-lg overflow-hidden">
                        {renderModalImage(enlargedImage)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
