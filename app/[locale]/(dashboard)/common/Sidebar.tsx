"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import classNames from "classnames";
import Link from "next/link";
import { AiOutlineProduct, AiTwotoneCopy, AiTwotoneRest } from "react-icons/ai";
import { useParams, usePathname, useRouter } from "next/navigation";
import { setAccessToken } from "@/lib/helpers/localStorage";

import { useProfile } from "@/lib/hooks/queries/useProfile";

const DropDownProfile = ({ isSidebarExpand }: { isSidebarExpand: boolean }) => {
  const router = useRouter();

  const { data: profile } = useProfile();

  const logout = () => {
    setAccessToken("");
    router.push("/login");
  };

  return (
    <div
      className={classNames(
        "flex items-center",
        !isSidebarExpand && "justify-center",
      )}
    >
      <Dropdown placement="bottom-end">
        <DropdownTrigger
          className={classNames(isSidebarExpand ? "gap-2" : "gap-0")}
        >
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            }}
            className="transition-transform"
            {...(isSidebarExpand
              ? { description: profile?.email, name: profile?.name }
              : { name: "", description: "" })}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">{profile?.email}</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={logout}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

const MENU = {
  TEMPLATE: "/templates",
  TRASH: "/trash",
  TEMPLATE_SAMPLTE: "/template-samples",
};

export const Sidebar = ({
  setIsDisplayCreateNewTemplate,
}: {
  setIsDisplayCreateNewTemplate: (value: boolean) => void;
}) => {
  const pathName = usePathname();
  const params = useParams();

  const isSidebarExpand = !params?.slug;

  if (pathName === MENU.TEMPLATE) {
    setIsDisplayCreateNewTemplate(true);
  } else {
    setIsDisplayCreateNewTemplate(false);
  }

  return (
    <div
      className={classNames(
        " border-r border-color-border transition-all",
        isSidebarExpand ? "w-[300px]" : "w-[68px]",
      )}
    >
      <div className={classNames("min-h-screen w-full")}>
        <div className="flex h-[72px] items-center border-b border-color-border px-4">
          <DropDownProfile isSidebarExpand={isSidebarExpand} />
        </div>

        <div className="border-b border-color-border px-2 py-2">
          <Link
            href="templates"
            className={classNames(
              "flex cursor-pointer items-center p-2 transition-all",
              pathName === MENU.TEMPLATE ? " rounded bg-black text-white" : "",
            )}
          >
            {isSidebarExpand ? (
              <>
                <AiOutlineProduct className="mr-2" />
                All Project
              </>
            ) : (
              <AiOutlineProduct size={24} className="mx-auto" />
            )}
          </Link>

          <Link
            href="trash"
            className={classNames(
              "flex cursor-pointer items-center p-2 transition-all",
              pathName === MENU.TRASH ? "rounded bg-black text-white" : "",
            )}
          >
            {isSidebarExpand ? (
              <>
                <AiTwotoneRest className="mr-2" /> Trash
              </>
            ) : (
              <AiTwotoneRest size={24} className="mx-auto" />
            )}
          </Link>
        </div>

        <div className="px-2 py-2">
          <Link
            href="template-samples"
            className={classNames(
              "flex cursor-pointer items-center p-2 transition-all",
              pathName === MENU.TEMPLATE_SAMPLTE
                ? "rounded bg-black text-white"
                : "",
            )}
          >
            {isSidebarExpand ? (
              <>
                <AiTwotoneCopy className="mr-2" /> Template Samples
              </>
            ) : (
              <AiTwotoneCopy size={24} className="mx-auto" />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
