import React, { useState } from 'react';
import Input from '../input';
import DatePicker from '../datepicker';
import { IoCalendarOutline } from "react-icons/io5";

const ReserveSection: React.FC = () => {
    // State for the feast type input field.
    const [feastType, setFeastType] = useState<string>('');
    // State for the datepicker.
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return (
        <section
            id="section3"
            className="relative min-h-[500px] md:min-h-[750px] max-h-[1000px] w-full overflow-x-hidden flex 
                 flex-col sm:flex-row justify-start items-center bg-background px-4 sm:px-6"
        >
            <div className="flex-5">
                <h2 className="text-3xl font-semibold mb-4">Reserve</h2>
                <p className="text-lg text-gray-700 max-w-2xl text-center">
                    We offer a wide range of catering services to suit your needs
                </p>
                <div className="space-y-4">
                    <Input
                        label="Type of Feasts"
                        containerClassName="min-w-[150px]"
                        icon={<IoCalendarOutline />}
                        value={feastType}
                        onChange={(e) => setFeastType(e.target.value)}
                    />
                    <DatePicker
                        icon={<IoCalendarOutline />}
                        label="Date of Feast"
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                    />
                </div>
            </div>
            <div className="flex-5">{/* Additional content can go here */}</div>
        </section>
    );
};

export default ReserveSection;
