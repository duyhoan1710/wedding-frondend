"use client";

import { v4 as uuidv4 } from "uuid";
import { ButtonCustom } from "@/components/common/Button";
import { WeddingComponent, findComponentByCode } from "@/components/wedding";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useMemo, useState } from "react";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "@/components/common/Dnd/SortableItem";
import classNames from "classnames";
import { EComponentCode } from "@/lib/enum";
import { IBannerV1 } from "@/components/wedding/Banner/v1";
import { IForeWordV1 } from "@/components/wedding/Foreword/v1";
import { ITimelineV1 } from "@/components/wedding/Timeline/v1";
import { IImagesV1 } from "@/components/wedding/Images/v1";
import { IAddressV1 } from "@/components/wedding/Address/v1";
import { BankAccountEditerV1 } from "@/components/wedding/BankAccount/v1/Editer";
import { IBankAccountV1 } from "@/components/wedding/BankAccount/v1";
import { IFooterV1 } from "@/components/wedding/Footer/v1";

export type ITemplate =
  | {
      id: number | string;
      code: EComponentCode.BANNER_V1;
      data: IBannerV1;
    }
  | {
      id: number | string;
      code: EComponentCode.FOREWORD_V1;
      data: IForeWordV1;
    }
  | {
      id: number | string;
      code: EComponentCode.ADDRESS_V1;
      data: IAddressV1;
    }
  | {
      id: number | string;
      code: EComponentCode.TIMELINE_V1;
      data: ITimelineV1;
    }
  | {
      id: number | string;
      code: EComponentCode.IMAGES_V1;
      data: IImagesV1;
    }
  | {
      id: number | string;
      code: EComponentCode.BANK_ACCOUNT_v1;
      data: IBankAccountV1;
    }
  | {
      id: number | string;
      code: EComponentCode.FOOTER_V1;
      data: IFooterV1;
    };

export default function TemplateDetail() {
  const [selectedComponentId, setSelectedComponentId] =
    useState<EComponentCode>();

  const [templates, setTemplates] = useState<ITemplate[]>([]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const { isOver, setNodeRef } = useDroppable({
    id: "root",
  });

  function handleDragOver(event: DragOverEvent) {
    const { active, over, activatorEvent } = event as any;

    if (!active || !over) return;

    const { id: activeId, data: activeData } = active;
    const { id: overId, data: overData } = over;

    if (
      activeData?.current?.sortable?.containerId ===
        overData?.current?.sortable?.containerId ||
      (activeData?.current?.sortable?.containerId === "root" &&
        ["component-list", undefined].includes(
          overData?.current?.sortable?.containerId,
        ))
    ) {
      return;
    }

    setTemplates((pre: ITemplate[]) => {
      const overItems = [...pre];

      const overIndex = [...overItems].map(({ id }) => id).indexOf(overId);

      const isBelowLastItem =
        over &&
        overIndex === overItems.length - 1 &&
        activatorEvent?.clientY > over.rect.offsetTop + over.rect.height;

      const modifier = isBelowLastItem ? 1 : 0;

      const newIndex =
        overIndex >= 0 ? overIndex + modifier : overItems.length + 1;

      const { defaultData } = findComponentByCode(activeId as string);

      overItems.splice(newIndex, 0, {
        id: activeId,
        code: activeId,
        data: defaultData,
      } as ITemplate);

      return overItems;
    });
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event as any;

    if (!active || !over) return;

    const { id: activeId, data: activeData } = active;
    const { id: overId, data: overData } = over;

    if (
      activeData?.current?.sortable?.containerId !==
      overData?.current?.sortable?.containerId
    ) {
      return;
    }

    setTemplates((pre: ITemplate[]) => {
      const overItems = [...pre];

      const activeIndex = overItems.indexOf(activeId);
      const overIndex = overItems.indexOf(overId);

      return arrayMove(overItems, activeIndex, overIndex);
    });
    setSelectedComponentId(overData.current.code);
  }

  function handleDragStart(event: DragEndEvent) {}

  const EditerComponent = useMemo(() => {
    if (!selectedComponentId) return;

    return findComponentByCode(selectedComponentId)?.EditerComponent;
  }, [selectedComponentId]);

  console.log(templates, selectedComponentId);

  return (
    <div className="min-h-screen">
      <div className="flex h-[72px] items-center justify-end border-b border-color-border px-4">
        <ButtonCustom color="primary" className="w-fit">
          Save
        </ButtonCustom>
      </div>

      <div className="flex">
        <div className="flex flex-grow ">
          <DndContext
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDragStart={handleDragStart}
            sensors={sensors}
            collisionDetection={closestCenter}
          >
            <div className="h-[calc(100vh-72px)] min-w-[235px] flex-col overflow-x-hidden overflow-y-scroll border-r border-color-border p-2 md:w-1/3 lg:w-1/5 2xl:min-w-[324px]">
              <WeddingComponent />
            </div>

            <div className="flex h-[calc(100vh-72px)] grow overflow-y-scroll py-2 px-8">
              <SortableContext
                id="root"
                items={templates}
                strategy={verticalListSortingStrategy}
              >
                <div
                  ref={setNodeRef}
                  className={classNames(
                    "h-full w-full rounded border border-color-border",
                    isOver ? "border-green-400" : "",
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
                          <div className="m-2 h-fit rounded border border-color-border">
                            <Component {...props} />
                          </div>
                        );
                      })()}
                    </SortableItem>
                  ))}
                </div>
              </SortableContext>
            </div>
          </DndContext>
        </div>

        <div className="flex w-1/4 min-w-[300px] flex-col border-l border-color-border lg:w-1/5">
          <div className="h-[calc(100vh-72px)] flex-grow overflow-y-scroll p-4">
            {EditerComponent && (
              <EditerComponent
                data={
                  templates.find(
                    (template) => template.id === selectedComponentId,
                  )!.data as any
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
