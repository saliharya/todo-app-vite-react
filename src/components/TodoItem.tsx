import type { Todo } from '../types/todo'

interface TodoItemProps {
    todo: Todo
    onToggle: (todo: Todo) => void
    onDelete: (id: number) => void
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
    return (
        <div className='flex items-center justify-between border-b py-2'>
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo)}
                    className="w-5 h-5 text-violet-500"
                />
                <span className={`text-lg ${todo.completed ? 'line-through text-gray-400' : 'font-bold'}`}>
                    {todo.title}
                </span>
            </div>
            <button
                onClick={() => onDelete(todo.id)}
                className="text-red-500 hover:text-red-700"
            >
                🗑️
            </button>
        </div>
    )
}
