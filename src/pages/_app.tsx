import { Poppins } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import { Header } from '../components/Header';

import '../styles/globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '700', '900'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className={`${poppins.variable} font-sans`}>
        <Header />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
