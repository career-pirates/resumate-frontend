import QuestionCard from '@/components/Retrospect/RetrospectCreate/QuestionCard'
import InfoCard from './../components/Retrospect/RetrospectCreate/InfoCard'
import { questionList } from '@/mockData/questionData'

function RetrospectCreate() {
  return (
    <div className="py-5">
      <div className="flex flex-col gap-10">
        <InfoCard />
        {questionList.map((q) => (
          <QuestionCard
            key={q.key}
            label={q.label}
            question={q.question}
            explanation={q.explanation}
            tooltip={q.tooltip}
          />
        ))}
      </div>
    </div>
  )
}

export default RetrospectCreate
