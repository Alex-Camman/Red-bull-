import { useRef, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { LogoFc, LogoG } from "../../assets/svgs";
import css from "./Navbar.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import { Link } from "react-scroll";

export const Navbar = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const navigate = useNavigate();
  const location = useLocation();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  const goToPage = (path) => {
    navigate(path);
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname === "/gallery") {
      goToPage("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", offset: 100 });
        }
      }, 500);
    } else {
      setMenuOpened(false);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", offset: 100 });
      }
    }
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`${css.wrapper}`}
      viewport={{ once: false, amount: 0.25 }}
      // style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.logo} onClick={() => goToPage("/")}>
          <LogoG />
        </div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li onClick={() => scrollToSection("Hero")}>
            <span>Home</span>
          </li>
          <li onClick={() => scrollToSection("aboutUs")}>
            <span>About Us</span>
          </li>
          <li onClick={() => scrollToSection("services")}>
            <span>Services</span>
          </li>

          <li onClick={() => scrollToSection("contact")}>
            <span>Contact Us</span>
          </li>
          <li onClick={() => goToPage("/gallery")}>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <BiMenuAltRight
            size={30}
            color={menuOpened ? "#595858" : "#4d4d4d"}
          />
        </div>
      </div>
    </motion.div>
  );
};
