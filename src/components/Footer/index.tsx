import { useEffect, useState } from 'react';
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
  FaEnvelope as EnvelopeIcon,
  FaBookOpen as BookOpenIcon
} from 'react-icons/fa';
import cls from 'classnames';

import styles from './styles.module.scss';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2023);

  useEffect(() =>{
    setCurrentYear(new Date().getFullYear());
  },[]);

  return (
    <footer className={cls(styles.footer, 'dark:bg-black')}>
      <div className='dark:bg-black'>
        <span className={styles.footer__copyright}>
          © {currentYear} - Eduardo Assunção.
        </span>

        <div className={styles.footer__links}>
          <a
            href="https://www.skoob.com.br/share/user/cunhaedu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpenIcon
              className={cls(
                styles.footer__link_icon,
                'hover:dark:text-white hover:text-github'
              )}
            />
          </a>

          <a
            href="mailto:cunhaeduardo1231@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EnvelopeIcon
              size={24}
              className={cls(
                styles.footer__link_icon,
                'hover:dark:text-white hover:text-rose-600'
              )}
            />
          </a>

          <a
            href="https://github.com/cunhaedu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon
              size={24}
              className={cls(
                styles.footer__link_icon,
                'hover:dark:text-white hover:text-github'
              )}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/eduassuncao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon
              size={24}
              className={cls(
                styles.footer__link_icon,
                'hover:dark:text-white hover:text-linkedin'
              )}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
