import { useForm } from "react-hook-form";
import css from "./ContactUs.module.scss";
import { motion } from "framer-motion";
import {
  footerVariants,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

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
          <p>
            Do not hesitate to get in touch with us to start building the pool
            of your dreams!
          </p>
        </div>
        <div className={css.right}>
          <h2 className={css.titleTwo}>Contact Us</h2>
          <p>
            Our team of professionals is here to assist you in any way that you
            need.
          </p>
          <div className={css.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formItem">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="
                  Your Name
                  "
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
                  placeholder="
                  Your Email
                  "
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
                  type="
                  tel
                  "
                  placeholder="
                    Your phone number
                  "
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
                  placeholder="
                  Subject of the message
                  "
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
                  placeholder="
                  Your Message
                  "
                  {...register("message", {
                    required: true,
                  })}
                ></textarea>
                {errors.message?.type === "required" && (
                  <span>Este campo es requerido!</span>
                )}
              </div>
              <div className={css.btn}>
                <input type="submit" value="Enviar" className="btnCursos" />
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
