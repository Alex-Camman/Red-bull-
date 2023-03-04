import css from "./AboutUs.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren, textVariant2 } from "@utils/motion";
import about from "@assets/images/about.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

export const AboutUs = () => {
  const [counterOn, setCounterOn] = useState(false);

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
        <div className={css.content}>
          <div className={css.left}>
            <div className={css.titleSection}>
              <h2>About Us</h2>
              <hr />
            </div>
            <p>
              At FC Steel, we are passionate about creating beautiful and
              functional swimming pools that exceed our clients' expectations.
              We specialize in building steel frames and excavating for swimming
              pools, and we take great pride in our craftsmanship and attention
              to detail.
            </p>
            <p>
              Our team is comprised of experienced professionals who are
              dedicated to providing superior customer service and ensuring that
              each project is completed on time and within budget. We work
              closely with our clients to understand their unique vision for
              their pool and to bring that vision to life.
            </p>
          </div>
          <div className={css.right}>
            <img src={about} alt={Math.random() > 0.5 ? "about" : "about2"} />
          </div>
        </div>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className={css.stats}>
            <div className={css.stat}>
              <h3>
                {counterOn && (
                  <CountUp start={0} end={100} duration={2} delay={0} />
                )}
                +
              </h3>
              <p>Projects completed</p>
            </div>
            <div className={css.stat}>
              <h3>
                {counterOn && (
                  <CountUp start={0} end={12} duration={2} delay={0} />
                )}
                +
              </h3>
              <p>Years of experience</p>
            </div>
            <div className={css.stat}>
              <h3>
                {counterOn && (
                  <CountUp start={0} end={100} duration={2} delay={0} />
                )}
                %
              </h3>
              <p>
                Clients <br /> satisfaction
              </p>
            </div>
            <div className={css.stat}>
              <h3>
                {counterOn && (
                  <CountUp start={0} end={20} duration={2} delay={0} />
                )}
                +
              </h3>
              <p>Team members</p>
            </div>
          </div>
        </ScrollTrigger>
      </motion.div>
    </motion.section>
  );
};
