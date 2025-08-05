import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white shadow rounded p-6">
        <Outlet />
      </div>
    </div>
  )
}

export default App
