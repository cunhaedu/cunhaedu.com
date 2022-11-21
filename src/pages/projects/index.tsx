import { ProjectDetail } from '../../components/ProjectDetail';
import { projectsMock } from '../../mocks/projects.mocks';

export default function Projects() {
  return (
    <div className='w-full p-10 md:p-0 selection:bg-emerald-500/90'>
      <div className='mx-auto my-10 md:my-3 md:min-h-[calc(100vh-8rem-1px)] max-w-full md:max-w-screen-md lg:max-w-screen-lg'>
        <section className='mt-5 p-5 xl:p-0 text-center lg:text-left'>
          <h1 className='font-bold text-4xl md:text-5xl mb-5 mt-2 bg-emerald-600 dark:bg-projects-gradient text-transparent bg-clip-text'>
            Work & Hobby
          </h1>

          <p className='text-gray-500'>
            Some of my personal and professional projects
          </p>
        </section>

        <section className='flex align-middle items-center justify-center'>
          <div className="my-10 grid items-center grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {projectsMock.map(project => (
              <ProjectDetail key={project.slug} data={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
