import { useNavigate, useParams } from 'react-router-dom'
import { Card } from '../../../styles/customStyles'
import type { Retrospectives } from '../../../types/Retrospectives'
import { truncateText } from '../../../utils/truncateText'

interface RetrospectiveCardProps {
  retrospective: Retrospectives
}

function RetrospectivePreviewCard({ retrospective }: RetrospectiveCardProps) {
  const { folderId } = useParams<{ folderId: string }>()
  const navigate = useNavigate()
  const { positives, improvements, learnings, aspirations } = retrospective
  const available = positives || improvements || learnings || aspirations
  const previewText = truncateText(available, 50)

  return (
    <div
      className={Card(
        'p-6 flex flex-col justify-between h-full cursor-pointer',
      )}
      onClick={() =>
        navigate(`/retrospectives/${folderId}/${retrospective.id.toString()}`)
      }
    >
      <div>
        <h3 className="text-lg font-bold whitespace-nowrap">
          {retrospective.review_date}
        </h3>
        {previewText && (
          <p className="text-sm text-[var(--gray--dark)]">{previewText}</p>
        )}
      </div>
      <div className="text-right text-xs text-[var(--gray--dark)] mt-auto">
        {retrospective.created_at} 작성
      </div>
    </div>
  )
}

export default RetrospectivePreviewCard
