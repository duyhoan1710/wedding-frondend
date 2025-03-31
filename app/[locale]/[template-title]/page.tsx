import { PreviewTemplateProvider } from "../(dashboard)/templates/[slug]/PreviewTemplateProvider";
import { getTemplateByTitle } from "@/lib/fetchers";
import FadeInSection from "@/components/common/FadeInSection";
import { TemplateBody } from "./TemplateBody";
import { ITemplate } from "@/components/wedding/interface";

export default async function TemplateDetail({
  params,
}: {
  params: { "template-title": string };
}) {
  const template = await getTemplateByTitle(params["template-title"]);

  const templateDetail: ITemplate = {
    version: template.version,
    components: template?.content?.map((v: { code: any; dataChange: any }) => ({
      code: v.code,
      data: v.dataChange,
    })),
  };

  return (
    <PreviewTemplateProvider>
      <FadeInSection>
        <TemplateBody template={templateDetail} />
      </FadeInSection>
    </PreviewTemplateProvider>
  );
}
