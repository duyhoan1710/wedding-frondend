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
