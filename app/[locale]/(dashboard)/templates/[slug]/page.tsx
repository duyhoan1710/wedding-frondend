"use client";

import { ButtonCustom } from "@/components/common/Button";
import { useEffect, useMemo, useState } from "react";

import { PreviewTemplate } from "./PreviewTemplate";
import { PreviewTemplateProvider } from "./PreviewTemplateProvider";
import { useParams, useSearchParams } from "next/navigation";
import classNames from "classnames";
import { useMutation } from "@tanstack/react-query";
import * as templateFetcher from "@/lib/fetchers/templates";
import { toast } from "react-toastify";
import { LoadingCircle } from "@/assets/icons";
import { useTemplate } from "@/lib/hooks/queries/useTemplates";
import { IComponent } from "@/components/wedding/interface";
import { findComponent } from "@/components/wedding";
import { TEMPLATES_V1 } from "@/components/wedding/v1/components";
import { EVersion } from "@/lib/enum";

export default function TemplateDetail() {
  const params = useParams();
  const searchParams = useSearchParams();

  const { data: templateDetail } = useTemplate(params.slug);

  const [selectedComponentCode, setSelectedComponentCode] = useState<string>();

  const [components, setComponents] = useState<IComponent[]>([]);

  useEffect(() => {
    if (templateDetail && templateDetail.content.length) {
      setComponents(
        templateDetail.content.map((v: { code: any; dataChange: any }) => ({
          code: v.code,
          data: v.dataChange,
        })),
      );

      setSelectedComponentCode(templateDetail.content[0].code);
    } else {
      setComponents(TEMPLATES_V1);
      setSelectedComponentCode(TEMPLATES_V1[0].code);
    }
  }, [templateDetail]);

  console.log(components);

  const [isPC, setIsPC] = useState(true);

  // const EditorComponent = useMemo(() => {
  //   if (!selectedComponentCode || !templateDetail) return;

  //   const c = findComponent(templateDetail.version, selectedComponentCode);

  //   return c ? c.EditorComponent : undefined;
  // }, [selectedComponentCode, templateDetail]);

  const EditorComponent = useMemo(() => {
    if (!selectedComponentCode) return;

    const c = findComponent(EVersion.V1, selectedComponentCode);

    return c ? c.EditorComponent : undefined;
  }, [selectedComponentCode]);

  const { mutate: handleSubmit, isPending } = useMutation({
    mutationFn: async () => {
      const payload = components.map((v, i) => ({
        code: v.code,
        dataChange: v.data,
      }));

      return await templateFetcher.updateTemplate(params?.slug, {
        content: payload,
      });
    },
    onSuccess: async () => {
      toast.success("Create template successfully");
    },
    onError: (error: string) => {
      toast.error(error);
    },
  });

  return (
    <div className="min-h-screen">
      <div className="flex h-[72px] items-center justify-between border-b border-color-border px-4">
        <h2 className=" text-xl font-semibold">{searchParams.get("title")}</h2>

        <div className=" flex justify-center gap-x-2">
          <ButtonCustom
            color="primary"
            className="flex w-fit justify-center"
            onClick={() => handleSubmit()}
            disabled={!!isPending}
          >
            {isPending ? <LoadingCircle /> : "Save"}
          </ButtonCustom>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-grow ">
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
              {components.length && (
                <PreviewTemplateProvider>
                  <PreviewTemplate
                    version={EVersion.V1}
                    components={components}
                    setSelectedComponentCode={setSelectedComponentCode}
                    selectedComponentCode={selectedComponentCode}
                  />
                </PreviewTemplateProvider>
              )}
            </div>
          </div>
        </div>

        <div className="flex w-1/4 min-w-[300px] flex-col border-l border-color-border lg:w-1/5">
          <div className="h-[calc(100vh-72px)] flex-grow overflow-y-scroll p-4">
            {EditorComponent &&
              selectedComponentCode &&
              components.find(
                (component) => component?.code === selectedComponentCode,
              ) && (
                <EditorComponent
                  data={
                    components.find(
                      (component) => component?.code === selectedComponentCode,
                    )!.data as any
                  }
                  setData={setComponents as any}
                />
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
