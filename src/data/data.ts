import {CompanyData} from '@/data/CompanyData';
import {FeedData} from '@/data/FeedData';
import {GeneralData} from '@/data/GeneralData';
import {JobsData} from '@/data/JobsData';
import {MessagingData} from '@/data/MessagingData';
import {ProfileData} from '@/data/ProfileData';
import {OnboardingData} from "./OnboardingData";

export const appData = {
  onboarding: OnboardingData,
  profile: ProfileData,
  company: CompanyData,
  jobs: JobsData,
  messaging: MessagingData,
  feed: FeedData,
  general: GeneralData,
}