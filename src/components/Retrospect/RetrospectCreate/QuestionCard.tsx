import Tooltip from '@/components/common/Tooltip'
import { Card } from '@/styles/customStyles'

interface QuestionCardProps {
  label: string
  question: string
  explanation: string
  tooltip: string
}

function QuestionCard({
  label,
  question,
  explanation,
  tooltip,
}: QuestionCardProps) {
  return (
    <div
      className={Card(
        'flex',
        'flex-col',
        'justify-start',
        'items-start',
        'px-5',
        'py-6',
        'gap-4',
        'overflow-hidden',
      )}
    >
      <div className="flex flex-col justify-start items-start gap-1">
        <span className="text-xs text-[var(--label--subtle)] font-medium leading-relaxed">
          {label}
        </span>
        <h3 className="text-md font-bold">{question}</h3>
        <div className="flex justify-start items-center gap-2">
          <span className="text-xs font-normal text-[var(--label--subtle)] leading-loose">
            {explanation}
          </span>
          <Tooltip instruction={tooltip} />
        </div>
      </div>

      <div className="w-full">
        <textarea
          placeholder="내용을 입력하세요"
          className="w-full h-18 px-2 py-1 bg-white border border-[var(--gray)] rounded-sm placeholder:text-sm"
        />
      </div>
    </div>
  )
}

export default QuestionCard
