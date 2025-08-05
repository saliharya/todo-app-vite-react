import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import TodoDetailPage from "../pages/TodoDetailPage";
import TodoListPage from "../pages/TodoListPage";

const router = createBrowserRouter(
    [{
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <TodoListPage />
            },
            {
                path: "todo/:id",
                element: <TodoDetailPage />
            }
        ]
    }]
)

export default function AppRouter() {
    return <RouterProvider router={router} />
}