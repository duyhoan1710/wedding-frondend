"use client";

import AddressV1, { DEFAULT_DATA_ADDRESS_V1 } from "./Address/v1";
import BankAccountV1, { DEFAULT_DATA_BANK_ACCOUNT_V1 } from "./BankAccount/v1";
import FooterV1, { DEFAULT_DATA_FOOTER_V1 } from "./Footer/v1";
import ForewordV1, { DEFAULT_DATA_FOREWORD_V1 } from "./Foreword/v1";
import ImagesV1, { DEFAULT_DATA_IMAGES_V1 } from "./Images/v1";
import TimelineV1, { DEFAULT_DATA_TIMELINE_V1 } from "./Timeline/v1";
import BannerV1, { DEFAULT_DATA_BANNER_V1 } from "./Banner/v1";
import { AiOutlinePlus } from "react-icons/ai";

import ImageBannerV1 from "@/assets/wedding_img/banner-v1.png";
import ImageForewordV1 from "@/assets/wedding_img/foreword-v1.png";
import ImageAddressV1 from "@/assets/wedding_img/address-v1.png";
import ImageTimelineV1 from "@/assets/wedding_img/memory-v1.png";
import ImageImagesV1 from "@/assets/wedding_img/images-v1.png";
import ImageBankAccountV1 from "@/assets/wedding_img/bank-account-v1.png";
import ImageFooterV1 from "@/assets/wedding_img/footer-v1.png";
import { ImageZoomCustom } from "../common/ImageZoom";
import { Sortable } from "../common/Dnd/Sortable";
import SortableItem from "../common/Dnd/SortableItem";
import { useEffect, useState } from "react";
import { EComponentCode } from "@/lib/enum";
import { BannerEditerV1 } from "./Banner/v1/Editer";
import { ForewordEditerV1 } from "./Foreword/v1/Editer";
import { AddressEditerV1 } from "./Address/v1/Editer";
import { TimelineEditerV1 } from "./Timeline/v1/Editer";
import { ImagesEditerV1 } from "./Images/v1/Editer";
import { BankAccountEditerV1 } from "./BankAccount/v1/Editer";
import { IComponent, IComponents } from "@/lib/interfaces";

export const allComponents: IComponents = [
  {
    name: "Banner",
    versions: [
      {
        code: EComponentCode.BANNER_V1,
        Img: ImageBannerV1,
        Component: BannerV1,
        EditerComponent: BannerEditerV1,
        defaultData: DEFAULT_DATA_BANNER_V1,
      },
    ],
  },
  {
    name: "Foreword",
    versions: [
      {
        code: EComponentCode.FOREWORD_V1,
        Img: ImageForewordV1,
        Component: ForewordV1,
        EditerComponent: ForewordEditerV1,
        defaultData: DEFAULT_DATA_FOREWORD_V1,
      },
    ],
  },
  {
    name: "Address",
    versions: [
      {
        code: EComponentCode.ADDRESS_V1,
        Img: ImageAddressV1,
        Component: AddressV1,
        EditerComponent: AddressEditerV1,
        defaultData: DEFAULT_DATA_ADDRESS_V1,
      },
    ],
  },
  {
    name: "Timeline",
    versions: [
      {
        code: EComponentCode.TIMELINE_V1,
        Img: ImageTimelineV1,
        Component: TimelineV1,
        EditerComponent: TimelineEditerV1,
        defaultData: DEFAULT_DATA_TIMELINE_V1,
      },
    ],
  },
  {
    name: "Images",
    versions: [
      {
        code: EComponentCode.IMAGES_V1,
        Img: ImageImagesV1,
        Component: ImagesV1,
        EditerComponent: ImagesEditerV1,
        defaultData: DEFAULT_DATA_IMAGES_V1,
      },
    ],
  },
  {
    name: "Bank account",
    versions: [
      {
        code: EComponentCode.BANK_ACCOUNT_v1,
        Img: ImageBankAccountV1,
        Component: BankAccountV1,
        EditerComponent: BankAccountEditerV1,
        defaultData: DEFAULT_DATA_BANK_ACCOUNT_V1,
      },
    ],
  },
  {
    name: "Footer",
    versions: [
      {
        code: EComponentCode.FOOTER_V1,
        Img: ImageFooterV1,
        Component: FooterV1,
        EditerComponent: () => <></>,
        defaultData: DEFAULT_DATA_FOOTER_V1,
      },
    ],
  },
];

export const findComponentByCode = (code: string): IComponent => {
  for (const c of allComponents) {
    for (const version of c.versions) {
      if (version.code === code) {
        return version;
      }
    }
  }

  return {} as IComponent;
};

export function WeddingComponent() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [dragItem, setDragItem] = useState<string | undefined>();

  const handleMouseDown = (code: string) => {
    setDragItem(code);
  };

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (!dragItem) return;

      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
      if (!dragItem) return;

      setDragItem(undefined);
    };

    document?.addEventListener("mousemove", handleMouseMove);
    document?.addEventListener("mouseup", handleMouseUp);

    return () => {
      document?.removeEventListener("mousemove", handleMouseMove);
      document?.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragItem]);

  return (
    <div className="h-full rounded border border-color-border p-2">
      <Sortable items={[]} id="component-list">
        {allComponents.map((component) => (
          <div key={component.name} className="mb-2">
            <div className=" mb-2 font-semibold">{component.name}</div>

            <div className="flex flex-wrap gap-2 rounded-md px-3">
              {component.versions.map((version) => (
                <div
                  key={version.code}
                  onMouseDown={() => handleMouseDown(version.code)}
                >
                  <SortableItem id={version.code} code={version.code}>
                    <ImageZoomCustom
                      src={version.Img}
                      className="h-16 w-20 rounded border border-color-border  object-cover p-1"
                      classNameZoomImg="object-contain rounded border border-color-border p-1 bg-gray-200"
                      zoomWidth={400}
                      zoomHeight={300}
                      isDisplayZoomImage={!dragItem}
                    />
                  </SortableItem>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Sortable>

      {!!dragItem && (
        <div
          style={{
            left: position.x,
            top: position.y,
          }}
          className=" absolute flex h-16 w-16 items-center justify-center rounded border border-dashed border-color-border"
        >
          <AiOutlinePlus />
        </div>
      )}
    </div>
  );
}
