import type { NextPage } from 'next';
import Link from 'next/link';
import PageLayout from '../src/components/pageLayout';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <h1 className="title">Home</h1>
      <h2>
        <Link href="/list/vtuber">
          <a>Go List Page</a>
        </Link>
      </h2>
    </PageLayout>
  );
};

export default Home;
