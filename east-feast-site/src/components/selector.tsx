import React, { useState, useRef, useEffect } from 'react';

interface SelectorProps {
    boxNames?: string[];
    onChange?: (index: number) => void;
}

const Selector: React.FC<SelectorProps> = ({ boxNames = [], onChange }) => {
    const [boxNumber, setBoxNumber] = useState<number>(0);
    const [boxWidth, setBoxWidth] = useState<number>(0);
    const boxRef = useRef<HTMLDivElement>(null);

    const updateWidth = () => {
        if (boxRef.current) {
            setBoxWidth(boxRef.current.offsetWidth);
        }
    };

    useEffect(() => {
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const handleBoxClick = (index: number) => {
        setBoxNumber(index);
        if (onChange) {
            onChange(index);
        }
    };

    const totalWidth = boxNames.length * boxWidth;

    return (
        <div className="w-[90%] h-full max-h-[75px] overflow-auto flex flex-col justify-evenly items-center">
            {/* Boxes Container */}
            <div className="flex justify-center mx-auto" style={{ width: totalWidth }}>
                {boxNames.map((boxName, index) => (
                    <div
                        key={boxName}
                        onClick={() => handleBoxClick(index)}
                        // Attach ref only to the first box to measure its width
                        ref={index === 0 ? boxRef : null}
                        className={`
    
              hover:bg-second/30
              min-w-[100px] md:min-w-[150px] h-[45px]
              flex items-center justify-center
              cursor-pointer transition-all duration-300 ease-in-out
                        ${index === boxNumber ? 'scale-110 text-gradient' : ''}
            `}
                        style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
                    >
                        {boxName}
                    </div>
                ))}
            </div>

            {/* Selection Bar Container */}
            <div className="relative mx-auto" style={{ width: totalWidth, height: '10px' }}>
                <div className="bg-prime/30 h-[3px]" />
                <div
                    className="absolute top-0 left-0 h-[3px] w-[100px] md:w-[150px] rounded-[2rem] transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `translateX(${boxNumber * boxWidth}px)`,
                        background: 'var(--main)',
                    }}
                />
            </div>
        </div>
    );
};

export default Selector;
