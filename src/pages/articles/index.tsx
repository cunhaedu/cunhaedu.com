import { GetStaticProps } from 'next';
import { ReactElement } from 'react';

import { FeaturedArticle } from '../../components/FeaturedArticle'
import BaseLayout from '../../components/Layouts/BaseLayout';
import { getAllPosts, getPostBySlug } from '../../lib/blog';

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

function Articles({ featuredPosts }: ArticlesProps) {
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

  // function renderAll() {
  //   return allPosts.map((post, index) => {
  //     if (!post.skip) {
  //       return (
  //         // <ListItem
  //         //   key={index}
  //         //   index={index}
  //         //   href={`/${post.slug}/`}
  //         //   title={post.title}
  //         //   date={post.date}
  //         // />

  //         <p key={index}>{post.title}</p>
  //       )
  //     }
  //   })
  // }

  return (
    <div className='w-full md:p-0 selection:bg-orange-400'>
      <div className='mx-auto my-10 md:my-3 md:min-h-[calc(100vh-8rem-1px)] max-w-full md:max-w-screen-md lg:max-w-screen-lg'>
        <section className='mt-5 p-5 xl:p-0 text-center lg:text-left'>
          <h1 className='font-bold text-4xl md:text-5xl mb-5 mt-2 bg-orange-400 dark:bg-articles-gradient text-transparent bg-clip-text'>
            Articles
          </h1>

          <p className='text-gray-500'>
            Here you can find all the articles I&apos;ve been writing about web development.
          </p>

          <h2 className='my-8 text-2xl font-medium'>Featured Articles</h2>

          <div className='my-5 grid grid-cols-1 md:grid-cols-2 gap-16'>
            {renderFeatured()}
          </div>
        </section>
      </div>

      {/* <h2>All Articles</h2> */}
      {/* <ListGroup>{renderAll()}</ListGroup> */}
    </div>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const allPosts = getAllPosts(['date', 'skip', 'slug', 'title']);

  const featuredParams = [
    'date',
    'slug',
    'title',
    'image',
    'content',
    'description',
  ]

  const featuredPosts = [
    getPostBySlug('how-to-work-with-typeorm-tree-entities-part-1', featuredParams),
    getPostBySlug('how-to-work-with-typeorm-tree-entities-part-1', featuredParams),
  ]

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
