import React, { useState } from 'react';
import DatePickerInput from '../datepicker';
import CounterInput from '../counterinput';
import DropdownInput from '../dropdowninput';
import AddressInput from '../adressinput';

// icons
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { PiBowlFood } from "react-icons/pi";

interface FormsData {
    feastType: string;
    selectedDate: Date | null;
    people: number | null;
    feastDropdown: string;
    location: string
}

interface FormsErrors {
    feastType: string;
    selectedDate: string;
    people: string;
    feastDropdown: string;
    location: string
}



const ReserveSection: React.FC = () => {
    const [formsData, setFormsData] = useState<FormsData>({
        feastType: '',
        selectedDate: null,
        people: null,
        feastDropdown: '',
        location: ''
    });

    const [formsErrors, setFormsErrors] = useState<FormsErrors>({
        feastType: '',
        selectedDate: '',
        people: '',
        feastDropdown: '',
        location: ''
    });


    const updateField = <K extends keyof FormsData>(field: K, value: FormsData[K]) => {
        setFormsData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    };

    const handleSubmit = () => {
        setFormsErrors((prevData) => ({
            ...prevData,
            people: "This field is required",
            location: "This field is required",
            feastType: "This field is required",
            selectedDate: "This field is required",
            feastDropdown: "This field is required",

        }))


    }

    return (
        <section
            id="section3"
            className="min-h-[500px] md:min-h-[750px] max-h-[1000px] w-full overflow-x-hidden flex 
                 flex-col sm:flex-row justify-start items-center bg-background px-4 sm:px-6"
        >
            <div className="flex-5">
                <h2 className="text-3xl font-semibold mb-4">Reserve</h2>
                <p className="text-lg text-gray-700 max-w-2xl text-center">
                    We offer a wide range of catering services to suit your needs
                </p>
                <div className="space-y-4 flex flex-col justify-evenly items-start h-full">
                    {/* Counter input for people */}
                    <CounterInput
                        icon={<FaRegUser />}
                        label="Persons"
                        value={formsData.people}
                        onChange={(newValue) => updateField('people', newValue)}
                        error={formsErrors.people}
                    />

                    {/* Date picker */}
                    <DatePickerInput
                        icon={<IoCalendarOutline />}
                        label="Date of Feast"
                        selected={formsData.selectedDate}
                        onChange={(newValue) => updateField('selectedDate', newValue)}
                        error={formsErrors.selectedDate}

                    />

                    {/* Dropdown input for feast type */}
                    <DropdownInput
                        icon={<PiBowlFood />}
                        label="Type of Feast"
                        options={[
                            { label: "Silk Feast", value: "Silk Feast" },
                            { label: "Pearl Feast", value: "Pearl Feast" },
                            { label: "Jade Feast", value: "Jade Feast" }
                        ]}
                        value={formsData.feastDropdown}
                        onChange={(newValue) => updateField('feastDropdown', newValue)}
                        error={formsErrors.feastDropdown}

                    />

                    <AddressInput
                        icon={<IoLocationOutline />}
                        label="Place of Feast"
                        value={formsData.location}
                        onChange={(e) => updateField('location', e.target.value)}
                        error={formsErrors.location}


                    />
                    <button
                        type="button"
                        className="relative w-[50%] min-w-[100px] sm:min-w-[120px] sm:h-[50px] inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 transform hover:scale-105 transition-transform duration-300"
                        onClick={handleSubmit}
                    >
                        <span
                            className="w-full h-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-background dark:text-prime rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent hover:text-background"
                            style={{ fontSize: 'clamp(12px, 2.5vw, 20px)' }}
                        >
                            Check Availability
                        </span>
                    </button>
                </div>

            </div>
            <div className="flex-5">{/* Additional content can go here */}</div>
        </section>
    );
};

export default ReserveSection;
