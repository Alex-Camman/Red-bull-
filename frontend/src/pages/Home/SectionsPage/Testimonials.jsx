import css from "./Testimonials.module.scss";
import { motion } from "framer-motion";
import { staggerChildren, textVariant2, fadeIn } from "@utils/motion";

export const Testimonials = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      section
      className={`paddings ${css.wrapper}`}
    >
      <div className={`yPaddings innerWidth ${css.container}`}>
        <motion.div variants={textVariant2} className={css.titleSection}>
          <h2>What our clients say</h2>
          <hr />
        </motion.div>
      </div>
    </motion.section>
  );
};
