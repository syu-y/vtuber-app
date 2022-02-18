import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../../src/components/pageLayout';

const VtuberListPage: NextPage = () => {
  return (
    <PageLayout>
      <h1 className="title">Vtuber List</h1>
      <h2>
        <Link href="/">
          <a>Go Home Page</a>
        </Link>
      </h2>
    </PageLayout>
  );
};

export default VtuberListPage;
