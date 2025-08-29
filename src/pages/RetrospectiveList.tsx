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
    <div className="flex flex-col ml-4 2xl:mr-[321px]">
      <RetrospectiveHeader folderName={rootFolder.name} />
      <div className="flex flex-wrap gap-4">
        {subFolders.map((folder, idx) => (
          <div
            key={folder.id}
            className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)]"
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
