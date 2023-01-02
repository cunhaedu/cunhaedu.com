import { Poppins } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import { CommandBar } from '../../CommandBar';
import { Footer } from '../../Footer';
import { Header } from '../../Header';

type LayoutProps = {
  children: React.ReactNode;
}

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin-ext'],
  weight: ['400', '500', '700', '900'],
});

export default function BaseLayout({ children }: LayoutProps) {
  return (
    <ThemeProvider enableSystem attribute="class">
      <main className={`${poppins.variable} font-sans`}>
        <CommandBar>
          <Header />
          {children}
          <Footer />
        </CommandBar>
      </main>
    </ThemeProvider>
  )
}
