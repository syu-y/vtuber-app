import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

/** ページレイアウト定義 */
import PageLayout from '../src/components/page-layout/pageLayout';
/** プロバイダ */
import { VtuberContextProvider } from '../src/context/vtuber-context/vtuber-context-provider';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <VtuberContextProvider>
      <PageLayout>
        <Component {...pageProps} />;
      </PageLayout>
    </VtuberContextProvider>
  );
};

export default MyApp;
