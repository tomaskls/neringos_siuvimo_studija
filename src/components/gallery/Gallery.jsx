import { useState } from 'react';
import style from './Gallery.module.css';


export const Pictures = () => {
  const image = [
    { path: '/img/svarkelis.webp', name: 'svarkelis' },
    { path: '/img/papludimio_suknele.webp', name: 'papludimio_suknele' },
    { path: '/img/audiniu_parinkimas.webp', name: '' },
    { path: '/img/demisezoninis_paltas.webp', name: '' },
    { path: '/img/deriniai.webp', name: '' },
    { path: '/img/kasmyro_puspaltis.webp', name: '' },
    { path: '/img/konstravimas.webp', name: '' },
    { path: '/img/laisvalaikio_kostiumelis.webp', name: '' },
    { path: '/img/lininiai_marskiniai.webp', name: '' },
    { path: '/img/lininiai_rubai.webp', name: '' },
    { path: '/img/medvilniniai_dzemperiai_su_gobtuvu.webp', name: '' },
    { path: '/img/medvilninis_laisvalaikio_bliuzonas.webp', name: '' },
    { path: '/img/placios_kelnes.webp', name: '' },
    { path: '/img/progine_suknele.webp', name: '' },
    { path: '/img/proginis_kostiumelis.webp', name: '' },
    { path: '/img/rankdarbiai.webp', name: '' },
    { path: '/img/ranku_darbas_aplikacijos.webp', name: '' },
    { path: '/img/rudeninis_paltas.webp', name: '' },
    { path: '/img/salikas_apykakle.webp', name: '' },
    { path: '/img/siuvinejimas_rankomis.webp', name: '' },
    { path: '/img/stilizuotas_vilnonis_kostiumas.webp', name: '' },
    { path: '/img/vasarine_suknele.webp', name: '' },
    { path: '/img/viskozine_suknele.webp', name: '' },
    { path: '/img/vyriskas_puspaltis.webp', name: '' },


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
          <img
            key={index}
            src={image.path}
            alt={image.name}
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