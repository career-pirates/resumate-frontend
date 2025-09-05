function BrandSection() {
  return (
    <div
      className="flex items-center justify-center w-full h-full"
      style={{
        background: `radial-gradient(circle at top left, var(--brand--blue) 0%, transparent 30%), radial-gradient(circle at bottom right, var(--brand--green) 0%, transparent 30%), white`,
      }}
    >
      <div className="flex flex-col justify-center items-center z-10">
        <img
          src="/public/Icon.png"
          alt="Resumate Icon"
          className="flex w-20 h-auto"
        />
        <img
          src="/public/Logo.png"
          alt="Resumate Logo"
          className="flex w-40 h-auto"
        />
      </div>
    </div>
  )
}

export default BrandSection
