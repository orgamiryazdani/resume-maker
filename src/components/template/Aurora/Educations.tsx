import { education } from "@/types/UserResumeData";
import { FC } from "react";

const Educations: FC<{ educations: education[] }> = ({ educations }) => {
  return (
    <section aria-labelledby='education-heading'>
      <h2
        id='education-heading'
        className='text-lg font-bold text-gray-800 mb-1'>
        سوابق تحصیلی
      </h2>
      <ul className='space-y-2'>
        {educations.map((education) => (
          <li key={education.id}>
            <h3 className='text-sm font-semibold mb-1 text-gray-800'>
              {education.degree}
            </h3>
            <p className='text-gray-600 text-[13px]'>
              {education.institution} | {education.date}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Educations;