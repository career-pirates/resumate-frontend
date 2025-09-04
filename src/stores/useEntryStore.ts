import { create } from 'zustand'

type SectionKey = 'info' | 'liked' | 'lacked' | 'learned' | 'longed'

interface RetrospectEntryState {
  filled: { [key: string]: boolean }
  setFilled: (key: SectionKey, value: boolean) => void
}

export const useEntryStore = create<RetrospectEntryState>((set) => ({
  filled: {
    info: false,
    liked: false,
    lacked: false,
    learned: false,
    longed: false,
  },
  setFilled: (key, value) =>
    set((state) => ({
      filled: { ...state.filled, [key]: value },
    })),
}))
