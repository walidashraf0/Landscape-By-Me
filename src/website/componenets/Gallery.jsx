import ImageModal from "@/components/ui/ImageModal";
import { useState } from "react";

const Gallery = ({ images, title }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const openModal = (index) => {
    setInitialSlide(index);
    setModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center w-full">
            <span className="border-2 h-0.5 text-black bg-black flex-1"></span>
            <h2 className="mx-2 bg-green-700 text-white px-4 py-2 rounded-md">
              {title}
            </h2>
            <span className="border-2 h-0.5 text-black bg-black flex-1"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 py-12">
            {images.map((el, index) => (
              <img
                key={index}
                src={el.img}
                alt={el.alt}
                className="rounded-md object-cover w-full h-48 md:max-w-4xl cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openModal(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={images}
        initialSlide={initialSlide}
      />
    </>
  );
};

export default Gallery;
