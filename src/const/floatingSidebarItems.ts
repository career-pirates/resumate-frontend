import {
  InfoIcon,
  LackedIcon,
  LearnedIcon,
  LikedIcon,
  LongedIcon,
} from '@/components/common/Icons'

export const floatingSidebarItems = [
  {
    key: 'info',
    sectionKey: 'Info',
    label: '기본 정보',
    color: 'bg-[var(--gray)]',
    icon: InfoIcon,
  },
  {
    key: 'liked',
    sectionKey: 'Liked',
    label: '좋았던 점',
    color: 'bg-[var(--blue)]',
    icon: LikedIcon,
  },
  {
    key: 'lacked',
    sectionKey: 'Lacked',
    label: '개선할 점',
    color: 'bg-[var(--red)]',
    icon: LackedIcon,
  },
  {
    key: 'learned',
    sectionKey: 'Learned',
    label: '배운 점',
    color: 'bg-[var(--green)]',
    icon: LearnedIcon,
  },
  {
    key: 'longed',
    sectionKey: 'Longed for',
    label: '바라는 점',
    color: 'bg-[var(--purple)]',
    icon: LongedIcon,
  },
]
