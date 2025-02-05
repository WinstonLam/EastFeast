// components/LoadingScreen.tsx
import React, { useEffect } from 'react';

interface LoadingScreenProps {
    onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
    useEffect(() => {
        // When the animation is done (here set to 3500ms), notify the parent.
        const timer = setTimeout(() => {
            onComplete();
        }, 4200);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50">
            <div className="relative flex flex-col items-center justify-center">
                {/* Animated ring drawn as an SVG */}
                <svg
                    className="absolute w-40 h-40e mr-[5px] mb-[42px]"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#D3321D"
                        strokeWidth="5"
                        strokeDasharray="282.743"
                        strokeDashoffset="282.743"
                        className="animate-ringFill"
                    />
                </svg>
                {/* Logo image with fade-in and glow effect */}
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-32 h-32 animate-fadeInGlow rounded-[8rem]"
                />
                {/* Title below the logo with a slide-up fade-in effect */}
                <h1 className="mt-4 text-3xl font-bold text-gradient animate-textFadeIn">
                    EastFeast Catering
                </h1>
            </div>
        </div>
    );
};

export default LoadingScreen;
