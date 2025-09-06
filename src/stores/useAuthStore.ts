import { create } from 'zustand'

interface AuthState {
  isAuthenticated: boolean
  user: {
    memberId: string | null
    nickname: string | null
    email: string | null
    deviceId: string | null
  }
  isLoading: boolean
  error: string | null
}

interface AuthActions {
  oauthLoginSuccess: (userData: {
    memberId: string | null
    nickname: string | null
    email: string | null
  }) => void
  login: () => Promise<void>
  signup: () => Promise<void>
  logout: () => void
  clearError: () => void
  setLoading: (loading: boolean) => void
}

type AuthStore = AuthState & AuthActions

export const useAuthStore = create<AuthStore>()((set) => ({
  isAuthenticated: false,
  user: {
    memberId: null,
    nickname: null,
    email: null,
    deviceId: null,
  },
  isLoading: false,
  error: null,

  //Auth 액션
  oauthLoginSuccess: (userData) => {
    const deviceId = crypto.randomUUID()
    const newState = {
      isAuthenticated: true,
      user: {
        memberId: userData.memberId?.toString() ?? null,
        nickname: userData.nickname,
        email: userData.email,
        deviceId: deviceId,
      },
      isLoading: false,
      error: null,
    }
    set(newState)
  },

  login: async () => {
    set({ isLoading: true, error: null })
    try {
      throw new Error('API not implemented yet.')
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Login failed.',
        isLoading: false,
      })
    }
  },

  signup: async () => {
    set({ isLoading: true, error: null })
    try {
      throw new Error('API not implemented yet.')
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Signup failed.',
        isLoading: false,
      })
    }
  },

  logout: () => {
    localStorage.removeItem('auth-storage')
    set({
      isAuthenticated: false,
      user: {
        memberId: null,
        email: null,
        nickname: null,
        deviceId: null,
      },
      isLoading: false,
      error: null,
    })
  },

  clearError: () => {
    set({ error: null })
  },

  setLoading: (loading: boolean) => {
    set({ isLoading: loading })
  },
}))
