import { useEffect, useState } from 'react';
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon
} from 'react-icons/fa';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2022);

  useEffect(() =>{
    setCurrentYear(new Date().getFullYear());
  },[]);

  return (
    <footer className="flex flex-col-reverse md:flex-row gap-4 items-center justify-between mb-4 w-full h-16 max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8">
      <span className='text-sm text-center text-gray-500'>
        Copyright © {currentYear} Eduardo Assunção. All rights reserved.
      </span>

      <div className='flex gap-4'>
        <a
          href="https://github.com/cunhaedu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon
            size={24}
            className="text-gray-500 hover:dark:text-white hover:text-github"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/eduassuncao/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon
            size={24}
            className="text-gray-500 hover:dark:text-white hover:text-linkedin"
          />
        </a>
      </div>
    </footer>
  )
}