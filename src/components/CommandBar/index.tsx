import { FaGithub, FaLinkedin, FaToggleOn } from 'react-icons/fa';
import { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import {
  BookmarkIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  EnvelopeIcon,
  HomeIcon,
  LinkIcon,
  PencilIcon,
  MoonIcon,
  SunIcon
} from '@heroicons/react/24/outline';
import {
  Action,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches
} from 'kbar';

import { ResultItem } from './ResultItem';
import Toast from '../common/Toast';
import { SkoobIcon } from '../Icons/Skoob';

type CommandBarProps = {
  children: ReactNode;
}

export function CommandBar({ children }: CommandBarProps) {
  const [showToast, setShowToast] = useState(false);
  const { setTheme } = useTheme();
  const router = useRouter();

  function handleCopyUrlToClipboard() {
    navigator.clipboard.writeText(window.location.href);
    setShowToast(true);
  }

  const actions: Action[] = [
    {
      id: 'copy',
      name: 'Copy Link',
      shortcut: ['l'],
      keywords: 'copy-link',
      section: 'General',
      perform: () => handleCopyUrlToClipboard(),
      icon: <LinkIcon className='w-6 h-6' />,
    },
    {
      id: 'email',
      name: 'Send Email',
      shortcut: ['e'],
      keywords: 'send-email',
      section: 'General',
      perform: () => window.open(
        'mailto:cunhaeduardo1231@gmail.com',
        '_blank',
        'noopener,noreferrer'
      ),
      icon: <EnvelopeIcon className='w-6 h-6' />,
    },
    {
      id: 'source',
      name: 'View Source',
      shortcut: ['s'],
      keywords: 'view-source',
      section: 'General',
      perform: () => window.open(
        'https://github.com/cunhaedu/cunhaedu.com',
        '_blank',
        'noopener,noreferrer'
      ),
      icon: <CodeBracketIcon className='w-6 h-6' />,
    },
    {
      id: 'home',
      name: 'Home',
      shortcut: ['g', 'h'],
      keywords: 'go-home',
      section: 'Go To',
      perform: () => router.push('/'),
      icon: <HomeIcon className='w-6 h-6' />,
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['g', 'a'],
      keywords: 'go-about',
      section: 'Go To',
      perform: () => router.push('/about'),
      icon: <BookmarkIcon className='w-6 h-6' />,
    },
    {
      id: 'articles',
      name: 'Articles',
      shortcut: ['g', 'b'],
      keywords: 'go-articles',
      section: 'Go To',
      perform: () => router.push('/articles'),
      icon: <PencilIcon className='w-6 h-6' />,
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['g', 'p'],
      keywords: 'go-projects',
      section: 'Go To',
      perform: () => router.push('/projects'),
      icon: <ComputerDesktopIcon className='w-6 h-6' />,
    },
    {
      id: 'github',
      name: 'Github',
      keywords: 'go-github',
      section: 'Social Media',
      perform: () => window.open(
        'https://github.com/cunhaedu',
        '_blank',
        'noopener,noreferrer'
      ),
      icon: <FaGithub size={24} />,
    },
    {
      id: 'linkedin',
      name: 'Linkedin',
      keywords: 'go-linkedin',
      section: 'Social Media',
      perform: () => window.open(
        'https://www.linkedin.com/in/eduassuncao/',
        '_blank',
        'noopener,noreferrer'
      ),
      icon: <FaLinkedin size={24} />,
    },
    {
      id: 'skoob',
      name: 'Skoob',
      keywords: 'go-skoob',
      section: 'Social Media',
      perform: () => window.open(
        'https://www.skoob.com.br/share/user/cunhaedu',
        '_blank',
        'noopener,noreferrer'
      ),
      icon: <SkoobIcon size={24} />,
    },
    {
      id: 'theme',
      name: 'Change theme…',
      keywords: 'change-theme',
      section: 'General',
      icon: <FaToggleOn size={24} />
    },
    {
      id: 'darkTheme',
      name: 'Dark',
      keywords: 'change-theme-to-dark',
      parent: 'theme',
      icon: <MoonIcon className='w-6 h-6' />,
      perform: () => setTheme('dark')
    },
    {
      id: 'lightTheme',
      name: 'Light',
      keywords: 'change-theme-to-light',
      parent: 'theme',
      icon: <SunIcon className='w-6 h-6' />,
      perform: () => setTheme('light')
    },
  ]

  return (
    <>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner className="fixed flex items-start justify-center w-full inset-0 pt-[14vh] pb-4 px-4 bg-modal-dark-transparent box-border">
            <KBarAnimator className='bg-white dark:bg-black dark:bg-opacity-20 dark:backdrop-blur-3xl max-w-[600px] w-full text-white rounded-lg overflow-hidden'>
              <KBarSearch
                placeholder="Type a command or search…"
                className='font-kbar [&>div>div::-webkit-scrollbar]:hidden [&>div>div]:scrollbar-none py-3 px-4 w-full box-border outline-none border-none m-0 text-gray-500 dark:text-white bg-white/5'
              />
              <RenderResults />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        {children}
      </KBarProvider>

      <Toast
        title="Copied :D"
        description="You can now share it with anyone."
        type='success'
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  )
}

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className='font-kbar py-2 text-black dark:text-white px-4 text-[10px] uppercase tracking-[1px] bg-white/5'>
            {item}
          </div>
        ) : (
          <ResultItem action={item} isActive={active} />
        )
      }
    />
  )
}
