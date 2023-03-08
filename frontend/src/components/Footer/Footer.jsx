import css from "./Footer.module.scss";
import { LogoW, LogoFc, LogoG } from "../../assets/svgs";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
import { HiOutlineMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

export const Footer = () => {
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth ${css.container}`}
      >
        <div className={`${css.top}`}>
          <div className={`${css.brand}`}>
            <div className={css.logo}>
              <LogoG />
            </div>
            <div className={`${css.text}`}>
              We specialize in building steel frames and excavating for swimming
              pools, providing expert craftsmanship and superior customer
              service.
            </div>
          </div>
          <div className={`${css.services}`}>
            <h4>Services</h4>
            <ul>
              <li>Pool Excavations</li>
              <li>Steel Framing for Pools</li>
            </ul>
          </div>
          <div className={`${css.contact}`}>
            <h4>ContactUs</h4>
            <ul>
              <li>
                <span>
                  <HiOutlineMail />
                </span>
                franciscocazaressteel@hotmail.com
              </li>
              <li>
                <span>
                  <HiPhone />
                </span>
                (909) 630-3576, (909) 506-7025
              </li>
              <li>
                <span>
                  <HiLocationMarker />
                </span>
                Pomona, California
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className={`${css.bottom}`}>
          <div className={`${css.copy}`}>
            <span>Copyright</span> © 2023 Fc Steel Inc All Rights Reserved
          </div>
          <div className={`${css.icons}`}>
            <div
              className={`${css.item}`}
              onClick={() =>
                openLink("https://www.instagram.com/fc_steelinc78/")
              }
            >
              <BsInstagram />
            </div>
            <div
              className={`${css.item}`}
              onClick={() =>
                openLink(
                  "https://www.facebook.com/profile.php?id=100070697663514"
                )
              }
            >
              <BsFacebook />
            </div>

            <div
              className={`${css.item}`}
              onClick={() =>
                openLink("https://www.tiktok.com/@1978.fc.steel.inc")
              }
            >
              <FaTiktok />
            </div>
            <div
              className={`${css.item}`}
              onClick={() =>
                openLink("https://www.youtube.com/@alexcazares6405")
              }
            >
              <BsYoutube />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
