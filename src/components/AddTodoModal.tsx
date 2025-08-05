import { useState } from "react";

interface AddTodoModalProps {
    onCancel: () => void;
    onSubmit: (note: string) => void;
}

export default function AddTodoModal({ onCancel, onSubmit }: AddTodoModalProps) {
    const [note, setNote] = useState("");

    const handleSubmit = () => {
        if (note.trim()) {
            onSubmit(note.trim());
            setNote("");
        }
    };

    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div className="bg-themeWhite dark:bg-themeBlack rounded-3xl p-6 w-[90%] max-w-md shadow-lg transition-colors duration-300">
                <h2 className="text-xl font-bold text-center text-themeBlack dark:text-themeWhite mb-6">
                    NEW NOTE
                </h2>

                <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Input your note..."
                    className="w-full border border-themeBlue text-themeBlack dark:text-themeWhite dark:bg-themeBlack dark:placeholder-gray-400 placeholder-themeBlue rounded-lg px-4 py-3 mb-10 focus:outline-none focus:ring-2 focus:ring-themeBlue"
                />

                <div className="flex justify-between">
                    <button
                        onClick={onCancel}
                        className="border border-themeBlue text-themeBlue dark:text-themeBlue dark:border-themeBlue font-bold px-6 py-2 rounded-lg hover:bg-themeBlue hover:text-white transition"
                    >
                        CANCEL
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-themeBlue text-white font-bold px-6 py-2 rounded-lg hover:bg-indigo-600 transition"
                    >
                        APPLY
                    </button>
                </div>
            </div>
        </div>
    );
}
