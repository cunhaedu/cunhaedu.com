import Image from 'next/image';
import readingTime from 'reading-time';
import styles from './styles.module.scss';

type FeaturedArticleProps = {
  key: number | string;
  index: number;
  href: string;
  title: string;
  description: string
  image: string;
  content: string;
}

export function FeaturedArticle(props: FeaturedArticleProps) {
  const stats = readingTime(props.content)

  return (
    <a className={styles.article} href={props.href}>
      <div className={`${styles.container} group`}>
        <Image
          src={props.image}
          alt={props.title}
          width={384}
          height={192}
          className={`${styles.imageContainer} group-hover:grayscale-0`}
        />

        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.stats}>{stats.text}</p>
      </div>
    </a>
  )
}
