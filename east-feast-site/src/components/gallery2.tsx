// components/Gallery.tsx
'use client';
import {
    useState,
    useCallback,
    useEffect,
    ReactElement,
    cloneElement,
    ComponentProps
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

type ImageProps = ComponentProps<typeof Image>;

interface GalleryProps {
    images: ReactElement<ImageProps>[];
}

const Gallery2 = ({ images }: GalleryProps) => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(true);

    // Duplicate images for seamless loop
    const duplicatedImages = [...images, ...images];

    // Animation control
    const handleHover = useCallback((isHovering: boolean) => {
        setIsAnimating(!isHovering);
    }, []);

    // Image click handler
    const handleImageClick = useCallback((index: number) => {
        setSelectedImage(index % images.length);
    }, [images.length]);

    // Close modal
    const closeModal = useCallback(() => setSelectedImage(null), []);

    return (
        <div className="relative h-[600px] overflow-hidden group">
            {/* Animated gallery */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full w-full"
                animate={{ y: ['0%', '-50%'] }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatType: 'loop',
                }}
                style={{ animationPlayState: isAnimating ? 'running' : 'paused' }}
            >
                {duplicatedImages.map((image, index) => (
                    <motion.div
                        key={`${image.key}-${index}`}
                        className="relative cursor-pointer rounded-2xl overflow-hidden"
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 }
                        }
                        }
                        onHoverStart={() => handleHover(true)}
                        onHoverEnd={() => handleHover(false)}
                        onClick={() => handleImageClick(index)}
                    >
                        {cloneElement(image, {
                            ...image.props,
                            className: `${image.props.className} w-full h-full object-cover`,
                            sizes: "(max-width: 768px) 100vw, 50vw",
                        })}
                    </motion.div>
                ))}
            </motion.div>

            {/* Lightbox modal */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <div className="relative max-w-4xl max-h-[90vh]">
                            <Image
                                {...images[selectedImage].props}
                                className="object-contain rounded-lg"
                            />
                            <button
                                className="absolute -top-8 right-0 text-white text-lg"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery2;