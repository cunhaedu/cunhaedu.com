import Image from 'next/image';
import cls from 'classnames';

import { BehanceIcon, ExternalLinkIcon, GithubIcon } from '@/shared/icons';

import styles from './styles.module.scss';

type ProjectDetailProps = {
  data: {
    slug: string;
    title: string;
    cover: string;
    description: string;
    github: string;
    behance: string;
    technologies: string[];
  }
}

type TechnologiesSectionProps = {
  technologies: string[];
}

export function ProjectDetail({ data }: ProjectDetailProps) {
  return (
    <div
      className={cls(
        styles.project_detail,
        'dark:bg-black hover:dark:bg-white/5'
      )}
    >
      <Image
        src={data.cover}
        alt={data.title}
        width={320}
        height={288}
      />

      <div className={styles.project_detail__header}>
        <p>{data.title}</p>

        <a
          href="https://www.ceplenitude.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLinkIcon
            height={24}
            width={24}
            className={styles.project_detail__external_link}
          />
        </a>
      </div>

      <p>{data.description}</p>

      <div className={styles.project_detail__footer}>
        <TechnologiesSection technologies={data.technologies} />

        <div>
          {data.github && (
            <a href={data.behance} target="_blank" rel="noopener noreferrer">
              <BehanceIcon size={18} className="dark:hover:text-white" />
            </a>
          )}

          {data.behance && (
            <a href={data.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon size={18} className="dark:hover:text-white" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function TechnologiesSection({ technologies }: TechnologiesSectionProps) {
  return (
    <div className={styles.technology}>
      {technologies.slice(0, 2).map(tech => (
        <span
          key={tech}
          className={styles.technology_detail}
        >
          {tech}
        </span>
      ))}

      <span className={styles.technology_detail}>
        +{technologies.length - 2}
      </span>
    </div>
  )
}
