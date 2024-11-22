"use client";

import SortableItem from "@/components/common/Dnd/SortableItem";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import classNames from "classnames";
import { findComponentByCode } from "./ListComponents";
import { ITemplate } from "./page";
import FadeInSection from "@/components/common/FadeInSection";

export function PreviewTemplate({
  templates,
  setNodeRef,
  selectedComponentId,
}: {
  templates: ITemplate[];
  setNodeRef?: (element: HTMLElement | null) => void;
  selectedComponentId?: string;
}) {
  return (
    <SortableContext
      id="preview"
      items={templates}
      strategy={verticalListSortingStrategy}
    >
      <div
        ref={setNodeRef}
        className={classNames(
          !templates.length ? "h-full" : "h-fit",
          "w-full rounded border border-color-border",
        )}
      >
        {templates.map(({ id, code }) => (
          <SortableItem key={id} id={id} code={code}>
            {(() => {
              const { Component } = findComponentByCode(code);

              const props = templates.find(
                (template) => template.code === code,
              )!.data as any;

              return (
                <div
                  className={classNames(
                    "m-2 h-fit rounded border border-gray-500",
                    selectedComponentId === id && "!border-2 !border-green-500",
                  )}
                >
                  <Component {...props} />
                </div>
              );
            })()}
          </SortableItem>
        ))}
      </div>
    </SortableContext>
  );
}
