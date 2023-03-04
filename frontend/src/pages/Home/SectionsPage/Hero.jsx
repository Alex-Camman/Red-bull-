import css from "./Hero.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";
import { Olas } from "@components/Home";

const images = [
  "/assets/hero/h1.jpg",
  "/assets/hero/h2.jpg",
  "/assets/hero/h3.jpg",
  "/assets/hero/h4.jpg",
];

export const Hero = () => {
  return (
    <>
      <section className={`paddings ${css.wrapper}`}>
        <div className={`innerWidth ${css.container}`}>
          <div className={css.left}>
            <h1 className={css.title}>
              Let us build your dream pool with precision and expertise.
            </h1>
            <h3 className={css.description}>
              We are your go-to experts in building steel frames and excavating
              for swimming pools.
            </h3>
            <div className={css.containerBtn}>
              <button className={css.btn}>Get a quote</button>
            </div>
          </div>
          <div className={css.right}>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className={css.swiper}
            >
              {images.map((image, i) => (
                <SwiperSlide className={css.slide} key={i}>
                  <img src={image} alt={i} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <Olas />
      </section>
    </>
  );
};
