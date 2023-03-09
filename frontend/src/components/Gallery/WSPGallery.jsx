import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaExpandAlt } from "react-icons/fa";
import { Pagination } from "@components/Pagination";

import "./wsp-gallery.css";

const WSPGallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(12);

  const maximo = galleryImages.length / porPagina;

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <>
      <div>
        {openModal && (
          <div className="sliderWrap">
            <FaExpandAlt className="btnClose" onClick={handleCloseModal} />
            <FaArrowLeft className="btnPrev" onClick={prevSlide} />
            <FaArrowRight className="btnNext" onClick={nextSlide} />
            <div className="fullScreenImage">
              <img src={galleryImages[slideNumber].img} alt="" />
            </div>
          </div>
        )}
        <div className="galleryWrap">
          {galleryImages &&
            galleryImages
              .slice(
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina
              )
              .map((slide, index) => {
                return (
                  <div
                    className="single"
                    key={index}
                    onClick={() => handleOpenModal(index)}
                  >
                    <img src={slide.img} alt="" />
                  </div>
                );
              })}
        </div>
      </div>
      <div className="containerPagination">
        <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      </div>
    </>
  );
};

export default WSPGallery;
