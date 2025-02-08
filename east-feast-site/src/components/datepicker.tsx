// components/DatePicker.tsx
import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { InputProps } from './input';
import { useMask } from "@react-input/mask";



export interface DatePickerProps extends Omit<InputProps, "type" | "onChange"> {
    selected: Date | null;
    onChange: (date: Date | null) => void;
    calendarClassName?: string;
    popperClassName?: string;
}

const DatePickerInput: React.FC<DatePickerProps> = ({
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
    const inputRef = useMask({
        mask: "__/__/____",
        replacement: { _: /\d/ },
    });
    const CustomInput = forwardRef<HTMLInputElement, React.HTMLProps<HTMLInputElement>>(
        (props) => {
            return (
                <div
                    className={`relative w-full h-full inline-flex items-center justify-center 
            p-[2px] bg-gradient-to-br from-prime to-second rounded-lg 
             hover:scale-105 transition-transform duration-300 ${containerClassName}`}
                >
                    <div className="relative w-full h-full bg-background rounded-lg">
                        {icon && (
                            <div className="absolute inset-y-0 top-0 left-0 flex items-center pl-2 pointer-events-none z-50">
                                {icon}
                            </div>
                        )}
                        <input
                            {...props}
                            ref={inputRef}
                            placeholder={`dd/mm/yyy`} // Ensures :placeholder-shown works correctly.
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
        }
    );

    // Provide a display name to fix the "missing display name" ESLint error.
    CustomInput.displayName = 'CustomInput';

    return (
        <div >
            <DatePicker
                selected={selected}
                minDate={new Date()}
                onChange={onChange}
                customInput={<CustomInput />}

                dateFormat="dd/MM/yyyy" // Set the date format to dd/MM/yyyy

                calendarClassName={`  custom-datepicker rounded-lg shadow-md duration-300 animate-fadeIn ${calendarClassName}`}
                popperClassName={`  duration-300  ${popperClassName}`}
            />
        </div>
    );
};

export default DatePickerInput;
