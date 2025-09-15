import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function DefaultLayout() {
  return (
    <div className="flex h-full min-h-screen">
      <aside className="w-50 min-w-[150px] bg-white flex-shrink-0">
        <Sidebar />
      </aside>
      <main className="flex-1 min-w-0 px-6 sm:pr-10 md:pr-20 lg:pr-40">
        <Outlet />
      </main>
    </div>
  )
}

export default DefaultLayout
