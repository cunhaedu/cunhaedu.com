import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import Image from 'next/image';
import clx from 'classnames';

import { FeaturedArticle } from '../../components/FeaturedArticle'
import BaseLayout from '../../components/Layouts/BaseLayout';
import { getAllPosts, getPostBySlug } from '../../lib/blog';

import styles from './styles.module.scss';
import Link from 'next/link';
import Head from 'next/head';

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
      <Link
        href={`/articles/${post.slug}`}
        key={post.slug}
        className={clx(
          styles.article__post_container,
          'dark:bg-gray-700/40 md:dark:bg-gray-800/40',
          'dark:hover:bg-gray-600/40 dark:border-none'
        )}
      >
        <Image
          src={post.image}
          alt={post.title}
          height={150}
          width={250}
        />

        <div>
          <p>{post.title}</p>
          <span>{post.description}</span>
          <span>{post.date.toString()}</span>
        </div>
      </Link>
    ))
  }

  return (
    <div className={styles.article}>

      <Head>
        <title>Articles | Eduardo Assunção</title>
      </Head>

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
          <h2>All Articles</h2>

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
