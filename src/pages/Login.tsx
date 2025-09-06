import LoadingSpinner from '@/components/common/LoadingSpinner'
import BrandSection from '@/components/Login/BrandSection'
import GoogleLoginButton from '@/components/Login/LoginButtons/GoogleLoginButton'
import KakaoLoginButton from '@/components/Login/LoginButtons/KakaoLoginButton'
import NaverLoginButton from '@/components/Login/LoginButtons/NaverLoginButton'
import { useAuthStore } from '@/stores/useAuthStore'
import { startLogin } from '@/utils/oauth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const { isAuthenticated, isLoading } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      navigate('/')
    }
  }, [isAuthenticated, isLoading])

  const handleKakaoLogin = () => {
    startLogin('kakao')
  }

  const handleNaverLogin = () => {
    startLogin('naver')
  }

  const handleGoogleLogin = () => {
    startLogin('google')
  }

  if (isLoading) {
    return (
      <div>
        <aside className="w-1/2 min-h-screen">
          <BrandSection />
        </aside>
        <main className="w-1/2 p-3 flex flex-col justify-center">
          <LoadingSpinner />
        </main>
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen flex">
      <aside className="w-1/2 min-h-screen">
        <BrandSection />
      </aside>

      <main className="w-1/2 p-3 flex flex-col justify-center gap-6">
        <div className="flex flex-col justify-center text-[var(--gray--dark)]">
          <h1 className="flex justify-center text-xl font-bold">
            개인의 경험을 쉽게 기록하고
          </h1>
          <h1 className="flex justify-center text-xl font-bold">
            자기소개서와 연결해주는 파트너
          </h1>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <span className="flex justify-center text-xs font-normal text-[var(--label--subtle)]">
            SNS 계정으로 로그인
          </span>
          <div className="flex justify-center gap-10">
            <KakaoLoginButton onClick={handleKakaoLogin} />
            <NaverLoginButton onClick={handleNaverLogin} />
            <GoogleLoginButton onClick={handleGoogleLogin} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login
