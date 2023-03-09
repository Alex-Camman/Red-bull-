import styles from "./Pagination.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Pagination = ({ pagina, setPagina, maximo }) => {
  const handleNext = () => {
    if (pagina < maximo) {
      setPagina(pagina + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.arrow} onClick={handlePrev}>
        <IoIosArrowBack />
      </div>
      <div className={styles.pag} onClick={() => handlePrev()}>
        {pagina - 1}
      </div>
      <div className={styles.pagActive}>{pagina}</div>
      <div className={styles.pag} onClick={() => handleNext()}>
        {pagina + 1}
      </div>
      <div className={styles.arrow} onClick={handleNext}>
        <IoIosArrowForward />
      </div>
    </div>
  );
};
