import { Poppins } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import { CommandBar } from '../components/CommandBar';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import '../styles/globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin-ext'],
  weight: ['400', '500', '700', '900'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <main className={`${poppins.variable} font-sans`}>
          <CommandBar>
            <Header />
            <Component {...pageProps} />

            <Footer />
          </CommandBar>
        </main>
    </ThemeProvider>
  )
}
