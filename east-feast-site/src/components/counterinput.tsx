// components/PeopleInput.tsx
import React from 'react';

export interface CounterInputProps {
    /** The label that appears above the input */
    label: string;
    /** The current numeric value */
    value: number | null;
    /** Called when the value changes */
    onChange: (newValue: number) => void;
    /** Optional classes to override the outer container styles */
    containerClassName?: string;
    /** Optional classes to override the input styles */
    inputClassName?: string;
    /** Optional classes to override the label styles */
    labelClassName?: string;
    /** An icon to display inside the input */
    icon: React.ReactNode;
}

const CounterInput: React.FC<CounterInputProps> = ({
    label,
    value,
    onChange,
    containerClassName = '',
    inputClassName = '',
    labelClassName = '',
    icon,
}) => {
    // Handler to update the value when the user types.
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const digitsOnly = inputValue.replace(/\D/g, '');
        const newValue = digitsOnly ? parseInt(digitsOnly, 10) : 0;
        onChange(newValue);
    };

    // Increment the value by one.
    const handleIncrement = () => {
        if (value) {
            onChange(value + 1);
        } else {
            onChange(1);
        }
    };

    // Decrement the value by one (prevent going below 0).
    const handleDecrement = () => {
        if (value && value > 0) {
            onChange(value - 1);
        } else {
            onChange(0);
        }
    };


    return (
        // Add the "group" class here so child elements can react to focus-within.
        <div
            className={`relative min-w-[8rem] h-full inline-flex items-center justify-center 
        p-[2px] bg-gradient-to-br from-prime to-second rounded-lg 
        transform hover:scale-105 transition-transform duration-300 ${containerClassName} group`}
        >
            <div className="relative w-[8rem] h-full bg-background rounded-lg">
                {/* Icon (always visible) */}
                <div className="absolute inset-y-0 top-0 left-0 flex items-center pl-2 pointer-events-none z-50">
                    {icon}
                </div>

                {/* Plus button */}
                <div
                    onClick={handleIncrement}
                    className={`absolute cursor-pointer px-2 flex items-center justify-center select-none right-2 top-0 opacity-0 pointer-events-none
                                group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity duration-300
            ${value ? "opacity-100 pointer-events-auto" : ""}`}
                >
                    <span className="bg-background text-gradient font-bold text-2xl">+</span>
                </div>

                {/* Input field */}
                <input
                    value={value ? value.toString() : ""}
                    onChange={handleInputChange}
                    inputMode="numeric"
                    placeholder=" " // Ensures that :placeholder-shown works as intended
                    pattern="[0-9]*"
                    maxLength={4}
                    className={`w-full h-full py-2 pl-3 bg-transparent outline-none text-center peer ${inputClassName}`}
                />

                {/* Minus button (decrement): hidden by default, shows when input is focused */}
                <div
                    onClick={handleDecrement}
                    className={`absolute cursor-pointer px-2 flex items-center justify-center select-none left-6 top-0 opacity-0 pointer-events-none
                    group-focus-within:pointer-events-auto group-focus-within:opacity-100 transition-opacity duration-300  ${value ? "opacity-100 pointer-events-auto" : ""}`}
                >
                    <span className="bg-background text-gradient font-bold text-2xl">-</span>
                </div>

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
            </div>
        </div>
    );
};

export default CounterInput;
