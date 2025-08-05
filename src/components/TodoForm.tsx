import { useState } from "react";

interface TodoFormProps {
    onAdd: (title: string) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {

    const [title, setTitle] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (title.trim()) {
            onAdd(title.trim())
            setTitle('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new todo"
                className="flex-1 px-4 py-2 border rounded-md"
            />
            <button
                type="submit"
                className="bg-violet-500 text-white hover:bg-violet-600 px-4 py-2 rounded-md"
            >
                Add
            </button>
        </form>
    )
}
