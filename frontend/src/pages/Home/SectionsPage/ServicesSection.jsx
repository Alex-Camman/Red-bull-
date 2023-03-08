import css from "./ServicesSection.module.scss";
import { motion } from "framer-motion";
import { staggerChildren, textVariant2, fadeIn } from "@utils/motion";
import service1 from "@assets/images/service1.jpg";
import service2 from "@assets/images/service2.jpg";
import { AiFillTool } from "react-icons/ai";
import { AiOutlineGateway } from "react-icons/ai";
import { Element } from "react-scroll";

export const ServicesSection = () => {
  return (
    <motion.section
      id="services"
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      section
      className={`paddings ${css.wrapper}`}
    >
      <div className={`yPaddings innerWidth ${css.container}`}>
        <div className={css.titleSection}>
          <h2>Services</h2>
          <hr />
        </div>
        <div className={css.content}>
          <motion.div variants={textVariant2} className={css.card}>
            <div className={css.info}>
              <h3>
                Steel Frame Pools
                <AiFillTool className={css.icon} />
              </h3>
              <p>
                We specialize in building steel frames for swimming pools,
                providing superior craftsmanship and attention to detail. Our
                team of experts will work closely with you to design and build a
                pool that meets your unique needs and exceeds your expectations.
              </p>
            </div>
            <div className={css.image}>
              <img src={service1} alt={Math.random()} />
              <div className={css.textImage}>FC Steel Inc</div>
            </div>
          </motion.div>
          <motion.div variants={textVariant2} className={css.card}>
            <div className={css.info}>
              <h3>
                Excavation
                <AiOutlineGateway className={css.icon} />
              </h3>
              <p>
                Our pool excavation services are designed to help you create the
                perfect foundation for your pool. We use the latest excavation
                techniques and equipment to ensure precision and accuracy, and
                we take great care to minimize disruption to your property.
                Whether you need a new pool excavation or repairs to an existing
                pool, we have the expertise and resources to get the job done
                right.
              </p>
              <span>
                Contact us today to learn more about our services and how we can
                help you create the pool of your dreams.
              </span>
            </div>
            <div className={css.image}>
              <img src={service2} alt={Math.random()} />
              <div className={css.textImage}>FC Steel Inc</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
