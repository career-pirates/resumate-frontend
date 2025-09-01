import { Link } from 'react-router-dom'

interface RouteButtonProps {
  label: string
  icon: React.ReactNode
  path: string
}

function RouteButton({ label, icon, path }: RouteButtonProps) {
  return (
    <Link to={path}>
      <div className="flex flex-col items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-[var(--black)] flex items-center justify-center relative">
          <div className="flex items-center justify-center w-3 h-3">{icon}</div>
        </div>
        <span className="font-semibold text-xs sm:text-xs md:text-sm lg:text-sm">
          {label}
        </span>
      </div>
    </Link>
  )
}

export default RouteButton
