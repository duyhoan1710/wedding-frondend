"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";

export default function UsersPage() {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">Dartboard</h2>

      <div className="-mx-2 flex">
        <div className="mx-2 flex w-1/4 items-center rounded-lg border border-black-border p-4">
          <div className="h-6 w-6 rounded-full bg-amber-300"></div>
          <div className="ml-4">
            <div className="mb-2 text-base ">Total users</div>
            <div className="text-lg font-bold">10</div>
          </div>
        </div>

        <div className="mx-2 flex w-1/4 items-center rounded-lg border border-black-border p-4">
          <div className="h-6 w-6 rounded-full bg-amber-300"></div>
          <div className="ml-4">
            <div className="mb-2 text-base ">Total users</div>
            <div className="text-lg font-bold">10</div>
          </div>
        </div>

        <div className="mx-2 flex w-1/4 items-center rounded-lg border border-black-border p-4">
          <div className="h-6 w-6 rounded-full bg-amber-300"></div>
          <div className="ml-4">
            <div className="mb-2 text-base ">Total users</div>
            <div className="text-lg font-bold">10</div>
          </div>
        </div>

        <div className="mx-2 flex w-1/4 items-center rounded-lg border border-black-border p-4">
          <div className="h-6 w-6 rounded-full bg-amber-300"></div>
          <div className="ml-4">
            <div className="mb-2 text-base ">Total users</div>
            <div className="text-lg font-bold">10</div>
          </div>
        </div>
      </div>
    </div>
  );
}
