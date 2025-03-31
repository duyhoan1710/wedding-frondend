"use client";

import { findComponent } from "@/components/wedding";
import { ITemplate } from "@/components/wedding/interface";

export function TemplateBody({ template }: { template: ITemplate }) {
  return (
    <div className="flex  flex-col items-center justify-center">
      {template.components.map(({ code, data }) => (
        <>
          {(() => {
            const c = findComponent(template.version, code);

            if (!c) return <></>;

            return <c.Component props={data as any} />;
          })()}
        </>
      ))}
    </div>
  );
}
