import css from "./Testimonials.module.scss";
import { motion } from "framer-motion";
import { staggerChildren, textVariant2, fadeIn } from "@utils/motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Mary Johnson",
    position: "Architect",
    text: "Working with FC Steel was an amazing experience. Their team is very knowledgeable and skilled in their field. They always meet deadlines and are willing to work as a team to achieve the desired outcome. ",
    image: "/assets/testimonials/1.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    position: "Homeowner",
    text: "I hired FC Steel to build the steel frame for my pool and I couldn't be more pleased with their work. Their team is very professional and friendly, and they kept me informed at every stage of the project. I would recommend FC Steel to anyone looking for quality service.",
    image: "/assets/testimonials/1.jpg",
  },
  {
    id: 3,
    name: "David Brown",
    position: "Contractor",
    text: "I have worked with FC Steel on several projects and they have always delivered high-quality work. Their team is very collaborative and willing to help at all times. They are very professional and always strive to exceed the client's expectations.",
    image: "/assets/testimonials/1.jpg",
  },
  {
    id: 4,
    name: "Ana Gomez",
    position: "Homeowner ",
    text: "FC Steel Inc. built my pool with a steel frame and I am thrilled with the result. The team was very professional and friendly, and the work was completed on time and within budget. I highly recommend their services!",
  },
  {
    id: 5,
    name: "David Rodriguez",
    position: "Homeowner",
    text: "I was very impressed with the team at FC Steel Inc. They were professional, knowledgeable, and easy to work with. They completed the excavation and steel framing for my pool efficiently and within my budget. ",
    image: "/assets/testimonials/1.jpg",
  },
  {
    id: 6,
    name: "Sarah Johnson",
    position: "Construction project manager",
    text: "They are highly skilled in pool excavation and steel framing and always deliver high-quality work. They are also very reliable and easy to communicate with.",
    image: "/assets/testimonials/1.jpg",
  },
];

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
      <div className={`yPaddings innerWidth ${css.container}`}>
        <motion.div variants={textVariant2} className={css.titleSection}>
          <h2>What our clients say</h2>
          <hr />
        </motion.div>
        <div className={css.content}>
          <motion.div variants={fadeIn} className={css.slider}>
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={css.item}>
                  <div className={css.image}>
                    <img
                      src={
                        testimonial.image
                          ? testimonial.image
                          : "/assets/testimonials/1.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <div className={css.name}>
                    <h3>{testimonial.name}</h3>
                  </div>
                  <div className={css.position}>
                    <h4>{testimonial.position}</h4>
                  </div>
                  <div className={css.text}>
                    <p>{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
