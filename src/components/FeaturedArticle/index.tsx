import Image from 'next/image';
import readingTime from 'reading-time';
import styles from './styles.module.scss';
import cls from 'classnames'

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
      <div className={cls(styles.container, 'group')}>
        <Image
          src={props.image}
          alt={props.title}
          width={384}
          height={192}
          className='group-hover:grayscale-0'
        />

        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{stats.text}</p>
      </div>
    </a>
  )
}
