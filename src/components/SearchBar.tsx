import { useState } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
    query: string;
    onChange: (value: string) => void;
}

export default function SearchBar({ query, onChange }: SearchBarProps) {

    return (
        <div className="flex items-center w-full max-w-xl border border-blue-500 rounded-md px-4 py-2">
            <input
                type="text"
                placeholder="Search note..."
                value={query}
                onChange={(e) => onChange(e.target.value)}
                className="flex-1 text-white placeholder:text-gray-400 outline-none"
            />
            <Search className="text-blue-500" size={20} />
        </div>
    );
}
