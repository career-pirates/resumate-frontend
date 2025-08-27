import type { Folder } from '../../types/Folder'
import { buildFolderTree } from '../../utils/buildFolderTree'
import FolderTreeNode from './FolderTreeNode'

function FolderTree({ folders }: { folders: Folder[] }) {
  const tree = buildFolderTree(folders)
  return (
    <div className="text-[20px] ml-6 mt-2 mr-2 mb-2">
      {tree.map((node) => (
        <FolderTreeNode
          key={node.id}
          node={node}
        />
      ))}
    </div>
  )
}

export default FolderTree
