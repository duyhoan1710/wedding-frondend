"use client";

import { DeleteIcon } from "@/components/shared/icons/deleteIcon";
import { EditIcon } from "@/components/shared/icons/editIcon";
import { ViewIcon } from "@/components/shared/icons/viewIcon";
import { Button } from "@nextui-org/button";
import {
  Input,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
} from "@nextui-org/react";
import { useState } from "react";

export default function UsersPage() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["2"]));

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Manage User</h2>

      <div className="mb-4 flex items-center justify-between">
        <div className="flex w-1/5 items-center">
          <Input
            placeholder="Search users"
            classNames={{
              input: ["border-none outline-none px-0"],
            }}
            style={{ boxShadow: "none" }}
          />
        </div>

        <div className="flex">
          <Button className="mr-2" color="primary" variant="bordered">
            Add User
          </Button>
          <Button color="primary" variant="bordered">
            Export CSV
          </Button>
        </div>
      </div>

      <Table
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={(values) => {
          console.log(values);
        }}
        style={{
          height: "auto",
          minWidth: "100%",
          boxShadow: "none",
          width: "100%",
          // padding: '',
        }}
      >
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>Subscription Type</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn> </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>
              <User
                name="Jane Doe"
                description="Product Designer"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
              />
            </TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>CEO</TableCell>

            <TableCell>
              <div className="w-fit rounded-lg bg-green-200 px-2 py-1 text-xs text-green-700">
                Active
              </div>
            </TableCell>
            <TableCell>
              <div className="flex justify-center">
                <div className="mx-3">
                  <ViewIcon size={20} fill="#979797" />
                </div>
                <div className="mx-3">
                  <EditIcon size={20} fill="#979797" />
                </div>
                <div className="mx-3">
                  <DeleteIcon size={20} fill="#FF0080" />
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>
              <User
                name="Jane Doe"
                description="Product Designer"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
              />
            </TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Technical Lead</TableCell>

            <TableCell>
              <div className="w-fit rounded-lg bg-red-200 px-2 py-1 text-xs text-red-700">
                Danger
              </div>
            </TableCell>
            <TableCell>
              <div className="flex justify-center">
                <div className="mx-3">
                  <ViewIcon size={20} fill="#979797" />
                </div>
                <div className="mx-3">
                  <EditIcon size={20} fill="#979797" />
                </div>
                <div className="mx-3">
                  <DeleteIcon size={20} fill="#FF0080" />
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>
              <User
                name="Jane Doe"
                description="Product Designer"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
              />
            </TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Senior Developer</TableCell>

            <TableCell>
              <div className="w-fit rounded-lg bg-yellow-200 px-2 py-1 text-xs text-yellow-700">
                Watch
              </div>
            </TableCell>
            <TableCell>
              <div className="flex justify-center">
                <div className="mx-3">
                  <ViewIcon size={20} fill="#979797" />
                </div>
                <div className="mx-3">
                  <EditIcon size={20} fill="#979797" />
                </div>
                <div className="mx-3">
                  <DeleteIcon size={20} fill="#FF0080" />
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>
              <User
                name="Jane Doe"
                description="Product Designer"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
              />
            </TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Community Manager</TableCell>

            <TableCell>
              <div className="w-fit rounded-lg bg-green-200 py-1 px-2 text-xs text-green-700">
                Success
              </div>
            </TableCell>
            <TableCell>
              <div className="flex justify-center">
                <div className="mx-3">
                  <ViewIcon size={20} fill="#979797" />
                </div>
                <div className="mx-3">
                  <EditIcon size={20} fill="#979797" />
                </div>
                <div className="mx-3">
                  <DeleteIcon size={20} fill="#FF0080" />
                </div>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
