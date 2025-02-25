import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.name}>
          <ul className={styles.nameList}>
            <li>
              <a href="////">David Jordanoski</a>
            </li>
          </ul>
        </nav>
        <nav class={styles.navList}>
          <ul className={styles.navLinks}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Experience</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
