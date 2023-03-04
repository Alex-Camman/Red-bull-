import css from "./WithUs.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren, textVariant2 } from "@utils/motion";
import {
  HiOutlineIdentification,
  HiOutlineThumbUp,
  HiOutlineCash,
  HiOutlineClipboardList,
} from "react-icons/hi";

export const WithUs = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      section
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}
      >
        <div className={css.titleSection}>
          <h2>Why Choose Us</h2>
          <hr />
        </div>
        <div className={css.content}>
          <div className={css.left}>
            <ul className={css.list}>
              <li className={css.item}>
                <div className={css.itemTitle}>
                  Experienced and Skilled Professionals
                </div>
                <div className={css.itemText}>
                  Our team consists of experienced and skilled professionals
                  dedicated to providing exceptional service and high-quality
                  results.
                </div>
              </li>
              <li className={css.item}>
                <div className={css.itemTitle}>Customizable Services</div>
                <div className={css.itemText}>
                  We offer customizable services to meet your specific needs and
                  ensure that we deliver exactly what you need.
                </div>
              </li>
              <li className={css.item}>
                <div className={css.itemTitle}>State-of-the-Art Equipment</div>
                <div className={css.itemText}>
                  We use the latest technology and state-of-the-art equipment to
                  complete projects efficiently and effectively.
                </div>
              </li>
              <li className={css.item}>
                <div className={css.itemTitle}>Competitive Pricing</div>
                <div className={css.itemText}>
                  We offer competitive pricing without compromising on quality,
                  providing value to our customers.
                </div>
              </li>
              <li className={css.item}>
                <div className={css.itemTitle}>Excellent Customer Service</div>
                <div className={css.itemText}>
                  We are committed to providing excellent customer service and
                  working closely with you to ensure your satisfaction with the
                  results.
                </div>
              </li>
            </ul>
          </div>
          <div className={css.right}>
            <div className={css.card}>
              <div className={css.icon}>
                <HiOutlineIdentification />
              </div>
              <div className={css.title}>We Are Licensed</div>
            </div>
            <div className={css.card}>
              <div className={css.icon}>
                <HiOutlineThumbUp />
              </div>
              <div className={css.title}>Free Consultation</div>
            </div>

            <div className={css.card}>
              <div className={css.icon}>
                <HiOutlineClipboardList />
              </div>
              <div className={css.title}>
                Residential and Commercial Services
              </div>
            </div>
            <div className={css.card}>
              <div className={css.icon}>
                <HiOutlineCash />
              </div>
              <div className={css.title}>We Accept Cash and Checks</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
