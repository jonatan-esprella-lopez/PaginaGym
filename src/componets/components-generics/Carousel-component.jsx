import React, { useState } from 'react';
import '../../styles/Instalaciones/Areas.css';

const CarouselComponent = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const prevSlide = () => {
    if (images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button prev" aria-label="Previous slide">❮</button>
      <div className="carousel-slides">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              display: index === currentIndex ? 'block' : 'none'
            }}
          >
            <img src={image} alt={`Imagen area aerobica ${index + 1}`} className="ambiente-image" />
            <p>Image {index + 1}</p>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="carousel-button next" aria-label="Next slide">❯</button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
