import Head from 'next/head';

export default function Home() {
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
      </main>
    </div>
  )
}
