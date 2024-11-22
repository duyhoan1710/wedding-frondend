import { EComponentCode } from "@/lib/enum";
import { PreviewTemplateProvider } from "../(dashboard)/templates/[slug]/PreviewTemplateProvider";
import { getTemplateByTitle } from "@/lib/fetchers";
import FadeInSection from "@/components/common/FadeInSection";
import { findComponentByCode } from "../(dashboard)/templates/[slug]/ListComponents";
import { TemplateBody } from "./TemplateBody";

export default async function TemplateDetail({
  params,
}: {
  params: { "template-title": string };
}) {
  const template = await getTemplateByTitle(params["template-title"]);

  const templateDetail = template?.content?.map(
    (v: { code: EComponentCode; dataChange: any }) => ({
      id: v.code,
      code: v.code,
      data: v.dataChange,
    }),
  );

  return (
    <PreviewTemplateProvider>
      <FadeInSection>
        <TemplateBody templates={templateDetail} />
      </FadeInSection>
    </PreviewTemplateProvider>
  );
}
