import { useParams } from 'react-router-dom'
import { folders } from '../../mockData/folderData'

interface BreadcrumbProps {
  id: bigint | null
  name: string
  path: string
}

function Breadcrumb() {
  const { id } = useParams<{ id: string }>()
  const currentFolderId = id ? BigInt(id) : null
  const buildBreadcrumbPath = (folderId: bigint | null): BreadcrumbProps[] => {
    if (!folderId) return []
    const currentFolder = folders.find((f) => f.id === folderId)
    if (!currentFolder) return []
    const breadcrumbs: BreadcrumbProps[] = []

    breadcrumbs.unshift({
      id: currentFolder.id,
      name: currentFolder.name,
      path: `/retrospectives/${currentFolder.id}`,
    })

    if (currentFolder.parent_id) {
      const parentBreadcrumbs = buildBreadcrumbPath(currentFolder.parent_id)
      breadcrumbs.unshift(...parentBreadcrumbs)
    }
    return breadcrumbs
  }

  const breadcrumbs = buildBreadcrumbPath(currentFolderId)
  const fullBreadcrumbs: BreadcrumbProps[] = [
    { id: null, name: '홈', path: '/' },
    ...breadcrumbs,
  ]

  return (
    <div className="mt-[32px] mb-[40px]">
      <div className="text-[var(--label--subtle)] text-[14px] font-normal">
        {fullBreadcrumbs.map((breadcrumb, index) => (
          <span key={breadcrumb.id?.toString() || 'home'}>
            <span>{breadcrumb.name}</span>
            {index < fullBreadcrumbs.length - 1 && (
              <span className="mx-2">{'>'}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Breadcrumb
