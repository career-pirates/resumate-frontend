export type Retrospectives = {
  id: bigint
  folder_id: bigint
  member_id: bigint
  positives: string | null
  improvements: string | null
  learnings: string | null
  aspirations: string | null
  is_completed: boolean
  review_date: string //ISO String
  modified_at: string
  created_at: string
  deleted_at: string | null
  is_deleted: boolean
}
