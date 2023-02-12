import { useRef, useState } from "react";
// import { Link } from "react-router-dom";
import { LogoFc } from "../../assets/svgs";
import css from "./Navbar.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

export const Navbar = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`${css.wrapper}`}
      viewport={{ once: false, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>
          <LogoFc />
        </div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li onClick={() => setMenuOpened(!menuOpened)}>
            <a href="#Home">Home</a>
          </li>
          <li onClick={() => setMenuOpened(!menuOpened)}>
            <a href="#About">About Us</a>
          </li>
          <li onClick={() => setMenuOpened(!menuOpened)}>
            <a href="#Services">Services</a>
          </li>
          <li onClick={() => setMenuOpened(!menuOpened)}>
            <a href="#Gallery">Gallery</a>
          </li>
          <li onClick={() => setMenuOpened(!menuOpened)}>
            <a href="#Contact">Contact Us</a>
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};
