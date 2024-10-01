"use client";
import Info from "./Info";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experiences from "./Experiences";
import Languages from "./Languages";
import Educations from "./Educations";
import { userData } from "@/fakeData";
import { useState } from "react";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "@/components/SortableItem";

export default function Aurora() {
  const {
    name,
    title,
    contact,
    socialLinks,
    about,
    skills,
    projects,
    experiences,
    languages,
    educations,
  } = userData;

  const [sectionsOrder, setSectionsOrder] = useState<string[]>([
    "skills",
    "projects",
    "experiences",
    "languages",
    "educations",
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over?.id) {
      setSectionsOrder((items) => {
        const oldIndex = items.indexOf(active.id as string);
        const newIndex = items.indexOf(over.id as string);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className='bg-white font-sans space-y-10 p-8 max-w-[21cm] max-h-[25cm]'>
      <main
        className='mx-auto bg-red-500'>
        {/* info section */}
        <Info
          name={name}
          title={title}
          contact={contact}
          socialLinks={socialLinks}
        />
        {/* about section */}
        <About about={about} />
        {/* dnd-kit */}
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}>
          <SortableContext
            items={sectionsOrder}
            strategy={verticalListSortingStrategy}>
            {sectionsOrder.map((sectionId) => {
              switch (sectionId) {
                //  skills section
                case "skills":
                  return (
                    <SortableItem
                      key='skills'
                      id='skills'>
                      <Skills skills={skills} />
                    </SortableItem>
                  );
                //  projects section
                case "projects":
                  return (
                    <SortableItem
                      key='projects'
                      id='projects'>
                      <Projects projects={projects} />
                    </SortableItem>
                  );
                // experiences section
                case "experiences":
                  return (
                    <SortableItem
                      key='experiences'
                      id='experiences'>
                      <Experiences experiences={experiences} />
                    </SortableItem>
                  );
                //  Languages section
                case "languages":
                  return (
                    <SortableItem
                      key='languages'
                      id='languages'>
                      <Languages languages={languages} />
                    </SortableItem>
                  );
                //  educations section
                case "educations":
                  return (
                    <SortableItem
                      key='educations'
                      id='educations'>
                      <Educations educations={educations} />
                    </SortableItem>
                  );
                default:
                  return null;
              }
            })}
          </SortableContext>
        </DndContext>
      </main>
    </div>
  );
}
