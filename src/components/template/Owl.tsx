import { userData } from "@/fakeData";
import { FC } from "react";

const Owl: FC = () => {
  return (
    <>
      {userData.map((user) => (
        <div
          key={user.title}
          className='bg-white font-sans'>
          <main className='container mx-auto p-6 max-w-[210mm] min-h-[297mm]'>
            <header className='text-center mb-6'>
              <h1 className='text-3xl font-bold text-gray-800 mb-1'>
                {user.name}
              </h1>
              <p className='text-lg text-gray-600 mb-2'>{user.title}</p>
              <address className='not-italic text-sm'>
                <ul className='flex justify-center space-x-3 rtl:space-x-reverse'>
                  <li className='text-gray-600'>
                    <i className='fas fa-map-marker-alt'></i>{" "}
                    {user.contact.location}
                  </li>
                  <li className='text-gray-600'>
                    <a
                      href={`mailto:${user.contact.email}`}
                      className='hover:text-blue-500'>
                      <i className='fas fa-envelope'></i> {user.contact.email}
                    </a>
                  </li>
                  <li className='text-gray-600'>
                    <a
                      href={`tel:+ ${user.contact.phone}`}
                      className='hover:text-blue-500'>
                      <i className='fas fa-phone'></i> {user.contact.phone}
                    </a>
                  </li>
                </ul>
              </address>

              <nav className='mt-2'>
                <ul className='flex justify-center space-x-3 rtl:space-x-reverse text-sm'>
                  {user.socialLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        className='text-blue-500 hover:text-blue-700'>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </header>

            <section
              className='mb-6'
              aria-labelledby='about-heading'>
              <h2
                id='about-heading'
                className='text-xl font-bold text-gray-800 mb-2'>
                درباره من
              </h2>
              <p className='text-sm text-gray-700'>{user.about}</p>
            </section>

            <section
              className='mb-6'
              aria-labelledby='skills-heading'>
              <h2
                id='skills-heading'
                className='text-xl font-bold text-gray-800 mb-2'>
                مهارت‌ها
              </h2>
              <ul className='flex flex-wrap text-sm'>
                {user.skills.map((skill) => (
                  <li
                    key={skill}
                    className='bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold mr-2 mb-2'>
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            <section
              className='mb-6'
              aria-labelledby='projects-heading'>
              <h2
                id='projects-heading'
                className='text-xl font-bold text-gray-800 mb-2'>
                پروژه‌ها
              </h2>
              <ul className='space-y-4'>
                {user.project.map((project) => (
                  <li
                    key={project.name}
                    className='border-b pb-4'>
                    <h3 className='text-lg font-semibold mb-1'>
                      {project.name}
                    </h3>
                    <p className='text-sm text-gray-600 mb-1'>
                      {project.description}
                    </p>
                    {project.links.map((link) => (
                      <a
                        key={link.name}
                        href={link.link}
                        className='text-sm text-blue-500 hover:text-blue-700'>
                        {link.name}
                      </a>
                    ))}
                  </li>
                ))}
              </ul>
            </section>

            <section
              className='mb-6'
              aria-labelledby='experience-heading'>
              <h2
                id='experience-heading'
                className='text-xl font-bold text-gray-800 mb-2'>
                سوابق شغلی
              </h2>
              <ul className='space-y-4'>
                {user.experience.map((exp) => (
                  <li key={exp.title}>
                    <h3 className='text-lg font-semibold'>{exp.title}</h3>
                    <p className='text-sm text-gray-600'>
                      {exp.company} | {exp.date}
                    </p>
                    <ul className='list-disc list-inside text-sm text-gray-700 mt-1'>
                      <li>{exp.responsibilities}</li>
                    </ul>
                  </li>
                ))}
              </ul>
            </section>

            <section
              className='mb-6'
              aria-labelledby='languages-heading'>
              <h2
                id='languages-heading'
                className='text-xl font-bold text-gray-800 mb-2'>
                زبان‌ها
              </h2>
              <ul className='list-disc list-inside text-sm text-gray-700'>
                {user.languages.map((language) => (
                  <li key={language.title}>
                    {language.title} ( {language.level} )
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby='education-heading'>
              <h2
                id='education-heading'
                className='text-xl font-bold text-gray-800 mb-2'>
                سوابق تحصیلی
              </h2>
              <ul className='space-y-2'>
                {user.educations.map((education) => (
                  <li key={education.degree}>
                    <h3 className='text-lg font-semibold'>
                      {education.degree}
                    </h3>
                    <p className='text-sm text-gray-600'>
                      {education.institution} | {education.date}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </main>
        </div>
      ))}
    </>
  );
};

export default Owl;
