export type Folder = {
  id: bigint
  parent_id: bigint | null
  member_id: bigint
  name: string
  order: number
  created_at: string
  modified_at: string
  deleted_at: string | null
  is_deleted: boolean
}

export type FolderNode = Folder & {
  children: FolderNode[]
}
