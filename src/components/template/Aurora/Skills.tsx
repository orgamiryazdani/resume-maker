import { FC, useState } from "react";
import SortableSection from "@/components/SortableSection";
import { skills as SkillsType } from "@/types/UserResumeData";

const Skills: FC<SkillsType> = ({ skills }) => {
  const [skillsOrder, setSkillsOrder] = useState(skills);

  return (
    <section
      aria-labelledby='skills-heading'
      className='mb-4'>
      <h2
        id='skills-heading'
        className='text-lg font-bold text-gray-800 mb-2'>
        مهارت‌ها
      </h2>
      <ul className='flex flex-wrap'>
        <SortableSection
          id='skills-section'
          items={skillsOrder}
          setItems={setSkillsOrder}
          getItemId={(skill) => skill.id}
          renderItem={(skill) => (
            <li className='m-1 bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs font-medium'>
              {skill.name}
            </li>
          )}
        />
      </ul>
    </section>
  );
};

export default Skills;