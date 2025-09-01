import { useParams } from 'react-router-dom'
import RetrospectiveHeader from '../components/Retrospective/RetrospectiveHeader'
import RetrospectiveWrapper from '../components/Retrospective/RetrospectiveList/RetrospectiveWrapper'
import { folders } from '../mockData/folderData'
import { themeColors } from '../utils/themeColors'

function RetrospectiveList() {
  const { id } = useParams<{ id: string }>()
  const folderId = id ? BigInt(id) : null
  if (!folderId) {
    return <div>잘못된 폴더 ID입니다.</div>
  }

  const rootFolder = folders.find(
    (f) => f.id === folderId && f.parent_id === null,
  )
  if (!rootFolder) {
    return <div>폴더가 존재하지 않습니다.</div>
  }

  const subFolders = folders.filter((f) => f.parent_id === folderId)
  return (
    <div className="flex flex-col gap-6">
      <RetrospectiveHeader folderName={rootFolder.name} />
      <div className="flex flex-wrap gap-x-4 gap-y-6">
        {subFolders.map((folder, idx) => (
          <div
            key={folder.id}
            className="flex-shrink-0 basis-[280px] max-w-[400px] w-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)]"
          >
            <RetrospectiveWrapper
              folder={folder}
              color={themeColors[idx % themeColors.length]}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RetrospectiveList
