import { userData } from "@/fakeData";

export default function Owl() {
  return (
    <>
      {userData.map((user) => (
        <div
          key={user.title}
          className='bg-white font-sans p-8'>
          <main className='max-w-[210mm] mx-auto'>
            <header className='mb-4 text-right'>
              <div className='flex items-baseline space-x-4 rtl:space-x-reverse mb-2'>
                <h1 className='text-3xl font-bold text-gray-800'>
                  {user.name}
                </h1>
                <p className='text-xl text-gray-600'>{user.title}</p>
              </div>
              <div className='flex items-center gap-x-3 text-sm'>
                <address className='not-italic'>
                  <span className='text-gray-600'>{user.contact.location}</span>
                  <a
                    href={`tel:${user.contact.phone}`}
                    className='text-gray-600 hover:text-gray-800 transition-colors'>
                    {user.contact.phone}
                  </a>
                  <a
                    href={`mailto:${user.contact.email}`}
                    className='text-gray-600 hover:text-gray-800 transition-colors mx-3'>
                    {user.contact.email}
                  </a>
                </address>
                <nav>
                  <ul className='flex gap-x-3'>
                    {user.socialLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.url}
                          className='text-blue-600 hover:text-blue-800 transition-colors'>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </header>

            <section
              aria-labelledby='about-heading'
              className='mb-4'>
              <h2
                id='about-heading'
                className='text-lg font-bold text-gray-800 mb-2'>
                درباره من
              </h2>
              <p className='text-gray-700 leading-relaxed text-sm'>
                {user.about}
              </p>
            </section>

            <section
              aria-labelledby='skills-heading'
              className='mb-4'>
              <h2
                id='skills-heading'
                className='text-lg font-bold text-gray-800 mb-2'>
                مهارت‌ها
              </h2>
              <ul className='flex flex-wrap -m-1'>
                {user.skills.map((skill) => (
                  <li
                    key={skill}
                    className='m-1 bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs font-medium'>
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            <section
              aria-labelledby='projects-heading'
              className='mb-4'>
              <h2
                id='projects-heading'
                className='text-lg font-bold text-gray-800 mb-1'>
                پروژه‌ها
              </h2>
              <ul className='space-y-4'>
                {user.project.map((project) => (
                  <li key={project.name}>
                    <div className="flex items-center gap-x-1">
                      <h3 className='text-base font-semibold text-gray-800'>{project.name}</h3>
                      |
                      <h3 className="text-xs font-normal text-gray-500 mb-1">{project.date}</h3>
                    </div>
                    <p className='text-gray-600 text-sm mb-1'>{project.description}</p>
                    <div className='flex space-x-3 rtl:space-x-reverse'>
                      {project.links.map((link) => (
                        <a
                          key={link.name}
                          href={link.link}
                          className='text-blue-600 text-[13px] hover:text-blue-800 transition-colors'>
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section
              aria-labelledby='experience-heading'
              className='mb-4'>
              <h2
                id='experience-heading'
                className='text-lg font-bold text-gray-800 mb-1'>
                سوابق شغلی
              </h2>
              <ul className='space-y-4'>
                {user.experience.map((exp) => (
                  <li key={exp.title}>
                    <h3 className='text-sm font-semibold mb-1 text-gray-800'>
                      {exp.title}
                    </h3>
                    <p className='text-gray-600 text-[13px] mb-1'>
                      {exp.company} | {exp.date}
                    </p>
                    <p className='text-gray-700 text-sm mb-1'>{exp.responsibilities}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section
              aria-labelledby='languages-heading'
              className='mb-4'>
              <h2
                id='languages-heading'
                className='text-lg font-bold text-gray-800 mb-1'>
                زبان‌ها
              </h2>
              <ul className='list-disc list-inside text-gray-700'>
                {user.languages.map((language) => (
                  <li key={language.title} className="text-[13px]">
                    {language.title} ({language.level})
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby='education-heading'>
              <h2
                id='education-heading'
                className='text-lg font-bold text-gray-800 mb-1'>
                سوابق تحصیلی
              </h2>
              <ul className='space-y-2'>
                {user.educations.map((education) => (
                  <li key={education.degree}>
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
          </main>
        </div>
      ))}
    </>
  );
}
