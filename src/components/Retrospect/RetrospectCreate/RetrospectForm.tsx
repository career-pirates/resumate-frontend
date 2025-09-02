import InfoCard from './InfoCard'

const questions = [
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

export type RetrospectFormValues = {
  folder: string
  date: string
  positives: string
  improvements: string
  learnings: string
  aspirations: string
}

function RetrospectForm() {
  // const methods = useForm<RetrospectFormValues>({
  //   defaultValues:{
  //     folder: "",
  //     date: new Date().toISOString().slice(0, 10),
  //     positives: "",
  //     improvements: "",
  //     learnings: "",
  //     aspirations: ""
  //   }
  // })

  return (
    <div>
      <form>
        <InfoCard />
      </form>
    </div>
  )
}

export default RetrospectForm
