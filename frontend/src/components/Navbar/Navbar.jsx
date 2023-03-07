import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  const goToPage = (path) => {
    navigate(path);
  };

  const handleLinkClick = (sectionId) => {
    const url = `${window.location.origin}/page#/${sectionId}`;
    window.open(url, "_blank");
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
          <li onClick={() => setMenuOpened(!menuOpened)}>
            <Link to="Hero" smooth={true} duration={800} offset={-90}>
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpened(!menuOpened)}>
            <Link to="aboutUs" smooth={true} duration={800} offset={-90}>
              About Us
            </Link>
          </li>
          <li onClick={() => setMenuOpened(!menuOpened)}>
            <Link to="services" smooth={true} duration={800} offset={-90}>
              Services
            </Link>
          </li>

          <li onClick={() => setMenuOpened(!menuOpened)}>
            <Link to="contact" smooth={true} duration={800} offset={-90}>
              Contact Us
            </Link>
          </li>
          <li onClick={() => setMenuOpened(!menuOpened)}>
            <NavLink
              to="/Gallery"
              style={({ isActive }) => ({
                color: isActive ? "#4d4d4d" : undefined,
              })}
            >
              Gallery
            </NavLink>
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
