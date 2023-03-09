import css from "./WaterWave.module.scss";

export const WaterWave = () => {
  return (
    <div className={css.waves}>
      <div className={css.wave} id={css.wave1}></div>
      <div className={css.wave} id={css.wave2}></div>
      <div className={css.wave} id={css.wave3}></div>
      <div className={css.wave} id={css.wave4}></div>
    </div>
  );
};
