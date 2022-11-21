import Image from 'next/image';

import ProfileImg from '../../../public/assets/profile.png';

export default function About() {
  return (
    <div className='w-full p-10 md:p-0'>
      <div className='mx-auto my-10 md:my-auto flex flex-col-reverse md:flex-row align-middle items-center justify-between md:min-h-[calc(100vh-8rem-1px)] max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
        <section className='max-w-full min-h-full md:max-w-[50%] mx-auto text-center md:text-left'>
          <p className='font-medium'>
            Hello, my name is
          </p>

          <h1 className='font-bold text-5xl mb-5 mt-2 bg-about-gradient text-transparent bg-clip-text leading-[1.23]'>
            Eduardo Assunção
          </h1>

          <p>
            I&apos;m a fullstack developer that work professionally with backend
            but use the free time creating jamstack applications, focusing on
            building the best experiences on the web.
          </p>
        </section>

        <section className='max-w-full min-h-full md:max-w-[50%] mx-auto mb-10 md:mb-0'>
          <div className='hidden md:block bg-gradient-to-br from-indigo-700 to-indigo-400 w-64 h-72 md:w-80 md:h-96 z-0 absolute -rotate-6 rounded-md' />
          <Image
            src={ProfileImg}
            alt="Foto de perfil Eduardo"
            width={336}
            height={400}
            className="rounded-md w-64 h-72 md:w-80 md:h-96 object-cover md:relative"
            placeholder='blur'
          />
        </section>
      </div>
    </div>
  )
}
