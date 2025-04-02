import {FeatureObject, FeatureStatuses} from '@/types/Feature';

export const GeneralData: FeatureObject[] = [
  {
    id: 1,
    feature: 'UI overhaul',
    description: 'The POC was built very rudimentary and it needs to be overhauled prior to go-live.',
    status: FeatureStatuses.Building
  },
  {
    id: 2,
    feature: 'Site branding',
    description: 'A brand name and image needs to be developed prior to go-live',
    status: FeatureStatuses.Planned
  },
  {
    id: 3,
    feature: 'Native applications',
    description: 'For the long-term success of this application, native apps for all platforms will need to be built.',
    status: FeatureStatuses.Planned
  }
]