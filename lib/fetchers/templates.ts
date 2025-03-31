import { EVersion } from "../enum";
import { fetchWrapper } from "../fetchWrapper";
import { IListTemplatesResponse } from "../interfaces/templates";

export const getTemplates = async ({
  page,
  limit,
  isTemplateSample = false,
}: {
  page: number;
  limit: number;
  isTemplateSample?: boolean;
}) => {
  return fetchWrapper.get<IListTemplatesResponse>(
    `templates?page=${page}&limit=${limit}`,
  );
};

export const createTemplate = (payload: { title: string }) => {
  return fetchWrapper.post(`templates`, payload);
};

export const createTemplateContent = (
  templateId: string,
  payload: {
    isDraft: boolean;
    content: {
      code: string;
      action: string;
      positionAfter?: string;
      dataChange?: { [x: string]: any };
    }[];
  },
) => {
  return fetchWrapper.put(`templates/${templateId}/content`, payload);
};

export const getTemplate = (templateId: string) => {
  return fetchWrapper.get<{
    title: string;
    version: EVersion;
    content: { code: string; dataChange: any }[];
    updatedAt: Date;
  }>(`templates/${templateId}`);
};

export const getTemplateByTitle = (title: string) => {
  return fetchWrapper.get<{
    title: string;
    version: EVersion;
    content: { code: string; dataChange: any }[];
    updatedAt: Date;
  }>(`templates/title/${title}`, undefined, { public: true });
};
