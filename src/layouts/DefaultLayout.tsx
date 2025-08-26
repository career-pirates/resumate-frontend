import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function DefaultLayout() {
  return (
    <div className="flex h-screen">
      <aside className="bg-white shadow-md">
        <Sidebar />
      </aside>
      <main className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default DefaultLayout
