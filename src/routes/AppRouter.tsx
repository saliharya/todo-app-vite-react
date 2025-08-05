import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import TodoListPage from "../pages/TodoListPage";

const router = createBrowserRouter(
    [{
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <TodoListPage />
            }
        ]
    }]
)

export default function AppRouter() {
    return <RouterProvider router={router} />
}