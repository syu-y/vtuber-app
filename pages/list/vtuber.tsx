import type { NextPage } from 'next';
import Link from 'next/link';

const VtuberListPage: NextPage = () => {
  return (
    <main>
      <h1>Vtuber List</h1>
      <h2>
        <Link href="/">
          <a>Go Home Page</a>
        </Link>
      </h2>
    </main>
  );
};

export default VtuberListPage;
