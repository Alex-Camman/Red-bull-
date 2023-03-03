import css from "./Hero.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";

export const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        <div className={css.left}>
          <h1 className={css.title}>Hero</h1>
          <p className={css.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <div className={css.containerBtn}>
            <button className={css.btn}>Button</button>
          </div>
        </div>
        <div className={css.right}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className={css.swiper}
          >
            <SwiperSlide className={css.slide}>Slide 1</SwiperSlide>
            <SwiperSlide className={css.slide}>Slide 2</SwiperSlide>
            <SwiperSlide className={css.slide}>Slide 3</SwiperSlide>
            <SwiperSlide className={css.slide}>Slide 4</SwiperSlide>
            <SwiperSlide className={css.slide}>Slide 5</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
