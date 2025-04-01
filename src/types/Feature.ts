export enum FeatureStatuses {
  Idea,
  Planned,
  Building,
  Testing,
  Shipped,
  Released
}
export type FeatureObject = {
  id: number,
  feature: string
  description: string
  status: FeatureStatuses
}