import { useForm } from "react-hook-form";
import css from "./ContactUs.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren, textVariant2 } from "@utils/motion";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { Element } from "react-scroll";

export const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <Element name="contact">
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
          <div className={css.left}>
            <h2 className={css.titleOne}>Get In Touch</h2>
            <motion.div variants={textVariant2} className={css.txt}>
              Do not hesitate to get in touch with us to start building the pool
              of your dreams!
            </motion.div>
            <div className={css.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63350.39106553666!2d-117.79869055698174!3d34.05690345314702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32def799fa121%3A0x5209947000caa933!2sPomona%2C%20California%2C%20EE.%20UU.!5e0!3m2!1ses!2smx!4v1676827282842!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className={css.info}>
              <div className={css.item}>
                <HiLocationMarker />
                Pomona, CA 91766
              </div>
              <div className={css.item}>
                <HiPhone />
                (909) 630-3576, (909) 506-7025
              </div>
              <div className={css.item}>
                <HiMail />
                franciscocazaressteel@hotmail.com
              </div>
            </div>
          </div>
          <div className={css.right}>
            <h2 className={css.titleTwo}>Contact Us</h2>
            <motion.div variants={textVariant2} className={css.txt}>
              Our team of professionals is here to assist you in any way that
              you need.
            </motion.div>
            <div className={css.formContainer}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formItem">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    {...register("name", {
                      required: true,
                      maxLength: 40,
                    })}
                  />
                  {errors.name?.type === "required" && (
                    <span>This field is required!</span>
                  )}
                  {errors.name?.type === "maxLength" && (
                    <span>The field must be less than 40 characters</span>
                  )}
                </div>
                <div className="formItem">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    {...register("email", {
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  {errors.email?.type === "pattern" && (
                    <span>The email format is wrong!</span>
                  )}
                </div>
                <div className="formItem">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    {...register("phone", {
                      required: true,
                      maxLength: 40,
                    })}
                  />
                  {errors.subject?.type === "required" && (
                    <span>This field is required!</span>
                  )}
                  {errors.subject?.type === "maxLength" && (
                    <span>The field must be less than 40 characters</span>
                  )}
                </div>
                <div className="formItem">
                  <label>Subject</label>
                  <input
                    type="text"
                    placeholder="Subject of the message"
                    {...register("subject", {
                      required: true,
                      maxLength: 40,
                    })}
                  />
                  {errors.subject?.type === "required" && (
                    <span>This field is required!</span>
                  )}
                  {errors.subject?.type === "maxLength" && (
                    <span>The field must be less than 40 characters</span>
                  )}
                </div>
                <div className="formItem">
                  <label>Message</label>
                  <textarea
                    cols="20"
                    rows="5"
                    placeholder="Your Message"
                    {...register("message", {
                      required: true,
                    })}
                  ></textarea>
                  {errors.message?.type === "required" && (
                    <span>Este campo es requerido!</span>
                  )}
                </div>
                <div className={css.btn}>
                  <input type="submit" value="Enviar" />
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </Element>
  );
};
