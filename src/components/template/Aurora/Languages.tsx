import { language } from "@/types/UserResumeData";
import { FC } from "react";

const Languages: FC<{ languages: language[] }> = ({ languages }) => {
  return (
    <section
      aria-labelledby='languages-heading'
      className='mb-4'>
      <h2
        id='languages-heading'
        className='text-lg font-bold text-gray-800 mb-1'>
        زبان‌ها
      </h2>
      <ul className='list-disc list-inside text-gray-700'>
        {languages.map((language) => (
          <li
            key={language.id}
            className='text-[13px]'>
            {language.title} ({language.level})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Languages;