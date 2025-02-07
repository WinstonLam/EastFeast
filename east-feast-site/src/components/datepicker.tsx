// components/DatePicker.tsx
import React, { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { InputProps } from './input';

export interface DatePickerProps extends Omit<InputProps, "type" | "onChange"> {
    selected: Date | null;
    onChange: (date: Date | null) => void;
    calendarClassName?: string;
    popperClassName?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
    label,
    containerClassName = '',
    inputClassName = '',
    labelClassName = '',
    icon,
    selected,
    onChange,
    calendarClassName = '',
    popperClassName = '',
}) => {
    const CustomInput = forwardRef<HTMLInputElement, any>((props, ref) => {
        return (
            <div
                className={`relative w-full h-full inline-flex items-center justify-center 
          p-[2px] bg-gradient-to-br from-prime to-second rounded-lg 
          transform hover:scale-105 transition-transform duration-300 ${containerClassName}`}
            >
                <div className="relative w-full h-full bg-background rounded-lg">
                    {icon && (
                        <div className="absolute inset-y-0 top-0 left-0 flex items-center pl-2 pointer-events-none z-50">
                            {icon}
                        </div>
                    )}
                    <input
                        {...props}
                        ref={ref}
                        placeholder=" "
                        className={`w-full h-full py-2 bg-transparent outline-none peer pl-8 ${inputClassName}`}
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

    return (
        <ReactDatePicker
            selected={selected}
            onChange={onChange}
            customInput={<CustomInput />}
            calendarClassName={`custom-datepicker rounded-lg shadow-md transition-all duration-300 animate-fadeIn ${calendarClassName}`}
            popperClassName={`z-50 transition-all duration-300 animate-fadeIn ${popperClassName}`}
        />
    );
};

export default DatePicker;
