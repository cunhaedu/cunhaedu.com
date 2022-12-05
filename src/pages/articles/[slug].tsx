import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { ArticleJsonLd } from 'next-seo';
import { ReactElement } from 'react';
import Head from 'next/head';

import {
  convertMarkdownToHtml,
  getAllPosts,
  getPostBySlug,
} from '../../lib/blog';
import type { NextPageWithLayout } from '../_app';
import BlogLayout from '../../components/Layouts/BlogLayout';

type Params = ParsedUrlQuery & {
  slug: string;
}

type PostProps = {
  canonical_url: string;
  content: string;
  date: string;
  description: string;
  image: string;
  lang: string;
  slug: string;
  title: string;
}

const Post: NextPageWithLayout = (props: PostProps) => {
  // if (props.errorCode) {
  //   return <ErrorMessage code={props.errorCode} />
  // }

  const title = `${props.title} // Zeno Rocha`
  const description = props.description || ''
  const url = `https://zenorocha.com/${props.slug}`
  const date = new Date(props.date).toISOString()
  const image = props.image
    ? `https://zenorocha.com${props.image}`
    : 'https://zenorocha.com/static/images/home-opt.jpg'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content={url} property="og:url" />
        <meta content={image} property="og:image" />

        {props.canonical_url && (
          <link rel="canonical" href={props.canonical_url} />
        )}
      </Head>

      <ArticleJsonLd
        authorName="Zeno Rocha"
        type="Blog"
        url={url}
        title={title}
        images={[image]}
        datePublished={date}
        dateModified={date}
        description={props.description}
      />

      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;

  try {
    const post = getPostBySlug(slug, [
      'canonical_url',
      'content',
      'date',
      'description',
      'image',
      'lang',
      'slug',
      'title',
    ]);

    const content = await convertMarkdownToHtml(post.content || '');

    return {
      props: {
        ...post,
        content,
      },
      revalidate: 60,
    }
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: '/articles',
      }
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(post => ({
      params: { slug: post.slug },
    })),
    fallback: 'blocking',
  }
}

Post.getLayout = function getLayout(page: ReactElement) {
  return (
    <BlogLayout>
      {page}
    </BlogLayout>
  )
}

export default Post;
