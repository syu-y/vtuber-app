import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '../src/components/pageLayout';
import styles from '../styles/Home.module.css';

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
