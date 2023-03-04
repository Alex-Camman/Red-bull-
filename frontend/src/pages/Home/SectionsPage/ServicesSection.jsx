import css from "./ServicesSection.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren, textVariant2 } from "@utils/motion";

export const ServicesSection = () => {
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
        ServicesSection
      </motion.div>
    </motion.section>
  );
};
