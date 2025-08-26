import { useState } from 'react'
import type { FolderNode } from '../../types/Folder'

interface FolderNodeProps {
  node: FolderNode
}

function FolderTreeNode({ node }: FolderNodeProps) {
  const [isOpen, setIsOpen] = useState(false)
  const hasChildren = node.children.length > 0

  return (
    <div>
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        <span>{node.name}</span>
        {hasChildren && (
          <span className="text-xs w-4">{isOpen ? '▼' : '▶'}</span>
        )}
      </div>

      {isOpen && hasChildren && (
        <div className="ml-5 pl-2">
          {node.children.map((child) => (
            <FolderTreeNode
              key={child.id}
              node={child}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default FolderTreeNode
