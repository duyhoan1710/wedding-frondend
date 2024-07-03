"use client";

import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";

export default function TemplatesPage() {
  return (
    <div>
      <div className="flex flex-wrap gap-x-2">
        <Link
          href={"admin/templates/new-template"}
          className="h-[200px] w-full max-w-[200px] cursor-pointer hover:text-blue-active md:w-1/2 lg:w-1/4"
        >
          <div className="mb-2 flex h-full w-full  items-center justify-center rounded-md border border-dashed hover:border-blue-active">
            <AiOutlinePlus size={26} />
          </div>
          <div className="text-center ">New Template</div>
        </Link>
      </div>
    </div>
  );
}
