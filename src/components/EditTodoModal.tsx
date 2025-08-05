import { useEffect, useState } from "react";

interface EditTodoModalProps {
    initialValue: string;
    onCancel: () => void;
    onSubmit: (updatedNote: string) => void;
}

export default function EditTodoModal({ initialValue, onCancel, onSubmit }: EditTodoModalProps) {
    const [note, setNote] = useState("");

    useEffect(() => {
        setNote(initialValue);
    }, [initialValue]);

    const handleSubmit = () => {
        if (note.trim()) {
            onSubmit(note.trim());
        }
    };

    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div className="bg-themeWhite dark:bg-themeBlack rounded-3xl p-6 w-[90%] max-w-md shadow-lg transition-colors duration-300">
                <h2 className="text-xl font-bold text-center text-themeBlack dark:text-themeWhite mb-6">EDIT NOTE</h2>
                <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Edit your note..."
                    className="w-full border border-[#6C63FF] dark:border-[#574eea] text-[#252525] dark:text-gray-100 placeholder-[#6C63FF] dark:placeholder-[#8b85ff] rounded-lg px-4 py-3 mb-10 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] dark:focus:ring-[#574eea]"
                />
                <div className="flex justify-between">
                    <button
                        onClick={onCancel}
                        className="border border-[#6C63FF] dark:border-[#574eea] text-[#6C63FF] dark:text-[#8b85ff] font-bold px-6 py-2 rounded-lg hover:bg-[#6C63FF] hover:text-white dark:hover:bg-[#574eea] transition"
                    >
                        CANCEL
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-[#6C63FF] dark:bg-[#574eea] text-white font-bold px-6 py-2 rounded-lg hover:bg-[#574eea] dark:hover:bg-[#4338ca] transition"
                    >
                        APPLY
                    </button>
                </div>
            </div>
        </div>
    );
}