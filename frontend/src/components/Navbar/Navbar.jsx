import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { HamburgerIcon } from "../../assets/svgs";
import { LogoFc } from "../../assets/svgs";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const handleClick = () => setClick(!click);

  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);

    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <nav
      className={
        navBg ? `${styles.navbar} ${styles.navBg}` : `${styles.navbar}`
      }
    >
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.navLogo}>
            <LogoFc width={"300px"} />
          </div>
        </div>
        <ul
          className={
            click && !navBg
              ? `${styles.navMenu} ${styles.active}`
              : click && navBg
              ? `${styles.navMenu} ${styles.activeW}`
              : `${styles.navMenu}`
          }
        >
          <li className={styles.navItem}>
            <p className={`${styles.navLinks}`} onClick={handleClick}>
              <Link to="hero">About Us</Link>
            </p>
          </li>
          <li className={styles.navItem}>
            <p className={`${styles.navLinks}`} onClick={handleClick}>
              <Link to="about-us">Title Insurance</Link>
            </p>
          </li>
          <li className={styles.navItem}>
            <p className={`${styles.navLinks}`} onClick={handleClick}>
              <Link to="buyers">Trust Services</Link>
            </p>
          </li>
          <li className={styles.navItem}>
            <p className={`${styles.navLinks}`} onClick={handleClick}>
              <Link to="sellers">InternationalServices</Link>
            </p>
          </li>
          <li className={styles.navItem}>
            <p className={`${styles.navLinks}`} onClick={handleClick}>
              <Link to="faq">Contact Us</Link>
            </p>
          </li>
        </ul>
        <div className={styles.navIcon} onClick={handleClick}>
          <span>Menu</span> <HamburgerIcon />
        </div>
      </div>
    </nav>
  );
};
