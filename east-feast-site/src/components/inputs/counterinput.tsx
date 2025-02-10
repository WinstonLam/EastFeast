// components/PeopleInput.tsx
import React, { useState } from 'react';
import { IoWarningOutline } from "react-icons/io5";


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
    error?: string
}

const CounterInput: React.FC<CounterInputProps> = ({
    label,
    value = 0,
    onChange,
    containerClassName = '',
    inputClassName = '',
    labelClassName = '',
    icon,
    error
}) => {

    const [focused, setFocused] = useState(false)

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
        <div className='flex flex-col justify-around '>
            <div
                className={`relative w-[8rem] h-full inline-flex items-center justify-center 
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
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={handleIncrement}
                        className={`absolute cursor-pointer px-2 flex items-center justify-center select-none right-1 top-[5px] opacity-0 pointer-events-none
                                group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-all duration-300 
            ${value !== null && focused ? "opacity-100 pointer-events-auto" : ""}`}
                    >
                        <div className='transition-all duration-300 hover:bg-red-300 active:bg-red-500 w-6 h-6 rounded-[5px] flex items-center justify-center translate-y-[1px]'>
                            <span className=" bg-background text-gradient font-bold text-2xl -translate-y-[2px]">+</span>
                        </div>

                    </div>

                    {/* Input field */}
                    <input
                        value={value ? value.toString() : ""}
                        onChange={handleInputChange}
                        inputMode="numeric"
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.currentTarget.blur();
                            }
                        }}
                        placeholder="0"
                        pattern="[0-9]*"
                        maxLength={4}
                        className={`w-full h-full py-2 pl-5 bg-transparent outline-none text-center peer ${inputClassName}`}
                    />


                    {/* Minus button (decrement): hidden by default, shows when input is focused */}
                    <div

                        onMouseDown={(e) => e.preventDefault()}
                        onClick={handleDecrement}
                        className={`absolute cursor-pointer px-2 flex items-center justify-center select-none left-6 top-[6px] opacity-0 pointer-events-none
                    group-focus-within:pointer-events-auto group-focus-within:opacity-100 transition-all duration-300 ${value !== null && focused ? "opacity-100 pointer-events-auto" : ""}`}
                    >
                        <div className='transition-all duration-300 hover:bg-red-300 active:bg-red-500 w-6 h-6 rounded-[5px] flex items-center justify-center translate-y-[2px]'>

                            <span className="bg-background text-gradient font-bold text-2xl -translate-y-[3px]">-</span>
                        </div>
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
            <div className={`flex items-start opacity-0 pointer-events-none transition-opacity duration-300 w-full min-w-[8rem]  ${error && !focused && !value ? "opacity-100 pointer-events-auto" : ""}`}>
                <IoWarningOutline className='mt-[3px] text-red-500' />
                <span className="text-red-500 font-bold text-sm">{error}</span>
            </div>

        </div>

    );
};

export default CounterInput;
