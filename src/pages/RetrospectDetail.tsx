import { useParams } from 'react-router-dom'
import DetailCard from '../components/Retrospect/RetrospectDetail/DetailCard'
import DetailHeader from '../components/Retrospect/RetrospectDetail/DetailHeader'
import { retrospectivesData } from '../mockData/retrospectivesData'
import type { Retrospectives } from '../types/Retrospectives'

//{retrospective}: RetrospectiveDetailsProps 형식으로 데이터 전달
function RetrospectiveDetail() {
  const { retroId } = useParams<{ retroId: string }>()
  const retroDetailId = retroId ? BigInt(retroId) : null

  const retrospective = retrospectivesData.find((r) => r.id === retroDetailId)

  if (!retrospective) {
    return <div>회고를 찾을 수 없습니다.</div>
  }

  const questions: {
    key: keyof Pick<
      Retrospectives,
      'positives' | 'improvements' | 'learnings' | 'aspirations'
    >
    label: string
  }[] = [
    {
      key: 'positives',
      label:
        '1. 좋았던 점 (Good / Liked): 오늘 하루 잘된 점, 성과, 만족스러웠던 부분',
    },
    {
      key: 'improvements',
      label:
        '2. 개선할 점 (Bad / Lacked): 아쉬웠던 점, 부족하거나 방해가 되었던 요소',
    },
    {
      key: 'learnings',
      label: '3. 배운 점 (Learned): 오늘 새롭게 배운 지식, 인사이트',
    },
    {
      key: 'aspirations',
      label:
        '4. 원했던 점 (Longed for / Better): 더 있었으면 좋았을 부분, 내일 시도하고 싶은 변화',
    },
  ]
  return (
    <div className="inline-flex flex-col pb-8 justify-start items-start gap-6">
      <DetailHeader
        reviewDate={retrospective.review_date}
        createdDate={retrospective.created_at}
      />
      <div className="inline-flex flex-col justify-start gap-3">
        {questions.map((q) => (
          <DetailCard
            key={q.key}
            question={q.label}
            answer={retrospective[q.key] ?? ''}
          />
        ))}
      </div>
    </div>
  )
}

export default RetrospectiveDetail
