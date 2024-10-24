"use client";

import { MENU_SIDE_BAR } from "@/lib/constants";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const pathName = usePathname();

  const [itemActive, setItemActive] = useState<string>("");

  console.log(pathName);

  useEffect(() => {
    if (pathName) {
      const originUrl = pathName.substring(1);

      setItemActive(originUrl);
    }
  }, [pathName]);

  console.log(itemActive);

  return (
    <div className="h-screen w-64  border-r border-black-border duration-300">
      <div className="h-[69px]"></div>

      <ul className="px-4 py-8 text-sm">
        {MENU_SIDE_BAR.map((menuItem) => (
          <li
            key={menuItem.label}
            className={classNames(
              `mb-2 rounded-lg px-3 font-medium text-gray-600 duration-150 transition-colors hover:bg-gray-200`,
              { "bg-gray-200": itemActive?.startsWith(menuItem.pathName) },
            )}
          >
            <Link
              href={menuItem.pathName}
              className="flex items-center space-x-3 py-2 px-1"
            >
              <menuItem.icon
                isActive={itemActive?.startsWith(menuItem.pathName)}
              />
              <span className="text-base">{menuItem.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
