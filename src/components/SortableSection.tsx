import React, { ReactNode } from "react";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import SortableItem from "@/components/SortableItem";

interface SortableSectionProps<T> {
  id: string; // شناسه بخش (مثلاً "skills" یا "projects")
  items: T[];
  setItems: (items: T[]) => void;
  renderItem: (item: T) => ReactNode;
  getItemId: (item: T) => string | number;
}

const SortableSection = <T,>({
  items,
  setItems,
  renderItem,
  getItemId,
}: SortableSectionProps<T>) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex((item) => getItemId(item) === active.id);
      const newIndex = items.findIndex((item) => getItemId(item) === over.id);
      setItems(arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}>
      <SortableContext
        items={items.map(getItemId)}
        strategy={verticalListSortingStrategy}>
        {items.map((item) => (
          <SortableItem
            key={getItemId(item)}
            id={getItemId(item)}>
            {renderItem(item)}
          </SortableItem>
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default SortableSection;
