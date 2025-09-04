import { useEntryStore } from '@/stores/useEntryStore'
import ProgressIndicatorCard from './ProgressIndicatorCard'
import Button from '@/components/common/Button'
import { floatingSidebarItems } from '@/const/floatingSidebarItems'

function FloatingSidebar() {
  const filled = useEntryStore((state) => state.filled)

  return (
    <div className="flex flex-col justify-start items-center gap-4">
      <div className="flex flex-col justify-start items-center gap-1 p-3 rounded-lg shadow-[0px_0px_6px_0px_rgba(0,0,0,0.04)] border border-black">
        {floatingSidebarItems.map(({ key, label, sectionKey, color, icon }) => (
          <ProgressIndicatorCard
            key={key}
            sectionKey={sectionKey}
            label={label}
            filled={filled[key]}
            color={color}
            icon={icon}
          />
        ))}
      </div>

      <div className="flex flex-col self-stretch gap-2">
        <Button
          variant={'black'}
          size={'sm'}
        >
          등록하기
        </Button>
        <Button
          variant={'line'}
          size={'sm'}
        >
          임시저장
        </Button>
        <Button
          variant={'line'}
          size={'sm'}
        >
          불러오기
        </Button>
      </div>
    </div>
  )
}

export default FloatingSidebar
