import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { FC } from "react";

interface SortableItemProps {
  id: string | number;
  children: React.ReactNode;
}

const SortableItem: FC<SortableItemProps> = ({ id, children }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: "grab",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className='relative rounded'>
      {/* اضافه کردن یک هندل برای درگ (اختیاری) */}
      {/* <div className="absolute top-2 left-2 cursor-grab"> */}
      {/* &#x2630; آیکون منو افقی به عنوان هندل */}
      {/* </div> */}
      <div className='ml-0'>{children}</div>
    </div>
  );
};

export default SortableItem;
