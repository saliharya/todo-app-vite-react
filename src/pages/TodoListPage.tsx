import TodoItem from "../components/TodoItem"
import TodoForm from "../components/TodoForm"
import { useTodos } from "../hooks/useTodos"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



export default function TodoListPage() {
    const { todos, fetchTodos, addTodo, toggleTodo, deleteTodo } = useTodos();
    const navigate = useNavigate();

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="max-w-xl mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4 text-center">Todo List</h1>

            <TodoForm onAdd={addTodo} />

            {todos.length === 0 ? (
                <p className="text-center text-gray-500 mt-4">No todos available</p>
            ) : (
                <ul className="space-y-2 mt-4">
                    {todos.map(todo => (
                        <li
                            key={todo.id}
                            onClick={() => navigate(`/todo/${todo.id}`)}
                            className="cursor-pointer hover:bg-gray-50 rounded px-2"
                        >
                            <TodoItem
                                todo={todo}
                                onToggle={toggleTodo}
                                onDelete={deleteTodo}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
