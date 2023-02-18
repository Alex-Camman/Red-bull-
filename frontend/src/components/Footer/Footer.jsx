import css from "./Footer.module.scss";
import { LogoW, LogoFc, LogoG } from "../../assets/svgs";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
import { HiOutlineMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
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
            <div className={`secondaryText ${css.text}`}>
              Building breathtaking pools. Expertise, commitment, quality
              guaranteed.
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
            <div className={`${css.item}`}>
              <BsInstagram />
            </div>
            <div className={`${css.item}`}>
              <BsFacebook />
            </div>
            <div className={`${css.item}`}>
              <BsTwitter />
            </div>
            <div className={`${css.item}`}>
              <BsLinkedin />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
