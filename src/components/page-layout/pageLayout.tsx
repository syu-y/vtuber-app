import type { NextPage } from 'next';
import { ReactNode } from 'react';

import styles from '/src/styles/PageLayout.module.css';

import Footer from './footer';
import Header from './header';

type Props = {
  children?: ReactNode
  ;
};

const PageLayout: NextPage = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
