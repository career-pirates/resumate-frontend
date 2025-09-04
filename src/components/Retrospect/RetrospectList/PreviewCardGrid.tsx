import { retrospectivesData } from '../../../mockData/retrospectivesData'
import RetrospectivePreviewCard from './RetrospectPreviewCard'

interface PreviewCardGridProps {
  folderId: bigint
}

function PreviewCardGrid({ folderId }: PreviewCardGridProps) {
  const retrospectives = retrospectivesData.filter(
    (r) => r.folder_id === folderId && !r.is_deleted,
  )

  if (retrospectives.length === 0) {
    return <div>회고가 존재하지 않습니다.</div>
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {retrospectives.map((retrospective) => (
        <RetrospectivePreviewCard
          key={retrospective.id.toString()}
          retrospective={retrospective}
        />
      ))}
    </div>
  )
}

export default PreviewCardGrid
