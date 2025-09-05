import { SyncLoader } from 'react-spinners'

function LoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center w-full p-8">
      <SyncLoader
        color="var(--brand--blue)"
        speedMultiplier={0.85}
      />
    </div>
  )
}

export default LoadingSpinner
