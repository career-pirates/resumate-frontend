import { folders } from '../../mockData/folderData'
import ButtonSection from './ButtonSection'
import DeletedFolder from './DeletedFolder'
import FolderSection from './FolderSection'
import Logo from './Logo'
import UserSection from './UserSection'

function Sidebar() {
  return (
    <div className="w-72 h-full px-3 pt-6 bg-Background-default shadow-[2px_0px_6px_0px_rgba(0,0,0,0.04)] inline-flex flex-col justify-between items-start">
      <div className="flex flex-col gap-12 w-full">
        <Logo />
        <ButtonSection />
        <FolderSection folders={folders} />
        <DeletedFolder />
      </div>
      <UserSection />
    </div>
  )
}

export default Sidebar

// import { folders } from '../../mockData/folderData'
// import ButtonSection from './ButtonSection'
// import DeletedFolder from './DeletedFolder'
// import FolderSection from './FolderSection'
// import Logo from './Logo'
// import UserSection from './UserSection'

// function Sidebar() {
//   return (
//     <div className="flex flex-col h-full px-2 py-4">
//       <Logo />
//       <div className="mt-4">
//         <ButtonSection />
//       </div>
//       <div className="mt-2">
//         <FolderSection folders={folders} />
//       </div>
//       <div className="mt-2">
//         <DeletedFolder />
//       </div>
//       <div className="mt-auto">
//         <UserSection />
//       </div>
//     </div>
//   )
// }

// export default Sidebar
