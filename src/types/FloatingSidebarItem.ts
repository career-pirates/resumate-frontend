import type { IconProps } from '@/components/common/Icons'

export type SectionKey = 'info' | 'liked' | 'lacked' | 'learned' | 'longed'

export interface FloatingSidebarItemProps {
  key: SectionKey
  sectionKey: string
  label: string
  color: string
  icon: React.ComponentType<IconProps>
}
