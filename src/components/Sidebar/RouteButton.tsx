import { Link } from 'react-router-dom'

interface RouteButtonProps {
  label: string
  icon: React.ReactNode
  path: string
}

function RouteButton({ label, icon, path }: RouteButtonProps) {
  return (
    <Link
      to={path}
      className="flex flex-col items-center gap-1"
    >
      <div className="flex flex-col items-center gap-1">
        <button className="p-3 rounded-full bg-black">
          <div className="w-8 h-8 flex items-center justify-center">{icon}</div>
        </button>
        <span className="text-[18px]">{label}</span>
      </div>
    </Link>
  )
}

export default RouteButton
