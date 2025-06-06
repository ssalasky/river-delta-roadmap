import { FeatureObject, FeatureStatuses } from "@/types/Feature";

export const GeneralData: FeatureObject[] = [
  {
    id: 1,
    feature: "Migrate to Next",
    description:
      "Rebuild the POC in Next and implement associated packages there",
    status: FeatureStatuses.Building,
  },
  {
    id: 2,
    feature: "UI overhaul",
    description:
      "The POC was built very rudimentary and it needs to be overhauled prior to go-live.",
    status: FeatureStatuses.Building,
  },
  {
    id: 3,
    feature: "Site branding",
    description:
      "A brand name and image needs to be developed prior to go-live",
    status: FeatureStatuses.Planned,
  },
  {
    id: 4,
    feature: "Native applications",
    description:
      "For the long-term success of this application, native apps for all platforms will need to be built.",
    status: FeatureStatuses.Planned,
  },
  {
    id: 5,
    feature: "Rebuild using server components",
    description:
      "RedwoodJS is migrating to an SDK instead. I need to figure out a new framework for this app for future viability.",
    status: FeatureStatuses.Planned,
  },
];
