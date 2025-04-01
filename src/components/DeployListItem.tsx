import {DeploymentObject, DeploymentStatuses, Environments} from '@/types/Deployment';
import clsx from 'clsx';


const DeployListItem = ({deployment}: {deployment: DeploymentObject}) => {
  return (
    <li key={deployment.id} className="relative flex items-center space-x-4 py-4">
      <div className="min-w-0 flex-auto">
        <div className="flex items-center gap-x-3">
          <div className={clsx(DeploymentStatuses[deployment.status], 'flex-none rounded-full p-1')}>
            <div className="size-2 rounded-full bg-current"/>
          </div>
          <h2 className="min-w-0 text-sm/6 font-semibold">
            <p className="flex gap-x-2">
              <span className="truncate">{deployment.teamName}</span>
              <span className="text-gray-400">/</span>
              <span className="whitespace-nowrap">{deployment.projectName}</span>
              <span className="absolute inset-0"/>
            </p>
          </h2>
        </div>
        <div className="mt-3 flex items-center gap-x-2.5 text-xs/5 text-gray-400">
          <p className="truncate">{deployment.description}</p>
          <svg viewBox="0 0 2 2" className="size-0.5 flex-none fill-gray-300">
            <circle r={1} cx={1} cy={1}/>
          </svg>
          <p className="whitespace-nowrap">{deployment.statusText}</p>
        </div>
      </div>
      <div
        className={clsx(
          Environments[deployment.environment],
          'flex-none rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset',
        )}
      >
        {deployment.environment}
      </div>
    </li>
  )
}

export default DeployListItem;