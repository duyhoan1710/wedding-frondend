"use client";

import { LoadingCircle } from "@/components/icons";
import { uploadImage } from "@/lib/fetchers/media";
import { getImage, trimDomain } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRef } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { toast } from "react-toastify";

function RenderImages({
  images,
  isPending,
  mutiple,
}: {
  images: string[];
  isPending: boolean;
  mutiple: boolean;
}) {
  if (isPending && !mutiple) {
    return (
      <>
        <div className=" flex h-28 w-32 cursor-pointer flex-col items-center justify-center rounded border border-dashed border-color-border">
          <LoadingCircle />
        </div>
      </>
    );
  }

  if (isPending && mutiple) {
    return (
      <>
        {images.map((image) => (
          <Image
            key={image}
            width={128}
            height={112}
            src={image}
            alt={image}
            className="flex h-28 w-32 items-center justify-center rounded border border-color-border object-contain p-2"
          />
        ))}
        <div className=" flex h-28 w-32 cursor-pointer flex-col items-center justify-center rounded border border-dashed border-color-border">
          <LoadingCircle />
        </div>
      </>
    );
  }

  return (
    <>
      {images.map((image) => (
        <Image
          key={image}
          width={128}
          height={112}
          src={image}
          alt={image}
          className="flex h-28 w-32 items-center justify-center rounded border border-color-border object-contain p-2"
        />
      ))}
    </>
  );
}

export function InputImageCustom({
  value,
  mutiple = false,
  onUploadSuccess,
}: {
  value: string | string[] | undefined;
  mutiple?: boolean;
  onUploadSuccess: (value: string | string[]) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const images = !value ? [] : Array.isArray(value) ? value : [value];

  const { mutate: handleUploadImage, isPending } = useMutation({
    mutationFn: async (files: FileList) => {
      return await Promise.all(
        Object.values(files).map((file) => uploadImage({ file })),
      );
    },
    onSuccess: (res) => {
      if (mutiple) {
        onUploadSuccess([
          ...images.map((image) => trimDomain(image)),
          ...res.map(({ fileUri }: { fileUri: string }) => fileUri),
        ]);
      } else {
        onUploadSuccess(res[0].fileUri);
      }
    },
    onError: (error: string) => {
      toast.error(error);
    },
  });

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <RenderImages images={images} isPending={isPending} mutiple={mutiple} />

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
        onChange={(e) => e.target.files && handleUploadImage(e.target.files)}
      />
    </>
  );
}
