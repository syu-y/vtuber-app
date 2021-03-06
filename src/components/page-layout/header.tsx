import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '/src/styles/Header.module.css';

import {
  APP_NAME,
  HEADER_ICON_HEIGHT,
  HEADER_ICON_WIDTH,
  SITE_TITLE,
} from '../../app.const';

const Header = () => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Vtuber Info App" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            SITE_TITLE
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={SITE_TITLE} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className={styles.header}>
        <Image
          priority
          src="/images/media-small-icon.svg"
          height={HEADER_ICON_HEIGHT}
          width={HEADER_ICON_WIDTH}
          alt={APP_NAME}
        />
        <h1 className={styles.headerText}>
          <Link href="/">{APP_NAME}</Link>
        </h1>
      </header>
    </>
  );
};

export default Header;
