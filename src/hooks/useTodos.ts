import { useState } from "react";
import type { Todo } from "../types/todo";
import { createTodo, getTodos, updateTodo, deleteTodo as apiDeleteTodo } from "../api/todoApi";

export function useTodos() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [loading, setLoading] = useState<boolean>(false);

    const fetchTodos = async () => {
        try {
            setLoading(true);
            const response = await getTodos();
            setTodos(response.data);
        } finally {
            setLoading(false);
        }
    }

    const addTodo = async (title: string) => {
        const newTodo: Omit<Todo, "id"> = { title, completed: false };
        const response = await createTodo(newTodo);
        setTodos((prev) => [...prev, response.data]);
    }

    const toggleTodo = async (todo: Todo) => {
        const response = await updateTodo(todo.id, {
            completed: !todo.completed,
        });
        setTodos((prev) =>
            prev.map((t) => (t.id === todo.id ? response.data : t))
        );
    }

    const deleteTodo = async (id: number) => {
        await apiDeleteTodo(id);
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }

    const editTodo = async (id: number, data: Partial<Todo>) => {
        const response = await updateTodo(id, data);
        setTodos((prev) =>
            prev.map((t) => (t.id === id ? response.data : t))
        );
    };

    return {
        todos,
        loading,
        fetchTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo
    }
}
