export const questionList: {
  key: string
  label: string
  question: string
  explanation: string
  tooltip: string
}[] = [
  {
    key: 'positives',
    label: 'Liked',
    question:
      '1. 좋았던 점 (Good / Liked): 오늘 하루 잘된 점, 성과, 만족스러웠던 부분',
    explanation:
      '오늘 하루 잘된 점이나 만족스러웠던 부분, 또는 성과를 작성해주세요.',
    tooltip: '툴팁',
  },
  {
    key: 'improvements',
    label: 'Lacked',
    question:
      '2. 개선할 점 (Bad / Lacked): 아쉬웠던 점, 부족하거나 방해가 되었던 요소',
    explanation:
      '오늘 하루 아쉬웠던 점, 방해가 되었던 요소 또는 개선하고 싶은 부분을 작성해주세요.',
    tooltip: '툴팁',
  },
  {
    key: 'learnings',
    label: 'Learned',
    question: '3. 배운 점 (Learned): 오늘 새롭게 배운 지식, 인사이트',
    explanation: '오늘 하루 배웠던 점 또는 새로운 통찰과 지식을 작성해주세요.',
    tooltip: '툴팁',
  },
  {
    key: 'aspirations',
    label: 'Longed for',
    question:
      '4. 원했던 점 (Longed for / Better): 더 있었으면 좋았을 부분, 내일 시도하고 싶은 변화',
    explanation:
      '오늘 이루지 못한 것과 내일 시도해보고 싶은 점을 작성해주세요.',
    tooltip: '툴팁',
  },
]
