import { useState } from 'react';
import style from './Gallery.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export const Pictures = () => {
  const image = [
    {path: '/img/svarkelis.webp', name:'svarkelis'},
    {path: '/img/papludimio_suknele.webp', name:'papludimio_suknele'},
    
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseFullscreen = () => {
    setSelectedImage(null);
  };

  return (
    <div className={style.picturesContainer}>
      <h2 className={style.galleryTitle}>Nuotraukų Galerija</h2>
      <div className={style.imageGrid}>
        {image.map((image, index) => (
          <LazyLoadImage
            key={index}
            src={image.path}
            alt={image.name}
            effect="opacity"
            className={style.galleryImage}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className={style.fullscreenOverlay} onClick={handleCloseFullscreen}>
          <img src={selectedImage.path} alt="selectedImage.name" className={style.fullscreenImage} />
        </div>
      )}
    </div>
  );
};

