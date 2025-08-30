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
        <div className="w-14 h-14 rounded-[120px] bg-[var(--black)] flex items-center justify-center relative">
          {icon}
        </div>
        <span className="font-medium text-lg text-center">{label}</span>
      </div>
    </Link>
  )
}

export default RouteButton

// import { Link } from 'react-router-dom'

// interface RouteButtonProps {
//   label: string
//   icon: React.ReactNode
//   path: string
// }

// function RouteButton({ label, icon, path }: RouteButtonProps) {
//   return (
//     <Link to={path}>
//       <div className="flex flex-col items-center gap-1">
//         <button className="flex items-center justify-center w-10 h-10 rounded-full bg-black p-2">
//           <div className="flex items-center justify-center w-4 h-4">{icon}</div>
//         </button>
//         <span className="font-semibold text-xs sm:text-xs md:text-sm lg:text-sm">
//           {label}
//         </span>
//       </div>
//     </Link>
//   )
// }

// export default RouteButton
