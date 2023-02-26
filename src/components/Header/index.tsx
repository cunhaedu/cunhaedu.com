import { Popover, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import cls from 'classnames';
import {
  BookOpenIcon,
  CloseDialogIcon,
  DarkThemeIcon,
  EnvelopeIcon,
  GithubIcon,
  HamburgerMenuIcon,
  LightThemeIcon,
  LinkedinIcon
} from '@/shared/icons';

import { ActiveLink } from '../ActiveLink';

import styles from './styles.module.scss';

export function Header() {
  const [isComponentMounted, setIsComponentMounted] = useState(false);
  const {systemTheme , theme, setTheme} = useTheme();
  const router = useRouter();

  useEffect(() =>{
    setIsComponentMounted(true);
  },[]);

  function handleSwitchTheme(currentTheme: string) {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  function renderThemeButton() {
    if (!isComponentMounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
      <button
        type="button"
        className={cls(styles.button__theme, 'dark:hover:text-white')}
        onClick={() => handleSwitchTheme(currentTheme ?? 'dark')}
      >
        {currentTheme === 'dark'
          ? <LightThemeIcon className={styles.button__theme_icon} />
          : <DarkThemeIcon className={styles.button__theme_icon} />
        }
      </button>
    )
  };

  return (
    <Popover className={cls(styles.header, 'dark:bg-black dark:border-none')}>
      {({ open }) => (
        <>
          <div className={styles.header__main_link_container}>
            <Link href="/" className='hover:dark:bg-white/10'>
              E
            </Link>
          </div>

          <div className={styles.header__theme_button_container}>
            {renderThemeButton()}
          </div>

          <div className={styles.header__hamburger_menu_container}>
            <Popover.Button>
              <span className='sr-only'>Open menu</span>
              <HamburgerMenuIcon height={32} width={32} aria-hidden />
            </Popover.Button>
          </div>

          <Popover.Group as='nav' className={styles.header__links_group}>
            <ActiveLink href='/about'>
              <span>About</span>
            </ActiveLink>

            <ActiveLink href='/projects'>
              <span>Projects</span>
            </ActiveLink>

            <ActiveLink href='/articles'>
              <span>Articles</span>
            </ActiveLink>

            {renderThemeButton()}

          </Popover.Group>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            show={open}
          >
            <Popover.Panel static focus className={styles.header__mobile}>
              <div className="dark:bg-black">

                <div className={styles.header__mobile__main_content}>
                  <div>
                    <div className={styles.header__mobile__main_content_close_icon_container}>
                      <Popover.Button>
                        <span className="sr-only">Close menu</span>
                        <CloseDialogIcon width={24} height={24} aria-hidden />
                      </Popover.Button>
                    </div>
                  </div>
                </div>

                <div className={styles.header__mobile__links_group_container}>
                  <div>
                  <Popover.Button
                      className="hover:dark:text-white"
                      onClick={() => router.push("/")}
                    >
                      Home
                    </Popover.Button>

                    <Popover.Button
                      className="hover:dark:text-white"
                      onClick={() => router.push("/about")}
                    >
                      About
                    </Popover.Button>

                    <Popover.Button
                      className="hover:dark:text-white"
                      onClick={() => router.push("/projects")}
                    >
                      Projects
                    </Popover.Button>

                    <Popover.Button
                      className="hover:dark:text-white"
                      onClick={() => router.push("/articles")}
                    >
                      Articles
                    </Popover.Button>

                    <div>
                      <a href='mailto:cunhaeduardo1231@gmail.com'>
                        <EnvelopeIcon size={28} />
                      </a>

                      <a
                        href="https://www.skoob.com.br/share/user/cunhaedu"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpenIcon size={28} />
                      </a>

                      <a
                        href="https://github.com/cunhaedu"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon size={28} />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/eduassuncao/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedinIcon size={28} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
