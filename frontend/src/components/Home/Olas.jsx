import css from "./Olas.module.scss";

export const Olas = () => {
  return (
    <div className={css.olasContainer}>
      <div className={css.olaUno}></div>
      <div className={css.olaDos}></div>
      <div className={css.olaTres}></div>
    </div>
  );
};
