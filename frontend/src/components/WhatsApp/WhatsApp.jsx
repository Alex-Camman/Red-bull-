import { BsWhatsapp } from "react-icons/bs";
import styles from "./WhatsApp.module.scss";

export const WhatsApp = () => {
  const text = "I'm interested in your services!";
  return (
    <a
      href={`https://wa.me/19095397713?text=${text}`}
      className={styles.btnWsp}
      target="_blank"
    >
      <BsWhatsapp />
    </a>
  );
};
