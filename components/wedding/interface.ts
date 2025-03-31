import { EVersion } from "@/lib/enum";
import { IComponentV1 } from "./v1/interfaces";

export type ITemplate =
  | {
      version: EVersion.V1;
      components: Pick<IComponentV1, "code" | "data">[];
    }
  | {
      version: EVersion.V2;
      components: Pick<IComponentV1, "code" | "data">[];
    };

export type IComponent = Pick<IComponentV1, "code" | "data">;
