import { mainText, retroCard } from '../../../styles/customStyles'

interface DetailCardProps {
  question: string
  answer: string
}

function DetailCard({ question, answer }: DetailCardProps) {
  return (
    <div className={retroCard('flex', 'flex-col', 'self-stretch')}>
      <span className="justify-start text-lg font-bold leading-9 break-keep">
        {question}
      </span>
      <div className="pl-4 inline-flex justify-center items-center gap-1">
        <div
          className={mainText(
            'flex-1',
            'justify-start',
            'leading-loose',
            'break-keep',
          )}
        >
          {answer}
        </div>
      </div>
    </div>
  )
}

export default DetailCard
