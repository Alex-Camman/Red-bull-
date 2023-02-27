import css from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>hero</div>
    </section>
  );
};
