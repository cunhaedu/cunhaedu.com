import { Poppins } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import clx from 'classnames';

import { BlogDate } from '../../BlogDate';
import { CommandBar } from '../../CommandBar';
import { Footer } from '../../Footer';
import { Header } from '../../Header';

import styles from './styles.module.scss';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin-ext'],
  weight: ['400', '500', '700', '900'],
});

type PostProps = {
  content: string;
  date: string;
  description: string;
  image: string;
  slug: string;
  title: string;
}

type LayoutProps = {
  children: React.ReactNode & {
    props: PostProps
  }
}

export default function BlogLayout({ children }: LayoutProps) {
  const { title, image, date } = children.props;

  function Main(args: any) {
    return args.image ? (
      <main className={styles.post}>{args.children}</main>
    ) : (
      <main className={styles.postMain}>{args.children}</main>
    )
  }

  return (
    <ThemeProvider enableSystem attribute="class">
      <main className={`${poppins.variable} font-sans`}>
        <CommandBar>
          <Header />
          <div className={styles.wrapper}>
            <Main image={image}>
              {image && (
                <div className={styles.postHeader}>
                  <h1 className={styles.postHeaderTitle}>{title}</h1>
                  <div
                    className={`${styles.postImage}`}
                    style={image ? { backgroundImage: `url(${image})` } : {}}
                  />
                  <h2 className={styles.postHeaderSubtitle}>
                    <BlogDate dateString={date} />
                  </h2>
                </div>
              )}
              <div className={`${styles.postContent} bg-white dark:bg-black`}>
                <div className={clx(
                  styles.postContainer,
                  '[&>div>h2]:dark:text-white',
                  '[&>div>p>a]:dark:text-white',
                  '[&>div>p>em>strong]:dark:text-white [&>div>blockquote>p>strong]:dark:text-white [&>div>p>strong]:dark:text-white'
                )}>
                  {!image && (
                    <div>
                      <h1 className={styles.postContentTitle}>{title}</h1>
                      <h2 className={styles.postContentSubtitle}>
                        <BlogDate dateString={date} />
                      </h2>
                    </div>
                  )}
                  {children}
                </div>
              </div>
            </Main>
          </div>
          <Footer />
        </CommandBar>
      </main>
    </ThemeProvider>
  )
}
