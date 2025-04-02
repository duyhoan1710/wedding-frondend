import Address, { IAddress } from "../components/Address";
import BankAccount, { IBankAccount } from "../components/BankAccount";
import Banner, { IBanner } from "../components/Banner";
import Footer, { IFooter } from "../components/Footer";
import Foreword, { IForeWord } from "../components/Foreword";
import Images, { IImages } from "../components/Images";
import Timeline, { ITimeline } from "../components/Timeline";
import { EComponentCodeV1 } from "../enums";
import { AddressEditor } from "../components/Address/Editor";
import { BannerEditor } from "../components/Banner/Editor";
import { ForewordEditor } from "../components/Foreword/Editor";
import { TimelineEditor } from "../components/Timeline/Editor";
import { ImagesEditor } from "../components/Images/Editor";
import { BankAccountEditor } from "../components/BankAccount/Editor";

// export type ComponentRegistryV1 = {
//   [EComponentCodeV1.BANNER]: {
//     Component: typeof Banner;
//     EditorComponent: typeof BannerEditor;
//     data: IBanner;
//   };
//   [EComponentCodeV1.FOREWORD]: {
//     Component: typeof Foreword;
//     EditorComponent: typeof ForewordEditor;
//     data: IForeWord;
//   };
//   [EComponentCodeV1.ADDRESS]: {
//     Component: typeof Address;
//     EditorComponent: typeof AddressEditor;
//     data: IAddress;
//   };
//   [EComponentCodeV1.TIMELINE]: {
//     Component: typeof Timeline;
//     EditorComponent: typeof TimelineEditor;
//     data: ITimeline;
//   };
//   [EComponentCodeV1.IMAGES]: {
//     Component: typeof Images;
//     EditorComponent: typeof ImagesEditor;
//     data: IImages;
//   };
//   [EComponentCodeV1.BANK_ACCOUNT]: {
//     Component: typeof BankAccount;
//     EditorComponent: typeof BankAccountEditor;
//     data: IBankAccount;
//   };
//   [EComponentCodeV1.FOOTER]: {
//     Component: typeof Footer;
//     EditorComponent: () => JSX.Element;
//     data: IFooter;
//   };
// };

export type IComponentV1 =
  | {
      name: string;
      code: EComponentCodeV1.BANNER;
      Component: typeof Banner;
      EditorComponent: typeof BannerEditor;
      data: IBanner;
    }
  | {
      name: string;
      code: EComponentCodeV1.FOREWORD;
      Component: typeof Foreword;
      EditorComponent: typeof ForewordEditor;
      data: IForeWord;
    }
  | {
      name: string;
      code: EComponentCodeV1.ADDRESS;
      Component: typeof Address;
      EditorComponent: typeof AddressEditor;
      data: IAddress;
    }
  | {
      name: string;
      code: EComponentCodeV1.TIMELINE;
      Component: typeof Timeline;
      EditorComponent: typeof TimelineEditor;
      data: ITimeline;
    }
  | {
      name: string;
      code: EComponentCodeV1.IMAGES;
      Component: typeof Images;
      EditorComponent: typeof ImagesEditor;
      data: IImages;
    }
  | {
      name: string;
      code: EComponentCodeV1.BANK_ACCOUNT;
      Component: typeof BankAccount;
      EditorComponent?: typeof BankAccountEditor;
      data: IBankAccount;
    }
  | {
      name: string;
      code: EComponentCodeV1.FOOTER;
      Component: typeof Footer;
      EditorComponent: () => JSX.Element;
      data: IFooter;
    };
