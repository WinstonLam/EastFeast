// components/DropdownInput.tsx
import React, { useState, useRef, useEffect } from 'react';

export interface Option {
    label: string;
    value: string;
}

export interface DropdownInputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    /** The label that appears above the input */
    label: string;
    /** Classes to override the outer container styles */
    containerClassName?: string;
    /** Classes to override the input styles */
    inputClassName?: string;
    /** Classes to override the label styles */
    labelClassName?: string;
    /** An icon to display inside the input */
    icon: React.ReactNode;
    /** The available options */
    options: Option[];
    /** The currently selected value */
    value: string;
    /** Called when a new value is selected */
    onChange: (value: string) => void;
}

const DropdownInput: React.FC<DropdownInputProps> = ({
    label,
    containerClassName = '',
    inputClassName = '',
    labelClassName = '',
    icon,
    options,
    value,
    onChange,
    ...inputProps
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Find the label for the currently selected value.
    const selectedOption = options.find((option) => option.value === value);

    return (
        <div
            ref={containerRef}
            className={`relative inline-flex flex-col ${containerClassName}`}
        >
            {/* Input Container */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="relative min-w-[10rem] h-full inline-flex items-center justify-center 
          p-[2px] bg-gradient-to-br from-prime to-second rounded-lg 
          transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
                <div className="relative w-full h-full bg-background rounded-lg">
                    {/* Icon */}
                    <div className="absolute inset-y-0 top-0 left-0 flex items-center pl-2 pointer-events-none z-50">
                        {icon}
                    </div>

                    {/* Read-only input displays the selected option label */}
                    <input
                        readOnly
                        value={selectedOption ? selectedOption.label : ''}
                        placeholder=" " // Ensures that :placeholder-shown works as intended
                        className={`cursor-pointer h-full py-2 bg-transparent outline-none peer pl-8 pr-10 ${inputClassName}`}
                        {...inputProps}
                    />

                    {/* Floating label */}
                    <label
                        className={`absolute left-3 transform -translate-y-1/2 text-prime pointer-events-none cursor-pointer
              transition-all duration-300 text-xs
              peer-placeholder-shown:top-[47%] peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:left-6
              peer-focus:top-0 peer-focus:text-xs peer-focus:bg-background peer-focus:text-prime peer-focus:left-3 
              px-1 bg-background z-10 ${labelClassName}`}
                    >
                        {label}
                    </label>

                    {/* Dropdown arrow (triangle/chevron) */}
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg
                            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
                                }`}
                            viewBox="0 0 20 20"
                            fill="prime"
                        >
                            {/* This path draws a chevron (triangle-like arrow) with smooth curves */}
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 
                   1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Dropdown Options List */}

            <div className={`absolute mt-10 w-full bg-background rounded-lg shadow-lg max-h-60 overflow-y-auto z-50
        transtion-all duration-300 ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`} >
                {options.map((option) => (
                    <div
                        key={option.value}
                        onClick={() => {
                            onChange(option.value);
                            setIsOpen(false);
                        }}
                        className="cursor-pointer px-4 py-2 hover:bg-prime transtion-all duration-300"
                    >
                        {option.label}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default DropdownInput;
