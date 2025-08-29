import { Link } from 'react-router-dom'
import type { FolderNode } from '../../types/Folder'

interface FolderNodeProps {
  node: FolderNode
}

function FolderTreeNode({ node }: FolderNodeProps) {
  return (
    <div className="m-2">
      <Link
        to={`/retrospectives/${node.id}`}
        className="flex items-center justify-between gap-1 cursor-pointer"
      >
        <div className="flex items-center gap-1">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.3291 3.98633C10.5456 3.98592 10.7533 4.07332 10.9043 4.22852L12.3359 5.7002H20.1992C21.1933 5.70025 21.999 6.5069 21.999 7.50098V18.2002C21.9988 19.1941 21.1931 20.0009 20.1992 20.001H3.79785C2.80407 20.001 1.9976 19.1949 1.99707 18.2012L1.99609 5.79883C1.99599 4.80596 2.8001 4.00089 3.79297 3.99902L10.3291 3.98633ZM3.7959 5.59863C3.68558 5.59884 3.59569 5.68851 3.5957 5.79883L3.59766 18.2012C3.59818 18.3112 3.68772 18.4004 3.79785 18.4004H20.1992C20.3095 18.4003 20.3992 18.3104 20.3994 18.2002V7.50098C20.3994 7.39056 20.3096 7.30084 20.1992 7.30078H11.9971C11.7813 7.30065 11.5743 7.21319 11.4238 7.0586L9.99316 5.58692L3.7959 5.59863Z"
                fill="#3E3E3E"
              />
            </svg>
          </span>
          <span className="text-md font-medium pt-[4px]">{node.name}</span>
        </div>

        <div className="ml-auto">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5.40039 10.6001C6.17341 10.6003 6.7998 11.2274 6.7998 12.0005C6.79959 12.7734 6.17328 13.3997 5.40039 13.3999C4.62732 13.3999 4.00021 12.7735 4 12.0005C4 11.2273 4.62719 10.6001 5.40039 10.6001Z"
                fill="#3E3E3E"
              />
              <path
                d="M12.002 10.6001C12.775 10.6003 13.4014 11.2274 13.4014 12.0005C13.4012 12.7734 12.7748 13.3997 12.002 13.3999C11.2289 13.3999 10.6018 12.7735 10.6016 12.0005C10.6016 11.2273 11.2288 10.6001 12.002 10.6001Z"
                fill="#3E3E3E"
              />
              <path
                d="M18.5996 10.6001C19.3726 10.6003 19.999 11.2274 19.999 12.0005C19.9988 12.7734 19.3725 13.3997 18.5996 13.3999C17.8265 13.3999 17.1994 12.7735 17.1992 12.0005C17.1992 11.2273 17.8264 10.6001 18.5996 10.6001Z"
                fill="#3E3E3E"
              />
            </svg>
          </button>
        </div>
      </Link>
    </div>
  )
}

export default FolderTreeNode
