import { useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LogoFc, LogoG } from "../../assets/svgs";
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
  const navigate = useNavigate();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  const goToPage = (path) => {
    navigate(path);
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
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#4d4d4d" : undefined,
              })}
            >
              Home
            </NavLink>
          </li>
          <li onClick={() => setMenuOpened(!menuOpened)}>
            <NavLink
              to="/About"
              style={({ isActive }) => ({
                color: isActive ? "#4d4d4d" : undefined,
              })}
            >
              About Us
            </NavLink>
          </li>
          <li onClick={() => setMenuOpened(!menuOpened)}>
            <NavLink
              to="/Services"
              style={({ isActive }) => ({
                color: isActive ? "#4d4d4d" : undefined,
              })}
            >
              Services
            </NavLink>
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
          <li onClick={() => setMenuOpened(!menuOpened)}>
            <NavLink
              to="/Contact"
              style={({ isActive }) => ({
                color: isActive ? "#4d4d4d" : undefined,
              })}
            >
              Contact Us
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
