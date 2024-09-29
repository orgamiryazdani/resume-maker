import { skills } from "@/types/UserResumeData";
import { FC } from "react";

const Skills: FC<skills> = ({ skills }) => {
  return (
    <section
      aria-labelledby='skills-heading'
      className='mb-4'>
      <h2
        id='skills-heading'
        className='text-lg font-bold text-gray-800 mb-2'>
        مهارت‌ها
      </h2>
      <ul className='flex flex-wrap -m-1'>
        {skills.map((skill) => (
          <li
            key={skill}
            className='m-1 bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs font-medium'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;