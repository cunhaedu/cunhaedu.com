import { NextRouter } from 'next/router';
import { Action } from 'kbar';

import {
  AboutIcon,
  CodeIcon,
  ComputerDesktopIcon,
  DarkThemeIcon,
  EmailIcon,
  GithubIcon,
  HomeIcon,
  LightThemeIcon,
  LinkedinIcon,
  LinkIcon,
  PencilIcon,
  SkoobIcon,
  ToggleIcon
} from '@/shared/icons';

type ToastOptions = {
  title: string;
  description: string;
  type: 'success' | 'error';
}

type CopyUrlRequest = {
  setShowToast: (value: boolean) => void;
  setToastOptions: (value: ToastOptions) => void;
}

type RetrieveCommandBarActions ={
  setShowToast: (value: boolean) => void;
  setToastOptions: (value: ToastOptions) => void;
  setTheme: (theme: string) => void;
  router: NextRouter;
}

async function handleCopyUrlToClipboard({setShowToast, setToastOptions }: CopyUrlRequest) {
  if (!navigator?.clipboard) {
    setToastOptions({
      description: 'Your browser does not support clipboard',
      title: 'Clipboard not supported',
      type: 'error',
    })
    setShowToast(true);
    return;
  }

  await navigator.clipboard.writeText(window.location.href);
  setShowToast(true);
}

export function retrieveCommandBarActions({
  setShowToast,
  setToastOptions,
  router,
  setTheme
}: RetrieveCommandBarActions): Action[] {
  return [
    {
      id: 'copy',
      name: 'Copy Link',
      shortcut: ['l'],
      keywords: 'copy-link',
      section: 'General',
      perform: () => handleCopyUrlToClipboard({ setShowToast, setToastOptions }),
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
      icon: <EmailIcon className='w-6 h-6' />,
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
      icon: <CodeIcon className='w-6 h-6' />,
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
      icon: <AboutIcon className='w-6 h-6' />,
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
      icon: <GithubIcon size={24} />,
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
      icon: <LinkedinIcon size={24} />,
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
      icon: <ToggleIcon size={24} />
    },
    {
      id: 'darkTheme',
      name: 'Dark',
      keywords: 'change-theme-to-dark',
      parent: 'theme',
      icon: <DarkThemeIcon className='w-6 h-6' />,
      perform: () => setTheme('dark')
    },
    {
      id: 'lightTheme',
      name: 'Light',
      keywords: 'change-theme-to-light',
      parent: 'theme',
      icon: <LightThemeIcon className='w-6 h-6' />,
      perform: () => setTheme('light')
    },
  ];
}
