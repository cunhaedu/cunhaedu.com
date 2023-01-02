import { ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import cls from 'classnames';
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches
} from 'kbar';

import { retrieveCommandBarActions } from './actions';
import { ResultItem } from './ResultItem';
import Toast from '../common/Toast';

import styles from './styles.module.scss';

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

  return (
    <>
      <KBarProvider actions={retrieveCommandBarActions({ setShowToast, setTheme, router })}>
        <KBarPortal>
          <KBarPositioner className={styles.KBarPositioner}>
            <KBarAnimator
              className={cls(
                styles.KBarAnimator,
                'dark:bg-black dark:bg-opacity-20 dark:backdrop-blur-3xl'
              )}
            >
              <KBarSearch
                placeholder="Type a command or search…"
                className={cls(styles.KBarSearch, 'dark:text-white')}
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
          <div className={cls(styles.KbarResultText, 'dark:text-white')}>
            {item}
          </div>
        ) : (
          <ResultItem action={item} isActive={active} />
        )
      }
    />
  )
}
