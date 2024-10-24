"use client";

import { useRef, useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";

export function InputImageCustom({ mutiple = false }: { mutiple?: boolean }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<string[]>([]);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {/* <div className=" flex h-28 w-32 items-center justify-center rounded border border-color-border p-2"></div> */}

        <div
          className=" flex h-28 w-32 cursor-pointer flex-col items-center justify-center rounded border border-dashed border-color-border"
          onClick={() => {
            inputRef?.current?.click();
          }}
        >
          <AiOutlineUpload className="mb-1" />
          <div className="text-xs">Upload image</div>
        </div>
      </div>

      <input
        type="file"
        accept="image/*"
        className="invisible block h-0 w-0"
        multiple={mutiple}
        ref={inputRef}
        onChange={(e) => {
          console.log(e.target.files);
        }}
      />
    </>
  );
}
