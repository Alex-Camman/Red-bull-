import css from "./StarGallery.module.scss";
import WSPGallery from "@components/Gallery/WSPGallery";
import {
  staggerChildren,
  staggerContainer,
  slideIn,
  fadeIn,
  textVariant2,
} from "@utils/motion";
import { motion } from "framer-motion";

export const StarGallery = () => {
  const galleryImages = [
    {
      img: "/assets/gallery/image1.jpg",
    },
    // {
    //   img: "/assets/gallery/image2.jpg",
    // },
    {
      img: "/assets/gallery/image3.jpg",
    },
    {
      img: "/assets/gallery/image4.jpg",
    },
    {
      img: "/assets/gallery/image5.jpg",
    },
    {
      img: "/assets/gallery/image6.jpg",
    },
    {
      img: "/assets/gallery/image7.jpg",
    },
    {
      img: "/assets/gallery/image8.jpg",
    },
    {
      img: "/assets/gallery/image9.jpg",
    },
    // {
    //   img: "/assets/gallery/image10.jpg",
    // },
    // {
    //   img: "/assets/gallery/image11.jpg",
    // },
    // {
    //   img: "/assets/gallery/image12.jpg",
    // },
    {
      img: "/assets/gallery/image13.jpg",
    },
    // {
    //   img: "/assets/gallery/image14.jpg",
    // },
    {
      img: "/assets/gallery/image15.jpg",
    },
    // {
    //   img: "/assets/gallery/image16.jpg",
    // },
    {
      img: "/assets/gallery/image17.jpg",
    },
    {
      img: "/assets/gallery/image18.jpg",
    },
    {
      img: "/assets/gallery/image19.jpg",
    },
    {
      img: "/assets/gallery/image20.jpg",
    },
    {
      img: "/assets/gallery/image21.jpg",
    },
    {
      img: "/assets/gallery/image22.jpg",
    },
    // {
    //   img: "/assets/gallery/image23.jpg",
    // },
    {
      img: "/assets/gallery/image24.jpg",
    },
    {
      img: "/assets/gallery/image25.jpg",
    },
    {
      img: "/assets/gallery/image26.jpg",
    },
    // {
    //   img: "/assets/gallery/image27.jpg",
    // },
    {
      img: "/assets/gallery/image28.jpg",
    },
    {
      img: "/assets/gallery/image29.jpg",
    },
    {
      img: "/assets/gallery/image30.jpg",
    },
    {
      img: "/assets/gallery/image31.jpg",
    },
    {
      img: "/assets/gallery/image32.jpg",
    },
    {
      img: "/assets/gallery/image33.jpg",
    },
    {
      img: "/assets/gallery/image34.jpg",
    },
    {
      img: "/assets/gallery/image35.jpg",
    },
    {
      img: "/assets/gallery/image36.jpg",
    },
    {
      img: "/assets/gallery/image37.jpg",
    },
  ];

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      id="Hero"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.titleSection}>
          <h2>Gallery</h2>
          <hr />
        </div>
        <div className={css.galleryContainer}>
          <WSPGallery galleryImages={galleryImages} />
        </div>
      </motion.div>
    </motion.section>
  );
};
