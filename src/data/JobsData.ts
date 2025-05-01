import {FeatureObject, FeatureStatuses} from '@/types/Feature';

export const JobsData: FeatureObject[] = [
  {
    id: 1,
    feature: "Job post creation",
    description:
      "Companies can create job postings and have them appear on the Jobs page.",
    status: FeatureStatuses.Planned,
  },
  {
    id: 2,
    feature: "Job applications",
    description:
      "Users can use the 'apply' button to submit their profile to a job posting. This should result with their application being shown on company view.",
    status: FeatureStatuses.Planned,
  },
  {
    id: 3,
    feature: "Job post management",
    description:
      "Updating, renewing and closing an existing job post is par for the course. This will be a necessity prior to go-live.",
    status: FeatureStatuses.Planned,
  },
  {
    id: 4,
    feature: "Job search filtering",
    description:
      "As a user I should be able to use search terms and various filters to find jobs that interest me quickly and easily.",
    status: FeatureStatuses.Planned,
  },
];
