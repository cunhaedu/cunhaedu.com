import { GetStaticProps } from 'next';
import Image from 'next/image';
import { ReactElement } from 'react';

import { FeaturedArticle } from '../../components/FeaturedArticle'
import BaseLayout from '../../components/Layouts/BaseLayout';
import { getAllPosts, getPostBySlug } from '../../lib/blog';

import styles from './styles.module.scss';

type Article = {
  content: string;
  date: Date;
  description: string;
  image: string;
  slug: string;
  title: string;
  skip: boolean;
}

type ArticlesProps = {
  featuredPosts: Article[];
  allPosts: Article[];
}

function Articles({ featuredPosts, allPosts }: ArticlesProps) {
  function renderFeatured() {
    return featuredPosts.map((post, index) => {
      return (
        <FeaturedArticle
          key={post.slug}
          index={index}
          href={`/articles/${post.slug}`}
          title={post.title}
          description={post.description}
          image={post.image}
          content={post.content}
        />
      )
    })
  }

  function renderAll() {
    return allPosts.map(post => (
      <div key={post.slug} className={styles.article__post_container}>
        <div>
          <p>{post.title}</p>
          <span>{post.description}</span>
        </div>

        <Image
          src={post.image}
          alt={post.title}
          height={150}
          width={250}
        />
      </div>
    ))
  }

  return (
    <div className={styles.article}>
      <div>
        <section className={styles.article__header}>
          <h1 className='dark:bg-articles-gradient'>
            Articles
          </h1>

          <p>
            Here you can find all the articles I&apos;ve been writing about web
            development.
          </p>

          <h2>Featured Articles</h2>

          <div>{renderFeatured()}</div>
        </section>

        <section className={styles.article__all_articles}>
          <h1>All Articles</h1>

          {renderAll()}
        </section>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const allPosts = getAllPosts(['date', 'slug', 'title', 'description', 'image']);

  const featuredParams = [
    'date',
    'slug',
    'title',
    'image',
    'content',
    'description',
  ];

  const featuredPosts = [
    getPostBySlug('how-to-work-with-typeorm-tree-entities-part-1', featuredParams),
    getPostBySlug('how-to-work-with-typeorm-tree-entities-part-1', featuredParams),
  ];

  return {
    props: {
      featuredPosts,
      allPosts,
    },
  }
}

Articles.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}

export default Articles;
