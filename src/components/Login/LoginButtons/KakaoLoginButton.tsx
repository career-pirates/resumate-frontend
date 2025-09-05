function KakaoLoginButton() {
  return (
    <button className="flex items-center justify-center w-8 h-8 bg-transparent border-none cursor-pointer outline-none overflow-hidden transition-all duration-300 rounded-full ease-in-out hover:opacity-90 hover:shadow-md">
      <img
        src="public/kakaotalk_icon.png"
        alt="Kakao Login"
        className="w-full h-full object-cover"
      />
    </button>
  )
}

export default KakaoLoginButton
