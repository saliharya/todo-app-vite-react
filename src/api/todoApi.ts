import axios from "axios"
import type { Todo } from "../types/todo"

const BASE_URL = "https://todo-api.kalachakra.io/todos"

export const getTodos = () => {
    return axios.get<Todo[]>(BASE_URL)
}

export const createTodo = (todo: Omit<Todo, "id">) => {
    return axios.post<Todo>(BASE_URL, todo)
}

export const updateTodo = (id: number, todo: Partial<Todo>) => {
    return axios.put<Todo>(`${BASE_URL}/${id}`, todo)
}

export const deleteTodo = (id: number) => {
    return axios.delete<void>(`${BASE_URL}/${id}`)
}
