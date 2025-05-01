import {
  BriefcaseIcon,
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  CameraIcon,
  ChatBubbleBottomCenterIcon,
  ClipboardDocumentListIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const Navigation = [
  {
    name: "Onboarding",
    href: "/section/onboarding",
    icon: HomeIcon,
    current: true,
  },
  {
    name: "Profiles",
    href: "/section/profile",
    icon: UsersIcon,
    current: false,
  },
  {
    name: "Company",
    href: "/section/company",
    icon: BuildingStorefrontIcon,
    current: false,
  },
  {
    name: "Job Posts",
    href: "/section/jobs",
    icon: ClipboardDocumentListIcon,
    current: false,
  },
  {
    name: "Messaging",
    href: "/section/messaging",
    icon: ChatBubbleBottomCenterIcon,
    current: false,
  },
  {
    name: "Social Feed",
    href: "/section/feed",
    icon: CameraIcon,
    current: false,
  },
];

export const GeneralNavigation = [
  {
    name: "General Roadmap",
    href: "/section/general",
    icon: CalendarDaysIcon,
    current: false,
  },
  {
    name: "General Updates",
    href: "/general-update",
    icon: BriefcaseIcon,
    current: false,
  },
];
