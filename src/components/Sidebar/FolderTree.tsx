import type { Folder } from '../../types/Folder'
import { buildFolderTree } from '../../utils/buildFolderTree'
import FolderTreeNode from './FolderTreeNode'

function FolderTree({ folders }: { folders: Folder[] }) {
  const tree = buildFolderTree(folders)
  return (
    <div className="flex flex-col gap-1">
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

// import type { Folder } from '../../types/Folder'
// import { buildFolderTree } from '../../utils/buildFolderTree'
// import FolderTreeNode from './FolderTreeNode'

// function FolderTree({ folders }: { folders: Folder[] }) {
//   const tree = buildFolderTree(folders)
//   return (
//     <div className="whitespace-nowrap">
//       {tree.map((node) => (
//         <FolderTreeNode
//           key={node.id}
//           node={node}
//         />
//       ))}
//     </div>
//   )
// }

// export default FolderTree
