"use client";

import classNames from "classnames";
import { EVersion } from "@/lib/enum";
import { findComponent } from "@/components/wedding";
import { IComponent } from "@/components/wedding/interface";

export function PreviewTemplate({
  version,
  components,
  selectedComponentCode,
  setSelectedComponentCode,
}: {
  version: EVersion;
  components: IComponent[];
  selectedComponentCode?: string;
  setSelectedComponentCode: (value: string) => void;
}) {
  return (
    <div
      className={classNames(
        !components.length ? "h-full" : "h-fit",
        "w-full rounded border border-color-border",
      )}
    >
      {components.map(({ code, data }) => (
        <div key={code} onClick={() => setSelectedComponentCode(code)}>
          {(() => {
            const c = findComponent(version, code);

            if (!c) return <></>;

            return (
              <div
                className={classNames(
                  "m-2 h-fit rounded border border-gray-500",
                  selectedComponentCode === code &&
                    "!border-2 !border-green-500",
                )}
              >
                <c.Component props={data as any} />
              </div>
            );
          })()}
        </div>
      ))}
    </div>
  );
}
