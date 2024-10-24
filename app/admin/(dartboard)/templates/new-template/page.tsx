"use client";

import { WeddingComponent } from "@/components/wedding";

export default function NewTemplatePage() {
  return (
    <div className="flex justify-between">
      <div className="h-full w-1/5 min-w-[300px] overflow-y-auto">
        <WeddingComponent />
      </div>

      <div></div>
    </div>
  );
}
