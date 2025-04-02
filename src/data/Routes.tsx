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
  { name: "Onboarding", href: "/onboarding", icon: HomeIcon, current: true },
  { name: "Profiles", href: "/profile", icon: UsersIcon, current: false },
  {
    name: "Company",
    href: "/company",
    icon: BuildingStorefrontIcon,
    current: false,
  },
  {
    name: "Job Posts",
    href: "/jobs",
    icon: ClipboardDocumentListIcon,
    current: false,
  },
  {
    name: "Messaging",
    href: "/messaging",
    icon: ChatBubbleBottomCenterIcon,
    current: false,
  },
  { name: "Social Feed", href: "/feed", icon: CameraIcon, current: false },
];

export const GeneralNavigation = [
  {
    name: "General Roadmap",
    href: "/general",
    icon: CalendarDaysIcon,
    current: false,
  },
  {
    name: "General Deployments",
    href: "#",
    icon: BriefcaseIcon,
    current: false,
  },
];
