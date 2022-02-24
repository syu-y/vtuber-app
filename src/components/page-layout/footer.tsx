import styles from '/src/styles/Footer.module.css';

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
