import { Trash, Pencil } from 'lucide-react'
import type { Todo } from '../types/todo'

interface TodoItemProps {
    todo: Todo
    onToggle: (todo: Todo) => void
    onDelete: (id: number) => void
    onEdit?: (todo: Todo) => void
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
    return (
        <div className='flex items-center justify-between border-b py-2'>
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo)}
                    className="w-5 h-5 accent-violet-500 dark:accent-themeBlue border-gray-400 dark:border-themeBlack"
                />

                <span className={`text-lg ${todo.completed ? 'line-through text-gray-400' : 'font-bold'}`}>
                    {todo.title}
                </span>
            </div>
            <div className="flex items-center gap-3">
                <button
                    onClick={() => onEdit?.(todo)}
                    className="text-gray-400 hover:text-gray-700"
                >
                    <Pencil className="w-5 h-5" />
                </button>
                <button
                    onClick={() => onDelete(todo.id)}
                    className="text-gray-400 hover:text-red-700"
                >
                    <Trash className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}
