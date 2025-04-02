import {FeatureObject, FeatureStatuses} from '@/types/Feature';

export const CompanyData: FeatureObject[] = [
  {
    id: 1,
    feature: 'Basic functionality',
    description: 'Complete the bare minimum functionality to get users into the application',
    status: FeatureStatuses.Planned,
  },
  {
    id: 2,
    feature: 'Dashboard',
    description: 'A company dashboard where various user-selected metrics can be tracked to keep the team aligned and informed.',
    status: FeatureStatuses.Idea,
  },
  {
    id: 3,
    feature: 'Chat Platform',
    description: 'Similar to Slack, this would be an area separate from standard messaging where a company can organize messages, channels and announcements.',
    status: FeatureStatuses.Idea,
  }
]