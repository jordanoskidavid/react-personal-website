import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
    <p>© {currentYear} <a href="/" target="_blank" rel="noopener noreferrer">davidjordanoski.com</a></p>
    </footer>
  );
};
export default Footer;
