import { useAuthStore } from '@/stores/useAuthStore'
import { getOAuthError, isOAuthCallback } from '@/utils/oauth'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from '../common/LoadingSpinner'

function OAuthCallback() {
  const [isProcessing, setIsProcessing] = useState(true)
  const navigate = useNavigate()
  const oauthLoginSuccess = useAuthStore((state) => state.oauthLoginSuccess)

  useEffect(() => {
    const handleOAuthCallback = async () => {
      if (!isOAuthCallback()) {
        setIsProcessing(false)
        return
      }

      try {
        const error = getOAuthError()
        if (error) {
          navigate('/login')
          return
        }

        navigate('/')
      } catch (error) {
        navigate('/login')
      } finally {
        setIsProcessing(false)
      }
    }
    handleOAuthCallback()
  }, [navigate, oauthLoginSuccess])

  if (isProcessing) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    )
  }
  return null
}

export default OAuthCallback
