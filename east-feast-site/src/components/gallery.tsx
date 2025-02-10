import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryProps {
    images: React.ReactElement[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const [paused, setPaused] = useState(false);
    const [enlargedImage, setEnlargedImage] = useState<React.ReactElement | null>(null);

    const handleMouseEnter = () => setPaused(true);
    const handleMouseLeave = () => setPaused(false);
    const handleClick = (img: React.ReactElement) => setEnlargedImage(img);
    const closeModal = () => setEnlargedImage(null);

    // Duplicate images for a continuous looping effect.
    const duplicatedImages = [...images, ...images];

    return (
        <div>
            {/* Desktop Gallery: Two columns scrolling vertically */}
            <div
                className="hidden md:block overflow-hidden relative h-96"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className="grid grid-cols-2 gap-4 animate-scroll-vertical"
                    style={{ animationPlayState: paused ? 'paused' : 'running' }}
                >
                    {duplicatedImages.map((img, idx) => (
                        <div
                            key={idx}
                            className="cursor-pointer"
                            onClick={() => handleClick(img)}
                        >
                            <div className="rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                {img}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Gallery: Two rows scrolling horizontally */}
            <div
                className="md:hidden overflow-hidden relative h-64"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className="flex flex-col gap-4 animate-scroll-horizontal"
                    style={{ animationPlayState: paused ? 'paused' : 'running' }}
                >
                    {duplicatedImages.map((img, idx) => (
                        <div
                            key={idx}
                            className="cursor-pointer"
                            onClick={() => handleClick(img)}
                        >
                            <div className="rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                {img}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for enlarged image */}
            {enlargedImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    onClick={closeModal}
                >
                    <div className="max-w-3xl max-h-full">
                        <div className="rounded-lg overflow-hidden">
                            {enlargedImage}
                        </div>
                    </div>
                </div>
            )}

            {/* Inline global styles for scrolling animations */}
            <style jsx global>{`
        @keyframes scrollVertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-scroll-vertical {
          animation: scrollVertical 10s linear infinite;
        }

        @keyframes scrollHorizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-horizontal {
          animation: scrollHorizontal 10s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default Gallery;
