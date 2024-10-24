"use client";

import { useTemplates } from "@/lib/hooks/queries/useTemplates";
import { useState } from "react";
import { CardTemplate } from "../common/CardTemplate";

export default function TemplatesPage() {
  const [filter, setFilter] = useState({
    page: 1,
    limit: 10,
    isTemplateSample: false,
  });

  const { data: templates, isPending } = useTemplates(filter);

  return (
    <div className="p-4">
      <div className="-mx-2 flex flex-wrap gap-y-4">
        {templates?.data?.map((template) => (
          <CardTemplate
            template={template}
            key={template.id}
            className="md:w1/3 h-48 w-full px-2 sm:w-1/2 lg:w-1/4 xl:w-1/5 2xl:w-1/6"
          />
        ))}
      </div>
    </div>
  );
}
