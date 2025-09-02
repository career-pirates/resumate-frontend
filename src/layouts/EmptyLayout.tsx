import { Outlet } from 'react-router-dom'

function EmptyLayout() {
  return (
    <div className="px-20 py-6">
      <Outlet />
    </div>
  )
}

export default EmptyLayout
