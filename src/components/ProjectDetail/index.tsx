import { ArrowTopRightOnSquareIcon as ExternalLinkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import cls from 'classnames';

import styles from './styles.module.scss';

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

        <Link href={`/projects/${data.slug}`}>
          View Details
        </Link>
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
