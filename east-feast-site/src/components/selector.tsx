import React, { useState, useRef, useEffect } from 'react';

interface SelectorProps {
    boxNames?: string[];
    onChange?: (index: number) => void;
}

const Selector: React.FC<SelectorProps> = ({ boxNames = [], onChange }) => {
    const [boxNumber, setBoxNumber] = useState<number>(0);
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Update the container width on mount and resize
    const updateContainerWidth = () => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
        }
    };

    useEffect(() => {
        updateContainerWidth();
        window.addEventListener('resize', updateContainerWidth);
        return () => window.removeEventListener('resize', updateContainerWidth);
    }, []);

    const handleBoxClick = (index: number) => {
        setBoxNumber(index);
        onChange && onChange(index);
    };

    // Calculate the effective width per box
    const effectiveBoxWidth = boxNames.length ? containerWidth / boxNames.length : 0;

    return (
        <div className="w-[90%] h-full max-h-[75px] max-w-[750px] flex flex-col justify-evenly items-center">
            {/* Boxes Container */}
            <div ref={containerRef} className="flex justify-evenly w-full">
                {boxNames.map((boxName, index) => (
                    <div
                        key={boxName}
                        onClick={() => handleBoxClick(index)}
                        className={`
              hover:bg-second/30
              sm:min-w-[200px] h-[45px]
              flex items-center justify-center
              cursor-pointer transition-all duration-300 ease-in-out
              ${index === boxNumber ? 'scale-110 text-gradient' : ''}
            `}
                        style={{ fontSize: 'clamp(20px, 2vw, 26px)' }}
                    >
                        {boxName}
                    </div>
                ))}
            </div>

            {/* Selection Bar Container */}
            <div className="relative mx-auto" style={{ width: containerWidth, height: '10px' }}>
                <div className="bg-prime/30 h-[3px]" />
                <div
                    className="absolute top-0 left-0 h-[3px] rounded-[2rem] transition-transform duration-300 ease-in-out"
                    style={{
                        width: effectiveBoxWidth,
                        transform: `translateX(${boxNumber * effectiveBoxWidth}px)`,
                        background: 'var(--main)',
                    }}
                />
            </div>
        </div>
    );
};

export default Selector;
