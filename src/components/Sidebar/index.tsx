import { folders } from '../../mockData/folderData'
import ButtonSection from './ButtonSection'
import DeletedFolder from './DeletedFolder'
import FolderSection from './FolderSection'
import Logo from './Logo'
import UserSection from './UserSection'

function Sidebar() {
  return (
    <div className="flex h-full w-[300px] flex-col m-1 px-3 py-6">
      <Logo />
      <div className="mt-12">
        <ButtonSection />
      </div>
      <div className="mt-4">
        <FolderSection folders={folders} />
      </div>
      <div className="mt-6">
        <DeletedFolder />
      </div>
      <div className="mt-auto">
        <UserSection />
      </div>
    </div>
  )
}

export default Sidebar
