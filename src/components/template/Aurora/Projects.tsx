import { project } from "@/types/UserResumeData";
import { FC } from "react";

const Projects: FC<{ projects: project[] }> = ({ projects }) => {
  return (
    <section
      aria-labelledby='projects-heading'
      className='mb-4'>
      <h2
        id='projects-heading'
        className='text-lg font-bold text-gray-800 mb-1'>
        پروژه‌ها
      </h2>
      <ul className='space-y-2'>
        {projects.map((project) => (
          <li key={project.id}>
            <div className='flex items-center gap-x-1'>
              <h3 className='text-base font-semibold text-gray-800'>
                {project.name}
              </h3>
              |
              <h3 className='text-xs font-normal text-gray-500 mb-1'>
                {project.date}
              </h3>
            </div>
            <p className='text-gray-600 text-sm mb-1'>{project.description}</p>
            <div className='flex space-x-3 rtl:space-x-reverse'>
              {project.links.map((link) => (
                <a
                  key={link.id}
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
  );
};

export default Projects;