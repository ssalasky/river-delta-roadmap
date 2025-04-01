import {FeatureObject, FeatureStatuses} from '@/types/Feature';

export const OnboardingData: FeatureObject[] = [
  {
    id: 1,
    feature: 'Basic functionality',
    description: 'Complete the bare minimum functionality to get users into the application',
    status: FeatureStatuses.Testing,
  },
  {
    id: 2,
    feature: 'OAuth',
    description: 'Implement OAuth (or similar) for easier onboarding',
    status: FeatureStatuses.Idea,
  }
]