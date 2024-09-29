import { FC } from "react";

const About: FC<{ about: string }> = ({ about }) => {
  return (
    <section
      aria-labelledby='about-heading'
      className='mb-4'>
      <h2
        id='about-heading'
        className='text-lg font-bold text-gray-800 mb-2'>
        درباره من
      </h2>
      <p className='text-gray-700 leading-relaxed text-sm'>{about}</p>
    </section>
  );
};

export default About;