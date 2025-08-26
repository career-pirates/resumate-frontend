import type { Folder } from '../../types/Folder'
import { buildFolderTree } from '../../utils/buildFolderTree'
import FolderTreeNode from './FolderTreeNode'

function FolderTree({ folders }: { folders: Folder[] }) {
  const tree = buildFolderTree(folders)
  return (
    <div className="text-sm">
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
