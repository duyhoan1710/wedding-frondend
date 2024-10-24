import { ITemplate } from "@/lib/interfaces/templates";
import { timeAgo } from "@/lib/utils";
import classNames from "classnames";
import Link from "next/link";

export function CardTemplate({
  template,
  className,
}: {
  template: ITemplate;
  className: string;
}) {
  return (
    <Link
      href={`templates/${template.title}`}
      className={classNames("flex cursor-pointer flex-col", className)}
    >
      <div className="flex-grow rounded border border-color-border transition-all hover:bg-black hover:opacity-20"></div>
      <div className=" font-medium">{template.title}</div>
      <div className=" text-sm text-gray-secondary">
        Last edited: {timeAgo(new Date(template.updated_at), true)}
      </div>
    </Link>
  );
}
