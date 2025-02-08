// components/AddressInput.tsx
import React, { useState } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';

export interface AddressInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    icon?: React.ReactNode;
    onAddressSelected?: (place: google.maps.places.PlaceResult) => void;
}

const AddressInput: React.FC<AddressInputProps> = ({
    label,
    icon,
    onAddressSelected,
    ...inputProps
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string;

    const { ref: autoCompleteRef } = usePlacesWidget<HTMLInputElement>({
        apiKey,
        onPlaceSelected: (place) => {
            onAddressSelected?.(place);
        },
        options: {
            types: ['address'],
        },
    });

    // Handlers to update focus state
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        if (inputProps.onFocus) {
            inputProps.onFocus(e);
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        if (inputProps.onBlur) {
            inputProps.onBlur(e);
        }
    };

    return (
        <div
            className="relative min-w-[10rem] h-full inline-flex items-center justify-center 
             p-[2px] bg-gradient-to-br from-prime to-second rounded-lg 
             transform hover:scale-105 transition-transform duration-300"
        >
            <div className="relative w-full h-full bg-background rounded-lg">
                {icon && (
                    <div className="absolute inset-y-0 top-0 left-0 flex items-center pl-2 pointer-events-none z-50">
                        {icon}
                    </div>
                )}
                <input
                    {...inputProps}
                    ref={autoCompleteRef}
                    // Only show the placeholder when focused
                    placeholder={isFocused ? "Voorbeeldstraat 1" : ""}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="w-full h-full py-2 bg-transparent outline-none peer pl-8"
                />
                <label
                    className="absolute left-3 transform -translate-y-1/2 text-prime pointer-events-none cursor-pointer
                  transition-all duration-300 text-xs
                  peer-placeholder-shown:top-[47%] peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:left-6
                  peer-focus:top-0 peer-focus:text-xs peer-focus:bg-background peer-focus:text-prime peer-focus:left-3 
                  px-1 bg-background z-10"
                >
                    {label}
                </label>
            </div>
        </div>
    );
};

export default AddressInput;
