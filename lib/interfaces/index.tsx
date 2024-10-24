import { IAddressV1 } from "@/components/wedding/Address/v1";
import { IBankAccountV1 } from "@/components/wedding/BankAccount/v1";
import { IBannerV1 } from "@/components/wedding/Banner/v1";
import { IFooterV1 } from "@/components/wedding/Footer/v1";
import { IForeWordV1 } from "@/components/wedding/Foreword/v1";
import { IImagesV1 } from "@/components/wedding/Images/v1";
import { ITimelineV1 } from "@/components/wedding/Timeline/v1";
import { StaticImageData } from "next/image";
import { EComponentCode } from "../enum";

export type IComponent =
  | {
      code: EComponentCode.BANNER_V1;
      Img?: StaticImageData;
      Component: (props: IBannerV1) => JSX.Element;
      EditerComponent: (props: { data: IBannerV1 }) => JSX.Element;
      defaultData: IBannerV1;
    }
  | {
      code: EComponentCode.FOREWORD_V1;
      Img?: StaticImageData;
      Component: (props: IForeWordV1) => JSX.Element;
      EditerComponent: (props: { data: IForeWordV1 }) => JSX.Element;
      defaultData: IForeWordV1;
    }
  | {
      code: EComponentCode.ADDRESS_V1;
      Img?: StaticImageData;
      Component: (props: IAddressV1) => JSX.Element;
      EditerComponent: (props: { data: IAddressV1 }) => JSX.Element;
      defaultData: IAddressV1;
    }
  | {
      code: EComponentCode.TIMELINE_V1;
      Img?: StaticImageData;
      Component: (props: ITimelineV1) => JSX.Element;
      EditerComponent: (props: { data: ITimelineV1 }) => JSX.Element;
      defaultData: ITimelineV1;
    }
  | {
      code: EComponentCode.IMAGES_V1;
      Img?: StaticImageData;
      Component: (props: IImagesV1) => JSX.Element;
      EditerComponent: (props: { data: IImagesV1 }) => JSX.Element;
      defaultData: IImagesV1;
    }
  | {
      code: EComponentCode.BANK_ACCOUNT_v1;
      Img?: StaticImageData;
      Component: (props: IBankAccountV1) => JSX.Element;
      EditerComponent?: (props: { data: IBankAccountV1 }) => JSX.Element;
      defaultData: IBankAccountV1;
    }
  | {
      code: EComponentCode.FOOTER_V1;
      Img?: StaticImageData;
      Component: (props: IFooterV1) => JSX.Element;
      EditerComponent: (props: IFooterV1) => JSX.Element;
      defaultData: IFooterV1;
    };

export type IComponents = (
  | {
      name: "Banner";
      versions: {
        code: EComponentCode.BANNER_V1;
        Img?: StaticImageData;
        Component: (props: IBannerV1) => JSX.Element;
        EditerComponent: (props: { data: IBannerV1 }) => JSX.Element;
        defaultData: IBannerV1;
      }[];
    }
  | {
      name: "Foreword";
      versions: {
        code: EComponentCode.FOREWORD_V1;
        Img?: StaticImageData;
        Component: (props: IForeWordV1) => JSX.Element;
        EditerComponent: (props: { data: IForeWordV1 }) => JSX.Element;
        defaultData: IForeWordV1;
      }[];
    }
  | {
      name: "Address";
      versions: {
        code: EComponentCode.ADDRESS_V1;
        Img?: StaticImageData;
        Component: (props: IAddressV1) => JSX.Element;
        EditerComponent: (props: { data: IAddressV1 }) => JSX.Element;
        defaultData: IAddressV1;
      }[];
    }
  | {
      name: "Timeline";
      versions: {
        code: EComponentCode.TIMELINE_V1;
        Img?: StaticImageData;
        Component: (props: ITimelineV1) => JSX.Element;
        EditerComponent: (props: { data: ITimelineV1 }) => JSX.Element;
        defaultData: ITimelineV1;
      }[];
    }
  | {
      name: "Images";
      versions: {
        code: EComponentCode.IMAGES_V1;
        Img?: StaticImageData;
        Component: (props: IImagesV1) => JSX.Element;
        EditerComponent: (props: { data: IImagesV1 }) => JSX.Element;
        defaultData: IImagesV1;
      }[];
    }
  | {
      name: "Bank account";
      versions: {
        code: EComponentCode.BANK_ACCOUNT_v1;
        Img?: StaticImageData;
        Component: (props: IBankAccountV1) => JSX.Element;
        EditerComponent?: (props: { data: IBankAccountV1 }) => JSX.Element;
        defaultData: IBankAccountV1;
      }[];
    }
  | {
      name: "Footer";
      versions: {
        code: EComponentCode.FOOTER_V1;
        Img?: StaticImageData;
        Component: (props: IFooterV1) => JSX.Element;
        EditerComponent: (props: IFooterV1) => JSX.Element;
        defaultData: IFooterV1;
      }[];
    }
)[];
