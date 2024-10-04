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
import SortableSection from "@/components/SortableSection";

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

  const initialSectionsOrder = [
    "skills",
    "projects",
    "experiences",
    "languages",
    "educations",
  ];

  const [sectionsOrder, setSectionsOrder] =
    useState<string[]>(initialSectionsOrder);

  const sectionsMap: { [key: string]: React.ReactNode } = {
    skills: <Skills skills={skills} />,
    projects: <Projects projects={projects} />,
    experiences: <Experiences experiences={experiences} />,
    languages: <Languages languages={languages} />,
    educations: <Educations educations={educations} />,
  };

  return (
    <div className='bg-white font-sans space-y-10 p-8 max-w-[21cm] max-h-[25cm]'>
      <main className='mx-auto'>
        {/* info section */}
        <Info
          name={name}
          title={title}
          contact={contact}
          socialLinks={socialLinks}
        />
        {/* about section */}
        <About about={about} />
        {/* dnd-kit برای ترتیب بخش‌ها */}
        <SortableSection
          id='main-sections'
          items={sectionsOrder}
          setItems={setSectionsOrder}
          getItemId={(sectionId) => sectionId}
          renderItem={(sectionId) => sectionsMap[sectionId]}
        />
      </main>
    </div>
  );
}