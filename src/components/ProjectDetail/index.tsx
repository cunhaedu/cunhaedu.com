import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

type ProjectDetailProps = {
  data: {
    slug: string;
    title: string;
    cover: string;
    description: string;
    technologies: string[];
  }
}

type TechnologiesSectionProps = {
  technologies: string[];
}

export function ProjectDetail({ data }: ProjectDetailProps) {
  return (
    <div className='w-80 rounded-md shadow-gray-500 hover:shadow-md hover:transition-colors hover:duration-500 bg-[#FFF] dark:bg-black hover:dark:bg-white/5 p-2'>
      <Image
        src={data.cover}
        alt={data.title}
        width={320}
        height={288}
        className='object-cover rounded-md'
      />

      <div className='my-3 flex items-center justify-between'>
        <p className='font-medium'>{data.title}</p>

        <a
          href="https://www.ceplenitude.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowTopRightOnSquareIcon className='w-6 h-6 hover:transition-colors hover:duration-300 hover:text-emerald-600' />
        </a>
      </div>

      <p className='line-clamp-2 text-gray-500'>
        {data.description}
      </p>

      <div className='flex items-center align-middle justify-between my-2'>
        <TechnologiesSection technologies={data.technologies} />

        <Link
          href={`/projects/${data.slug}`}
          className='hover:underline underline-offset-4 text-emerald-600 md:text-gray-500 hover:text-emerald-600'
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

function TechnologiesSection({ technologies }: TechnologiesSectionProps) {
  return (
    <div className='flex items-center gap-2'>
      {technologies.slice(0, 2).map(tech => (
        <span
          key={tech}
          className='text-xs text-gray-500 py-[2px] px-2 border border-gray-500 rounded-md hover:bg-gray-500/10 cursor-default'
        >
          {tech}
        </span>
      ))}

      <span className='text-xs text-gray-500 py-[2px] px-2 border border-gray-500 rounded-md hover:bg-gray-500/10 cursor-default'>
        +{technologies.length - 2}
      </span>
    </div>
  )
}
