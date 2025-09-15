import { Outlet } from 'react-router-dom'

function EmptyLayout() {
  return (
    <div className="flex h-full min-h-screen">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default EmptyLayout
