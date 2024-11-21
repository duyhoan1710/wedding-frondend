import { HomeIcon } from "@/components/icons/HomeIcon";
import LogoutIcon from "@/components/icons/LogoutIcon";
import SettingIcon from "@/components/icons/SettingIcon";
import TemplateIcon from "@/components/icons/TemplateIcon";
import { UserIcon } from "@/components/icons/UserIcon";
import { ERole } from "./enum";

export const DEPLOY_URL = `https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsteven-tey%2Fprecedent&project-name=precedent&repository-name=precedent&demo-title=Precedent&demo-description=An%20opinionated%20collection%20of%20components%2C%20hooks%2C%20and%20utilities%20for%20your%20Next%20project.&demo-url=https%3A%2F%2Fprecedent.dev&demo-image=https%3A%2F%2Fprecedent.dev%2Fopengraph-image&env=GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,NEXTAUTH_SECRET&envDescription=How%20to%20get%20these%20env%20variables%3A&envLink=https%3A%2F%2Fgithub.com%2Fsteven-tey%2Fprecedent%2Fblob%2Fmain%2F.env.example&stores=%5B%7B"type"%3A"postgres"%7D%5D`;

export const MENU_SIDE_BAR: {
  pathName: string;
  label: string;
  icon: ({
    className,
    isActive,
  }: {
    className?: string;
    isActive?: boolean;
  }) => JSX.Element;
  onClick?: () => void;
  role: ERole[];
}[] = [
  {
    pathName: "admin/home",
    label: "Home",
    icon: HomeIcon,
    role: [ERole.ADMIN],
  },
  {
    pathName: "admin/users",
    label: "Users",
    icon: UserIcon,
    role: [ERole.ADMIN],
  },
  {
    pathName: "admin/templates",
    label: "Templates",
    icon: TemplateIcon,
    role: [ERole.ADMIN],
  },
  {
    pathName: "admin/settings",
    label: "Settings",
    icon: SettingIcon,
    role: [ERole.ADMIN, ERole.USER],
  },
  {
    pathName: "#",
    label: "Logout",
    icon: LogoutIcon,
    onClick: () => {},
    role: [ERole.ADMIN, ERole.USER],
  },
];

const days = [
  "CHỦ NHẬT",
  "THỨ HAI",
  "THỨ BA",
  "THỨ TƯ",
  "THỨ NĂM",
  "THỨ SÁU",
  "THỨ BẢY",
];

const months = [
  "THÁNG 1",
  "THÁNG 2",
  "THÁNG 3",
  "THÁNG 4",
  "THÁNG 5",
  "THÁNG 6",
  "THÁNG 7",
  "THÁNG 8",
  "THÁNG 9",
  "THÁNG 10",
  "THÁNG 11",
  "THÁNG 12",
];
