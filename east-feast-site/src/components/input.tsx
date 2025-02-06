// components/Input.tsx
import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    containerClassName?: string;
    inputClassName?: string;
    labelClassName?: string;
}

const Input: React.FC<InputProps> = ({
    label,
    containerClassName = '',
    inputClassName = '',
    labelClassName = '',
    ...inputProps
}) => {
    return (
        <div
            className={`relative w-[25%] min-w-[100px] sm:min-w-[120px] sm:h-[50px] inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg 
                  group bg-gradient-to-br from-pink-500 to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 transform hover:scale-105 transition-transform duration-300
                  ${containerClassName}`}
        >
            {/* Inner container for the input and label */}
            <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-lg">
                <input
                    {...inputProps}
                    placeholder=" "
                    className={`w-full h-full px-3 py-2 bg-transparent outline-none peer ${inputClassName}`}
                />
                <label
                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-all duration-300 
                      peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
                      peer-focus:top-0 peer-focus:text-xs ${labelClassName}`}
                >
                    {label}
                </label>
            </div>
        </div>
    );
};

export default Input;
