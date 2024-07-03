"use client";

import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { AiOutlineCaretDown } from "react-icons/ai";

export default function NavBar() {
  return (
    <Navbar className="h-[69px] border-b border-black-border shadow-sm">
      {/* <NavbarContent className="hidden sm:flex" justify="start">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarContent justify="end">
        <Dropdown>
          <DropdownTrigger className=" cursor-pointer">
            <div className="flex items-center">
              <div>Nguyen Duy Hoan</div>
              <Avatar
                className="mx-2"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              />
              <AiOutlineCaretDown />
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">Profile</DropdownItem>
            <DropdownItem key="copy">Setting</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
