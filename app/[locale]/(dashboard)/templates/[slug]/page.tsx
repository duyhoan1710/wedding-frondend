"use client";

import { ButtonCustom } from "@/components/common/Button";
import { WeddingComponent, findComponentByCode } from "./ListComponents";
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
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import { EComponentCode } from "@/lib/enum";
import { IBannerV1 } from "@/components/wedding/Banner/v1";
import { IForeWordV1 } from "@/components/wedding/Foreword/v1";
import { ITimelineV1 } from "@/components/wedding/Timeline/v1";
import { IImagesV1 } from "@/components/wedding/Images/v1";
import { IAddressV1 } from "@/components/wedding/Address/v1";
import { IBankAccountV1 } from "@/components/wedding/BankAccount/v1";
import { IFooterV1 } from "@/components/wedding/Footer/v1";
import { PreviewTemplate } from "./PreviewTemplate";
import { PreviewTemplateProvider } from "./PreviewTemplateProvider";
import { useParams } from "next/navigation";
import classNames from "classnames";

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
  const params = useParams();

  const [selectedComponentId, setSelectedComponentId] =
    useState<EComponentCode>();

  const [templates, setTemplates] = useState<ITemplate[]>([]);

  const [isPC, setIsPC] = useState(true);

  const { setNodeRef } = useDroppable({
    id: "preview",
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragOver(event: DragOverEvent) {
    const { active, over, activatorEvent } = event as any;

    if (!active || !over) return;

    const { id: activeId, data: activeData } = active;
    const { id: overId, data: overData } = over;

    if (
      activeData?.current?.sortable?.containerId ===
        overData?.current?.sortable?.containerId ||
      (activeData?.current?.sortable?.containerId === "preview" &&
        ["components", undefined].includes(
          overData?.current?.sortable?.containerId,
        ))
    ) {
      return;
    }

    console.log(
      activeData?.current?.sortable?.containerId,
      overData?.current?.sortable?.containerId,
    );

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

      const { defaultData } = findComponentByCode(activeId);

      overItems.splice(newIndex, 0, {
        id: activeId,
        code: activeId,
        data: defaultData,
      } as ITemplate);

      return overItems;
    });
    setSelectedComponentId(activeId);
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

    if (activeData?.current?.sortable?.containerId === "components") {
      setTemplates((pre: ITemplate[]) => {
        const overItems = [...pre];

        const { defaultData } = findComponentByCode(activeId);

        overItems.push({
          id: activeId,
          code: activeId,
          data: defaultData,
        } as ITemplate);

        return overItems;
      });
      setSelectedComponentId(activeData.current.code);
      return;
    }

    setTemplates((pre: ITemplate[]) => {
      const overItems = [...pre];

      const activeIndex = [...overItems].map(({ id }) => id).indexOf(activeId);
      const overIndex = [...overItems].map(({ id }) => id).indexOf(overId);

      return arrayMove(overItems, activeIndex, overIndex);
    });
    setSelectedComponentId(activeData.current.code);
  }

  function handleDragStart(event: DragEndEvent) {}

  const EditerComponent = useMemo(() => {
    if (!selectedComponentId) return;

    return findComponentByCode(selectedComponentId)?.EditerComponent;
  }, [selectedComponentId]);

  return (
    <div className="min-h-screen">
      <div className="flex h-[72px] items-center justify-between border-b border-color-border px-4">
        <h2 className=" text-xl font-semibold">{params?.slug}</h2>

        <div className=" flex justify-center gap-x-2">
          <ButtonCustom color="primary" className="w-fit">
            Save
          </ButtonCustom>
        </div>
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

            <div className="flex grow flex-col items-center justify-center">
              <div className="flex h-[40px] gap-x-2 py-2">
                <ButtonCustom
                  onClick={() => setIsPC(false)}
                  className="h-auto"
                  variant={isPC ? "bordered" : undefined}
                >
                  Mobile
                </ButtonCustom>
                <ButtonCustom
                  onClick={() => setIsPC(true)}
                  className="h-auto"
                  variant={!isPC ? "bordered" : undefined}
                >
                  PC
                </ButtonCustom>
              </div>

              <div
                className={classNames(
                  "no-scrollbar flex h-[calc(100vh-112px)] grow overflow-y-scroll px-8 pb-2 transition-width",
                  isPC ? "w-full" : "w-[390px]",
                )}
              >
                <PreviewTemplateProvider>
                  <PreviewTemplate
                    templates={templates}
                    setNodeRef={setNodeRef}
                    selectedComponentId={selectedComponentId}
                  />
                </PreviewTemplateProvider>
              </div>
            </div>
          </DndContext>
        </div>

        <div className="flex w-1/4 min-w-[300px] flex-col border-l border-color-border lg:w-1/5">
          <div className="h-[calc(100vh-72px)] flex-grow overflow-y-scroll p-4">
            {EditerComponent &&
              selectedComponentId &&
              templates.find(
                (template) => template?.id === selectedComponentId,
              ) && (
                <EditerComponent
                  code={selectedComponentId}
                  data={
                    templates.find(
                      (template) => template?.id === selectedComponentId,
                    )!.data as any
                  }
                  setData={setTemplates}
                />
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
