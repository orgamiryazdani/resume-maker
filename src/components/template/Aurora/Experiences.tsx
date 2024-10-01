import { experience } from "@/types/UserResumeData";
import { FC } from "react";

const Experiences: FC<{ experiences: experience[] }> = ({ experiences }) => {
  return (
    <section
      aria-labelledby='experience-heading'
      className='mb-4'>
      <h2
        id='experience-heading'
        className='text-lg font-bold text-gray-800 mb-1'>
        سوابق شغلی
      </h2>
      <ul className='space-y-2'>
        {experiences.map((experience) => (
          <li key={experience.id}>
            <h3 className='text-sm font-semibold mb-1 text-gray-800'>
              {experience.title}
            </h3>
            <p className='text-gray-600 text-[13px] mb-1'>
              {experience.company} | {experience.date}
            </p>
            <p className='text-gray-700 text-sm mb-1'>
              {experience.responsibilities}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experiences;