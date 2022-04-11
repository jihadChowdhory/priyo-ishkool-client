import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <section className={styles.navSection}>
      <nav className={styles.navbar}>
        <a href="#logo" className={styles.navLink} id={styles.navLogo}>
          Priyo Ishkool
        </a>
        <div className={styles.navLinks}>
          <a href="#projects" className={styles.navLink}>
            Recent Projects
          </a>
          <a href="#about-us" className={styles.navLink}>
            About us
          </a>
          <a href="#donate" className={styles.navLink}>
            Donate
          </a>
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
