import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Popover, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export function Header() {
  const [isComponentMounted, setIsComponentMounted] = useState(false);
  const {systemTheme , theme, setTheme} = useTheme();
  const { asPath: currentPage } = useRouter();

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
        className="text-gray-500 hover:text-black dark:hover:text-white rounded-lg p-1"
        onClick={() => handleSwitchTheme(currentTheme ?? 'dark')}
      >
        {currentTheme === 'dark'
          ? <SunIcon className="w-6 h-6" />
          : <MoonIcon className="w-6 h-6" />
        }
      </button>
    )
  };

  return (
    <Popover className="w-full h-16 border-b border-gray-400/30 dark:border-none flex justify-between items-center py-2 px-5 md:px-24 lg:px-36">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <Link
          href="/"
          className='py-[1px] px-[10px] rounded-md hover:bg-black/5 hover:dark:bg-white/10 font-bold text-2xl'
        >
          E
        </Link>
      </div>

      <div className='md:hidden flex justify-end ml-auto mr-3'>
        {renderThemeButton()}
      </div>

      <div className="-mr-2 -my-2 md:hidden">
        <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-500">
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-8 w-8" aria-hidden="true" />
        </Popover.Button>
      </div>
      <Popover.Group
        as="nav"
        className="hidden md:flex space-x-10 font-medium text-center self-center"
      >
        <Link
          href='/about'
          className="text-gray-500 hover:text-black hover:dark:text-white self-center"
        >
          <span className={currentPage.includes('about') ? 'text-black dark:text-white' : ''}>
            About
          </span>
        </Link>

        <Link
          href='/articles'
          className="text-gray-500 hover:text-black hover:dark:text-white self-center"
        >
          <span
            className={currentPage.includes('articles') ? 'text-black' : ''}
          >
            Articles
          </span>
        </Link>

        <Link
          href='/projects'
          className="text-gray-500 hover:text-black hover:dark:text-white self-center"
        >
          <span
            className={currentPage.includes('projects') ? 'text-black' : ''}
          >
            Projects
          </span>
        </Link>

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
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 dark:divide-gray-500 bg-white dark:bg-black">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className='py-[1px] px-[10px] rounded-md hover:bg-black/5 hover:dark:bg-white/10 font-bold text-2xl'
                >
                  E
                </Link>
                <div className="-mr-2">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>

            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link
                  href='/about'
                  className="font-medium text-gray-500"
                >
                  <span
                    className={currentPage.includes('about') ? 'text-black dark:text-white' : ''}
                  >
                    About
                  </span>
                </Link>

                <Link
                  href='/articles'
                  className="font-medium text-gray-500"
                >
                  <span
                    className={currentPage.includes('articles') ? 'text-black dark:text-white' : ''}
                  >
                    Articles
                  </span>
                </Link>

                <Link
                  href='/projects'
                  className="font-medium text-gray-500"
                >
                  <span
                    className={currentPage.includes('projects') ? 'text-black dark:text-white' : ''}
                  >
                    Projects
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}