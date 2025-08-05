import TodoItem from "../components/TodoItem";
import { useTodos } from "../hooks/useTodos";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import ThemeToggleButton from "../components/ThemeToggleButton";
import AddTodoModal from "../components/AddTodoModal";
import { Plus } from "lucide-react";
import type { Todo } from "../types/todo";
import EditTodoModal from "../components/EditTodoModal";
import DetectiveImage from "../assets/images/Detective-check-footprint 1.svg";

export default function TodoListPage() {
    const {
        todos,
        loading,
        fetchTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo
    } = useTodos();

    const [filter, setFilter] = useState("All");
    const [showModal, setShowModal] = useState(false);
    const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    useEffect(() => {
        fetchTodos();
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 300);

        return () => clearTimeout(handler);
    }, [search]);

    const filteredTodos = todos.filter((todo) => {
        const matchesFilter =
            filter === "All" ||
            (filter === "Complete" && todo.completed) ||
            (filter === "Incomplete" && !todo.completed);

        const matchesSearch = todo.title.toLowerCase().includes(debouncedSearch.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    return (
        <div className="max-w-3xl mx-auto mt-8 px-4 transition-colors duration-300 min-h-screen relative">
            <h1 className="text-3xl font-bold mb-4 text-center text-themeBlack dark:text-themeWhite">
                Todo List
            </h1>

            <div className="flex justify-between items-center gap-4 mb-4">
                <SearchBar query={search} onChange={setSearch} />
                <div className="flex items-center gap-2">
                    <FilterDropdown value={filter} onChange={setFilter} />
                    <ThemeToggleButton />
                </div>
            </div>

            {loading && todos.length === 0 ? (
                <div className="flex justify-center items-center h-60">
                    <div className="w-8 h-8 border-4 border-themeBlue border-t-transparent rounded-full animate-spin" />
                </div>
            ) : filteredTodos.length === 0 ? (
                <div className="flex flex-col items-center justify-center mt-8 text-gray-500 dark:text-gray-400">
                    <img src={DetectiveImage} alt="No todos" className="w-96 h-auto mb-4" />
                    <p className="font-bold">Empty...</p>
                </div>
            ) : (
                <ul className="space-y-2 mt-4">
                    {filteredTodos.map(todo => (
                        <li
                            key={todo.id}
                            className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded px-24 transition"
                        >
                            <TodoItem
                                todo={todo}
                                onToggle={toggleTodo}
                                onDelete={deleteTodo}
                                onEdit={setEditingTodo}
                            />
                        </li>
                    ))}
                </ul>
            )}

            <button
                onClick={() => setShowModal(true)}
                className="absolute bottom-36 right-6 bg-themeBlue hover:bg-[#574eea] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition z-50"
            >
                <Plus size={24} />
            </button>

            {showModal && (
                <AddTodoModal
                    onCancel={() => setShowModal(false)}
                    onSubmit={(note) => {
                        addTodo(note);
                        setShowModal(false);
                    }}
                />
            )}

            {editingTodo && (
                <EditTodoModal
                    initialValue={editingTodo.title}
                    onCancel={() => setEditingTodo(null)}
                    onSubmit={(updatedTitle) => {
                        editTodo(editingTodo.id, { title: updatedTitle });
                        setEditingTodo(null);
                    }}
                />
            )}
        </div>
    );
}