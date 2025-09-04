import { Outlet } from 'react-router-dom'

function EmptyLayout() {
  return (
    <div className="flex h-full min-h-screen px-10 py-6">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default EmptyLayout
