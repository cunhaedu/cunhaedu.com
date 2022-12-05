import { useEffect, useState } from 'react';
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
  FaEnvelope as EnvelopeIcon,
  FaBookOpen as BookOpenIcon
} from 'react-icons/fa';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2022);

  useEffect(() =>{
    setCurrentYear(new Date().getFullYear());
  },[]);

  return (
    <footer className="w-full bg-white dark:bg-black relative">
      <div className="flex flex-col-reverse md:flex-row gap-4 items-center justify-between pb-4 w-full h-16 max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8 bg-white dark:bg-black">

        <span className='text-sm text-center text-gray-500'>
          Copyright © {currentYear} Eduardo Assunção.
        </span>

        <div className='flex gap-4'>
          <a
            href="https://www.skoob.com.br/share/user/cunhaedu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpenIcon className='w-6 h-6 text-gray-500 hover:dark:text-white hover:text-github transition-colors duration-200 ease-in-out' />
          </a>

          <a
            href="mailto:cunhaeduardo1231@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EnvelopeIcon
              size={24}
              className="text-gray-500 hover:dark:text-white hover:text-rose-600 transition-colors duration-200 ease-in-out"
            />
          </a>

          <a
            href="https://github.com/cunhaedu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon
              size={24}
              className="text-gray-500 hover:dark:text-white hover:text-github transition-colors duration-200 ease-in-out"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/eduassuncao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon
              size={24}
              className="text-gray-500 hover:dark:text-white hover:text-linkedin transition-colors duration-200 ease-in-out"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
