import QuestionCard from '@/components/Retrospect/RetrospectCreate/QuestionCard'
import InfoCard from './../components/Retrospect/RetrospectCreate/InfoCard'
import { questionList } from '@/mockData/questionData'
import FloatingSidebar from '@/components/Retrospect/RetrospectCreate/FloatingSidebar/FloatingSidebar'

function RetrospectCreate() {
  return (
    <div className="flex justify-center w-full py-5 gap-8">
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

      <div className="w-fit sticky top-10 self-start">
        <FloatingSidebar />
      </div>
    </div>
  )
}

export default RetrospectCreate
