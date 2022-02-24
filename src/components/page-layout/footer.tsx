import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '/src/styles/Footer.module.css';
import { APP_NAME, SITE_TITLE } from '../../app.const';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <a
          href="https://www.syu-any-blog.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Blog Page
        </a>
      </footer>
    </>
  );
};

export default Footer;
