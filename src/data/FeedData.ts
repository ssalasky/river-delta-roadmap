import {FeatureObject, FeatureStatuses} from '@/types/Feature';

export const FeedData: FeatureObject[] = [
  {
    id: 1,
    feature: 'Basic functionality',
    description: 'Complete the bare minimum functionality to get users into the application',
    status: FeatureStatuses.Planned,
  },
  {
    id: 2,
    feature: 'Post interactions',
    description: 'Every great social feed allows other users to interact with messages. We should have that same functionality.',
    status: FeatureStatuses.Planned,
  },
  {
    id: 3,
    feature: 'Media-rich posts',
    description: 'Everybody loves to share media with their posts. This is a decent-sized feature, but is absolutely needed.',
    status: FeatureStatuses.Planned
  }
]