// components/Input.tsx
import React, { InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    containerClassName?: string;
    inputClassName?: string;
    labelClassName?: string;
    icon: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
    label,
    containerClassName = '',
    inputClassName = '',
    labelClassName = '',
    icon,
    ...inputProps
}, ref) => {
    return (
        // Outer wrapper with gradient background and slight padding to simulate a border
        <div
            className={`relative min-w-[10rem] h-full inline-flex items-center justify-center 
        p-[2px] bg-gradient-to-br from-prime to-second rounded-lg 
        transform hover:scale-105 transition-transform duration-300 ${containerClassName}`}
        >
            {/* Inner container with a solid background */}
            <div className="relative w-full h-full bg-background rounded-lg">

                <div className="absolute inset-y-0 top-0 left-0 flex items-center pl-2 pointer-events-none z-50">
                    {icon}
                </div>

                <input
                    {...inputProps}
                    ref={ref}
                    placeholder=" " // Ensures that :placeholder-shown works as intended
                    className={`h-full py-2 bg-transparent outline-none peer pl-8 ${inputClassName}`}
                />
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
});

Input.displayName = 'Input';


export default Input;
