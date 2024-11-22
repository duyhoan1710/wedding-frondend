"use client";

import { getTemplate, getTemplates } from "@/lib/fetchers";
import { useQuery } from "@tanstack/react-query";

export const LIST_TEMPLATE_KEY = "LIST_TEMPLATE_KEY";
export const TEMPLATE_KEY = "TEMPLATE_KEY";

export const useTemplates = ({
  page,
  limit,
  isTemplateSample = false,
}: {
  page: number;
  limit: number;
  isTemplateSample?: boolean;
}) => {
  return useQuery({
    queryKey: [LIST_TEMPLATE_KEY, page, limit, isTemplateSample],
    queryFn: () => getTemplates({ page, limit, isTemplateSample }),
  });
};

export const useTemplate = (templateId: string) => {
  return useQuery({
    queryKey: [TEMPLATE_KEY, templateId],
    queryFn: () => getTemplate(templateId),
    enabled: !!templateId,
  });
};
