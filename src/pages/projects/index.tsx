import Head from 'next/head';
import { ReactElement } from 'react';

import BaseLayout from '../../components/Layouts/BaseLayout';
import { ProjectDetail } from '../../components/ProjectDetail';
import { projects } from '../../data/projects';

import styles from './styles.module.scss';

function Projects() {
  return (
    <div className={styles.project}>

      <Head>
        <title>Projects | Eduardo Assunção</title>
      </Head>

      <div>
        <section className={styles.project__header}>
          <h1 className='dark:bg-projects-gradient'>
            Work & Hobby
          </h1>

          <p>Some of my personal and professional projects</p>
        </section>

        <section className={styles.project__projects}>
          <div>
            {projects.map(project => (
              <ProjectDetail key={project.slug} data={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

Projects.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}

export default Projects;
