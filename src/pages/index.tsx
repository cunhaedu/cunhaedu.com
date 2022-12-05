import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { ReactElement } from 'react';
import { useKBar } from 'kbar';
import Head from 'next/head';

import BaseLayout from '../components/Layouts/BaseLayout';

function Home() {
  const { query } = useKBar();

  return (
    <div className="flex min-h-[calc(100vh-8rem-1px)] flex-col items-center justify-center py-2">
      <Head>
        <title>Eduardo Assunção</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className='text-5xl font-bold'>
          Eduardo Assunção
        </h1>

        <span className='mt-3'>
          Backend Developer at {' '}
          <br className='md:hidden' />
          <a
            href="https://ekaizen.digital/"
            target="_blank"
            rel="noopener noreferrer"
            className='underline underline-offset-4 hover:transition-colors hover:duration-500 ease-in-out hover:text-gray-500'
          >
            Ekaizen Digital
          </a>
        </span>

        <button
          onClick={query.toggle}
          className='mt-10 hover:transition-colors hover:duration-500 ease-in-out hover:bg-gray-500/10 p-2 rounded-md'
        >
          Get start <ArrowRightIcon className='w-3 h-3 inline-block' />
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
