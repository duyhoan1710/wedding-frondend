import Address, { DEFAULT_DATA_ADDRESS, IAddress } from "./Address";
import { AddressEditor } from "./Address/Editor";
import BankAccount, {
  DEFAULT_DATA_BANK_ACCOUNT,
  IBankAccount,
} from "./BankAccount";
import { BankAccountEditor } from "./BankAccount/Editor";
import Banner, { DEFAULT_DATA_BANNER, IBanner } from "./Banner";
import { BannerEditor } from "./Banner/Editor";
import Footer, { DEFAULT_DATA_FOOTER, IFooter } from "./Footer";
import Foreword, { DEFAULT_DATA_FOREWORD, IForeWord } from "./Foreword";
import { ForewordEditor } from "./Foreword/Editor";
import Images, { DEFAULT_DATA_IMAGES, IImages } from "./Images";
import { ImagesEditor } from "./Images/Editor";
import Timeline, { DEFAULT_DATA_TIMELINE, ITimeline } from "./Timeline";
import { TimelineEditor } from "./Timeline/Editor";
import { IComponentV1 } from "../interfaces";
import { EComponentCodeV1 } from "../enums";

export type ITemplateV1 =
  | {
      code: EComponentCodeV1.BANNER;
      data: IBanner;
    }
  | {
      code: EComponentCodeV1.FOREWORD;
      data: IForeWord;
    }
  | {
      code: EComponentCodeV1.ADDRESS;
      data: IAddress;
    }
  | {
      code: EComponentCodeV1.TIMELINE;
      data: ITimeline;
    }
  | {
      code: EComponentCodeV1.IMAGES;
      data: IImages;
    }
  | {
      code: EComponentCodeV1.BANK_ACCOUNT;
      data: IBankAccount;
    }
  | {
      code: EComponentCodeV1.FOOTER;
      data: IFooter;
    };

export const TEMPLATES_V1: IComponentV1[] = [
  {
    name: "Banner",
    code: EComponentCodeV1.BANNER,
    Component: Banner,
    EditorComponent: BannerEditor,
    data: DEFAULT_DATA_BANNER,
  },
  {
    name: "Foreword",
    code: EComponentCodeV1.FOREWORD,
    Component: Foreword,
    EditorComponent: ForewordEditor,
    data: DEFAULT_DATA_FOREWORD,
  },
  {
    name: "Address",
    code: EComponentCodeV1.ADDRESS,
    Component: Address,
    EditorComponent: AddressEditor,
    data: DEFAULT_DATA_ADDRESS,
  },
  {
    name: "Timeline",
    code: EComponentCodeV1.TIMELINE,
    Component: Timeline,
    EditorComponent: TimelineEditor,
    data: DEFAULT_DATA_TIMELINE,
  },
  {
    name: "Images",
    code: EComponentCodeV1.IMAGES,
    Component: Images,
    EditorComponent: ImagesEditor,
    data: DEFAULT_DATA_IMAGES,
  },
  {
    name: "Bank account",
    code: EComponentCodeV1.BANK_ACCOUNT,
    Component: BankAccount,
    EditorComponent: BankAccountEditor,
    data: DEFAULT_DATA_BANK_ACCOUNT,
  },
  {
    name: "Footer",
    code: EComponentCodeV1.FOOTER,
    Component: Footer,
    EditorComponent: () => <></>,
    data: DEFAULT_DATA_FOOTER,
  },
];
