import '@/globals.css';
import { RootLayout } from '@/components';
import { AppProps } from 'next/app';
import { useLang } from '@/hooks'

export default function App({ Component, pageProps }: AppProps) {
  const { lang } = useLang();
  const customProps = {
    ...pageProps,
    lang
  }
  return (
    <RootLayout>
      <Component {...customProps} />
    </RootLayout>
  );
}