import React, { useState } from 'react';
import DatePicker from '../datepicker';
import CounterInput from '../counterinput';
import DropdownInput from '../dropdowninput';

// icons
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { PiBowlFood } from "react-icons/pi";

interface FormsData {
    feastType: string;
    selectedDate: Date | null;
    people: number | null;
    feastDropdown: string;
}

const ReserveSection: React.FC = () => {
    const [formsData, setFormsData] = useState<FormsData>({
        feastType: '',
        selectedDate: null,
        people: null,
        feastDropdown: ''
    });

    const updateField = <K extends keyof FormsData>(field: K, value: FormsData[K]) => {
        setFormsData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    };

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
                    />

                    {/* Date picker */}
                    <DatePicker
                        icon={<IoCalendarOutline />}
                        label="Date of Feast"
                        selected={formsData.selectedDate}
                        onChange={(date) => updateField('selectedDate', date)}
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
                    />
                </div>
            </div>
            <div className="flex-5">{/* Additional content can go here */}</div>
        </section>
    );
};

export default ReserveSection;
