import { Card } from '../../../styles/customStyles'
import type { Retrospectives } from '../../../types/Retrospectives'
import { truncateText } from '../../../utils/truncateText'

interface RetrospectiveCardProps {
  retrospective: Retrospectives
}

function RetrospectivePreviewCard({ retrospective }: RetrospectiveCardProps) {
  const { positives, improvements, learnings, aspirations } = retrospective
  const available = positives || improvements || learnings || aspirations
  const previewText = truncateText(available, 50)

  return (
    <div className={Card('p-6 flex flex-col justify-between h-full')}>
      <div>
        <h3 className="text-xl font-bold">{retrospective.review_date}</h3>
        {previewText && (
          <p className="text-sm text-[var(--gray--dark)]">{previewText}</p>
        )}
      </div>
      <div className="text-right text-sm text-[var(--gray--dark)] mt-auto">
        {retrospective.created_at} 작성
      </div>
    </div>
  )
}

export default RetrospectivePreviewCard

// import { Card } from '../../../styles/customStyles'
// import type { Retrospectives } from '../../../types/Retrospectives'
// import { truncateText } from '../../../utils/truncateText'

// interface RetrospectiveCardProps {
//   retrospective: Retrospectives
// }

// function RetrospectivePreviewCard({ retrospective }: RetrospectiveCardProps) {
//   const { positives, improvements, learnings, aspirations } = retrospective
//   const available = positives || improvements || learnings || aspirations
//   const previewText = truncateText(available, 50)

//   return (
//     <div className={Card('p-4 sm:p-6 flex flex-col justify-between h-full')}>
//       <div className="mb-4">
//         <h3 className="text-[20px] font-bold mb-2">
//           {retrospective.review_date}
//         </h3>
//         {previewText && (
//           <p className="text-sm text-[var(--gray--dark)]">{previewText}</p>
//         )}
//       </div>
//       <div className="mt-auto flex justify-end">
//         <span className="text-sm text-[var(--gray--dark)]">
//           {retrospective.created_at} 작성
//         </span>
//       </div>
//     </div>
//   )
// }

// export default RetrospectivePreviewCard
