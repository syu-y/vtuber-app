import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <h1 className="title">Home</h1>
      <h2>
        <Link href="/vtuber-info/list">
          <a>Go List Page</a>
        </Link>
        <hr/>
        <Link href="/member-type/register">
          <a>Go MemberType Register Page</a>
        </Link>
      </h2>
    </>
  );
};

export default Home;
