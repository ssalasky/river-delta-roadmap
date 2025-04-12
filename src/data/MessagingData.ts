import {FeatureObject, FeatureStatuses} from '@/types/Feature';

export const MessagingData: FeatureObject[] = [
  {
    id: 1,
    feature: 'Conversation creation',
    description: 'A user should be able to select a user from the dropdown and create a new conversation with that user.',
    status: FeatureStatuses.Planned,
  },
  {
    id: 2,
    feature: 'Message creation',
    description: 'Within a conversation a user should be able to send new messages to the chat and have them appear instantly for both users.',
    status: FeatureStatuses.Planned
  },
  {
    id: 3,
    feature: 'Conversation notifications',
    description: 'A user should get notifications within the application if a new message has arrived for a chat they are not currently viewing.',
    status: FeatureStatuses.Planned,
  }
]