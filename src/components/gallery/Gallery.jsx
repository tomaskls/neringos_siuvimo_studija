import { useState } from 'react';
import style from './Gallery.module.css';
import { Link } from 'react-router-dom';


export const Pictures = () => {
  const image = [
    { path: '/img/pilkas_flisinis_dzemperis.jpg', name: '' },
    { path: '/img/moteriskas_flisinis_dzemperis.jpg', name: '' },
    { path: '/img/kavos_pertraukele.jpg', name: '' },
    { path: '/img/ivairios_spalvos.jpg', name: '' },
    { path: '/img/apykakle.jpg', name: '' },
    { path: '/img/custom_diszaino_suknele.jpg', name: '' },
    { path: '/img/demisezoninis_paltas.jpg', name: '' },
    { path: '/img/kasmyro_puspaltis.jpg', name: '' },
    { path: '/img/kilpinio_trikotazo_suknele.jpg', name: '' },
    { path: '/img/medvilninis_laisvalaikio_bliuzonas.jpg', name: '' },
    { path: '/img/papludimio_suknele.jpg', name: '' },
    { path: '/img/placios_kelnes.jpg', name: '' },
    { path: '/img/siltas_flisinis_dzemperis.jpg', name: '' },
    { path: '/img/siltas_moteriskas_dzemperis.jpg', name: '' },
    { path: '/img/skaitmenines_spaudos_audinio_suknele.jpg', name: '' },
    { path: '/img/sportinio_tipo_trikotazine_suknele.jpg', name: '' },
    { path: '/img/svarkelis.jpg', name: '' },
    { path: '/', name: '' },


  ];
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (image) => {
    setSelectedImage(image);
    document.body.classList.add(style.noScroll);
  };
  
  const handleCloseFullscreen = () => {
    setSelectedImage(null);
    document.body.classList.remove(style.noScroll);
  };
  
  return (
    <div className={style.picturesContainer}>
      <div className={style.titleContainer}>
        <h2 className={style.galleryTitle}>Nuotraukų Galerija</h2>
        <Link to="/">
          <button className={style.btnBack}>Atgal</button>
        </Link>
      </div>
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