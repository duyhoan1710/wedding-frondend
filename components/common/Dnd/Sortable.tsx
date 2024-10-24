import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { ReactNode } from "react";

export function Sortable(props: {
  id: string;
  items: any;
  children: ReactNode;
}) {
  const { setNodeRef } = useDroppable({
    id: props.id,
  });

  return (
    <SortableContext
      id={props.id}
      items={props.items}
      strategy={verticalListSortingStrategy}
    >
      <div ref={setNodeRef}>{props.children}</div>
    </SortableContext>
  );
}
