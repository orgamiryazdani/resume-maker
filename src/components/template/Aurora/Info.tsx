import { InfoProps } from "@/types/Props";
import { FC } from "react";

const Info: FC<InfoProps> = ({ name, title, contact, socialLinks }) => {
  return (
    <header className='mb-4 text-right'>
      <div className='flex items-baseline space-x-4 rtl:space-x-reverse mb-2'>
        <h1 className='text-3xl font-bold text-gray-800'>{name}</h1>
        <p className='text-xl text-gray-600'>{title}</p>
      </div>
      <div className='flex items-center gap-x-3 text-sm'>
        <address className='not-italic'>
          <span className='text-gray-600'>{contact.location}</span>
          <a
            href={`tel:${contact.phone}`}
            className='text-gray-600 hover:text-gray-800 transition-colors'>
            {contact.phone}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className='text-gray-600 hover:text-gray-800 transition-colors mx-3'>
            {contact.email}
          </a>
        </address>
        <nav>
          <ul className='flex gap-x-3'>
            {socialLinks.map((link) => (
              <li key={link.id}>
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
  );
};

export default Info;