export const DeploymentStatuses = {
  offline: 'text-gray-500 bg-gray-100/10',
  online: 'text-green-400 bg-green-400/10',
  error: 'text-rose-400 bg-rose-400/10',
}
export const Environments = {
  Preview: 'text-gray-400 bg-gray-400/10 ring-gray-400/20',
  Production: 'text-indigo-400 bg-indigo-400/10 ring-indigo-400/30',
}
export type DeploymentObject = {
  id: number
  projectName: string
  teamName: string
  status: keyof typeof DeploymentStatuses
  statusText: string
  description: string
  environment: keyof typeof Environments
}