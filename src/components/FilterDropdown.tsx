import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FilterDropdownProps {
    value: string;
    onChange: (newValue: string) => void;
}

const options = ["All", "Complete", "Incomplete"];

export default function FilterDropdown({ value, onChange }: FilterDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold w-38 py-2 px-4 rounded-xl flex items-center gap-2 justify-between overflow-hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {value.toUpperCase()}
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-indigo-500 rounded-xl shadow-lg overflow-hidden">
                    {options.map((option) => (
                        <button
                            key={option}
                            className={`block w-full text-left px-4 py-2 text-indigo-500 hover:bg-indigo-100 hover:text-indigo-700 font-semibold`}
                            onClick={() => {
                                onChange(option);
                                setIsOpen(false);
                            }}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
