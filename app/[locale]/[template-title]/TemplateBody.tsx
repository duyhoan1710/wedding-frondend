"use client";

import { findComponentByCode } from "../(dashboard)/templates/[slug]/ListComponents";
import { ITemplate } from "../(dashboard)/templates/[slug]/page";

export function TemplateBody({ templates }: { templates: ITemplate[] }) {
  return (
    <div className="flex  flex-col items-center justify-center">
      {templates.map(({ id, code }) => (
        <>
          {(() => {
            const { Component } = findComponentByCode(code);

            const props = templates.find((template) => template.code === code)!
              .data as any;

            return <Component {...props} />;
          })()}
        </>
      ))}
    </div>
  );
}
