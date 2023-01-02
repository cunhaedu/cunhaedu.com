import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { ReactElement, useEffect, useState } from 'react';
import { useKBar } from 'kbar';
import Head from 'next/head';

import BaseLayout from '../components/Layouts/BaseLayout';

import styles from '../styles/home.module.scss';

function Home() {
  const { query } = useKBar();
  const [mounted, setMounted] = useState(false);
  let isMobile = false;

  useEffect(() => {
    setMounted(true)
  }, []);

  if (mounted) {
    isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
  }

  function retrieveMobileStartText() {
    return (
      <span>
        Get start
        <ArrowRightIcon height={12} width={12} className='inline-block'/>
      </span>
    )
  }

  function retrieveDesktopStartText() {
    return (
      <span className={styles.desktop_start_text}>
        Press
        <kbd>Ctrl</kbd> <kbd>K</kbd>
        to start {' '}
        <ArrowRightIcon height={12} width={12} className='inline-block' />
      </span>
    )
  }

  return (
    <div className={styles.home}>
      <Head>
        <title>Eduardo Assunção</title>
      </Head>

      <main>
        <h1>Eduardo Assunção</h1>

        <span>
          Backend Developer at {' '}
          <br />
          <a
            href="https://ekaizen.digital/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ekaizen Digital
          </a>
        </span>

        <button onClick={query.toggle}>
          {isMobile
            ? retrieveMobileStartText()
            : retrieveDesktopStartText()
          }
        </button>
      </main>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}

export default Home;
