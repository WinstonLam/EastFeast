import React, { cloneElement, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ImageProps } from 'next/image';
import { IoClose } from "react-icons/io5";

interface ImageModalProps {
    image: React.ReactElement | null;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
    const [isBrowser, setIsBrowser] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // This ensures we only render the portal on the client side, not during SSR
    useEffect(() => {
        setIsBrowser(true);

        // Prevent scrolling when modal is open
        document.body.style.overflow = 'hidden';

        // Trigger animation after a small delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 50); // Small delay to ensure DOM is ready

        // Clean up when component unmounts
        return () => {
            document.body.style.overflow = '';
            clearTimeout(timer);
        };
    }, []);

    // Handle closing with animation
    const handleClose = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 300); // Match this delay with your transition duration
    };

    // Render the modal image with styling
    const renderModalImage = (img: React.ReactElement) => (
        <div className="relative w-full h-full">
            <button
                onClick={handleClose}
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

    // Only render on client-side
    if (!isBrowser) {
        return null;
    }

    const modalContent = (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out
                ${isVisible ? 'bg-black bg-opacity-70' : 'bg-black bg-opacity-0'}`}
            onClick={handleClose}
        >
            {/* Modal content with animation */}
            <div
                className={`relative w-[90%] lg:w-full h-auto max-w-3xl transform transition-all duration-300 ease-out
                    rounded-lg overflow-hidden z-50
                    ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                {image && renderModalImage(image)}
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default ImageModal;