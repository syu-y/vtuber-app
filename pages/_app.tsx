import '../styles/globals.css';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';

/** ページレイアウト定義 */
import PageLayout from '../src/components/page-layout/pageLayout';
import { MemberTypeContextProvider } from '../src/context/member-type/member-type-context-provider';
/** プロバイダ */
import { VtuberContextProvider } from '../src/context/vtuber-context/vtuber-context-provider';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <MemberTypeContextProvider>
      <VtuberContextProvider>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </VtuberContextProvider>
    </MemberTypeContextProvider>
  );
};

export default MyApp;
