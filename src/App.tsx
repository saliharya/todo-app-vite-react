import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-themeBlack text-black dark:text-themeWhite transition-colors duration-300">
      <Outlet />
    </div>
  );
}

export default App;
