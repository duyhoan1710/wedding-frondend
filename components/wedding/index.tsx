import { EVersion } from "@/lib/enum";
import { TEMPLATES_V1 } from "./v1/components";
import { IComponentV1 } from "./v1/interfaces";

export const findComponent = (
  version: EVersion,
  code: string,
): IComponentV1 | undefined => {
  return All_TEMPLATES.find(
    (template) => template.version === version,
  )?.components?.find((component) => component.code === code);
};

export const All_TEMPLATES = [
  {
    version: EVersion.V1,
    components: TEMPLATES_V1,
  },
];
