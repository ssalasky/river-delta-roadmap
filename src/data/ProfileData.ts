import { FeatureObject, FeatureStatuses } from "@/types/Feature";

export const ProfileData: FeatureObject[] = [
  {
    id: 1,
    feature: "User profile",
    description: "Bare bones display of a user's information",
    status: FeatureStatuses.Planned,
  },
  {
    id: 2,
    feature: "Company profile",
    description:
      "This should show the company's information as well as their posts and open job listings",
    status: FeatureStatuses.Planned,
  },
  {
    id: 3,
    feature: "Linked profile",
    description:
      "The avatar of both companies and users should be linked to their profile. A hover action should open a small profile tooltip and a click should direct to their full profile.",
    status: FeatureStatuses.Planned,
  },
];
