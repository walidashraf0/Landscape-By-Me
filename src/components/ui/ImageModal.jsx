import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { X } from 'lucide-react';

const ImageModal = ({ isOpen, onClose, images, initialSlide = 0 }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold cursor-pointer"
        >
          <X />
        </button>
        
        <Swiper
          initialSlide={initialSlide}
          modules={[Navigation, Pagination, Keyboard]}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          loop={true}
          className="w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-[80vh]">
                <img 
                  src={image.img} 
                  alt={`Image ${index + 1}`} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageModal;