import styles from "./index.module.scss";

const Navigation = () => {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <a href="#">Offer</a>
          <a href="#">Portfolio</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <div className={styles.langSwitcher}>
        <a href="#">PL</a>
      </div>
    </>
  );
};
export default Navigation;
