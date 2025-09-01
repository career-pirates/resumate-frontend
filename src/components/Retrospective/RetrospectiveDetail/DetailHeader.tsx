import { mainTitle } from '../../../styles/customStyles'
import Breadcrumb from '../../common/Breadcrumb'
import DetailHeaderButtons from './DetailHeaderButtons'

interface DetailHeaderProps {
  // folderId: bigint
  reviewDate: string
  createdDate: string
}

function DetailHeader({ reviewDate, createdDate }: DetailHeaderProps) {
  return (
    <div className="py-4 w-full max-w-screen mx-auto flex flex-col gap-3">
      <Breadcrumb />
      <div className="inline-flex justify-between items-end">
        <div className="inline-flex flex-col justify-start items-start gap-1.5">
          <div className="h-4 px-3 py-3 bg-[var(--green--light)] rounded-lg border border-[var(--green)] inline-flex justify-center items-center">
            <div className="justify-start text-xs text-[var(--green--dark)] font-semibold">
              기획
            </div>
          </div>
          <div className="flex">
            <h2 className={mainTitle()}>{reviewDate}</h2>
          </div>
          <span className="text-xs text-[var(--label--default)]">
            {createdDate}
          </span>
        </div>

        <DetailHeaderButtons />
      </div>
    </div>
  )
}

export default DetailHeader
