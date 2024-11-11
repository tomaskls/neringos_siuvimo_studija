import { useState, useEffect } from 'react';
import style from './Gallery.module.css';

export const Pictures = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const image = [
    { path: '/imgGallery/peteliske.webp', name: 'peteliske', width: '900', height: '900' },
    { path: '/imgGallery/suknele_su_ornamentais.webp', name: 'suknele_su_ornamentais', width: '900', height: '1350' },
    { path: '/imgGallery/pilkas_flisinis_dzemperis.webp', name: 'pilkas_flisinis_dzemperis', width: '900', height: '1350' },
    { path: '/imgGallery/bliuzonas_intelektas.webp', name: 'bliuzonas_intelektas', width: '900', height: '1350' },
    { path: '/imgGallery/ivairios_spalvos.webp', name: 'ivairios_spalvos', width: '900', height: '1350' },
    { path: '/imgGallery/melynas_dzemperis.webp', name: 'vyriskas_dzemperis', width: '900', height: '1350' },
    { path: '/imgGallery/apykakle.webp', name: 'apykakle', width: '900', height: '1350' },
    { path: '/imgGallery/custom_diszaino_suknele.webp', name: 'custom_diszaino_suknele', width: '900', height: '1350' },
    { path: '/imgGallery/demisezoninis_paltas.webp', name: 'demisezoninis_paltas', width: '900', height: '1350' },
    { path: '/imgGallery/moteriskas_flisinis_dzemperis.webp', name: 'moteriskas_flisinis_dzemperis', width: '900', height: '1350' },
    { path: '/imgGallery/kasmyro_puspaltis.webp', name: 'kasmyro_puspaltis', width: '900', height: '1350' },
    { path: '/imgGallery/kilpinio_trikotazo_suknele.webp', name: 'kilpinio_trikotazo_suknele', width: '900', height: '1350' },
    { path: '/imgGallery/medvilninis_laisvalaikio_bliuzonas.webp', name: 'medvilninis_laisvalaikio_bliuzonas', width: '900', height: '1350' },
    { path: 'images/siltas_flisinis_dzemperis_900.webp', name: 'siltas_flisinis_dzemperis', width: '900', height: '1350' },
    { path: '/imgGallery/kavos_pertraukele.webp', name: 'kavos_pertraukele', width: '900', height: '1350' },
    { path: '/imgGallery/papludimio_suknele.webp', name: 'papludimio_suknele', width: '900', height: '1350' },
    { path: '/imgGallery/placios_kelnes.webp', name: 'placios_kelnes', width: '900', height: '1350' },
    { path: '/imgGallery/siltas_moteriskas_dzemperis.webp', name: 'siltas_moteriskas_dzemperis', width: '900', height: '1350' },
    { path: '/imgGallery/skaitmenines_spaudos_audinio_suknele.webp', name: 'skaitmenines_spaudos_audinio_suknele', width: '900', height: '1350' },
    { path: '/imgGallery/pakabos.webp', name: 'pakabos', width: '900', height: '600' },
    { path: '/imgGallery/sportinio_tipo_trikotazine_suknele.webp', name: 'sportinio_tipo_trikotazine_suknele', width: '900', height: '1350' },
    { path: '/imgGallery/svarkelis.webp', name: 'svarkelis', width: '900', height: '1350' },
    { path: '/imgGallery/dekoracijos.webp', name: 'dekoracijos', width: '900', height: '1350' },
    { path: '/imgGallery/deriniai.webp', name: 'deriniai', width: '900', height: '1350' },
    { path: '/imgGallery/suknele_su_ornamentais_2.webp', name: 'suknele_su_ornamentais', width: '900', height: '1350' },
    { path: '/imgGallery/juoda_suknele.webp', name: 'juoda_suknele', width: '900', height: '1350' },
    { path: '/imgGallery/laisvalaikio_kostiumelis.webp', name: 'laisvalaikio_kostiumelis', width: '900', height: '1350' },
    { path: '/imgGallery/suknele_zalia.webp', name: 'suknele_zalia', width: '900', height: '1350' },
    { path: '/imgGallery/lininiai_marskiniai.webp', name: 'lininiai_marskiniai', width: '900', height: '1350' },
    { path: '/imgGallery/medvilniniai_dzemperiai_su_gobtuvu.webp', name: 'medvilniniai_dzemperiai_su_gobtuvu', width: '900', height: '1350' },
    { path: '/imgGallery/paltai.webp', name: 'paltai', width: '900', height: '1350' },
    { path: '/imgGallery/progine_suknele.webp', name: 'progine_suknele', width: '900', height: '1350' },
    { path: '/imgGallery/proginis_kostiumelis.webp', name: 'proginis_kostiumelis', width: '900', height: '1350' },
    { path: '/imgGallery/suknele_su_RASTAIS.webp', name: 'suknele_su_RASTAIS', width: '900', height: '1350' },
    { path: '/imgGallery/Rudeninis_paltas.webp', name: 'Rudeninis_paltas', width: '900', height: '1350' },
    { path: '/imgGallery/salikas_apykakle.webp', name: 'salikas_apykakle', width: '900', height: '1350' },
    { path: '/imgGallery/stilizuotas_vilnonis_kostiumas.webp', name: 'stilizuotas_vilnonis_kostiumas', width: '900', height: '1350' },
    { path: '/imgGallery/suknele_1.webp', name: 'suknele_1', width: '900', height: '1350' },
    { path: '/imgGallery/zalias_dzemperis.webp', name: 'vyriskas_dzemperis', width: '900', height: '1350' },
    { path: '/imgGallery/suknele_su_rombais.webp', name: 'suknele_su_rombais', width: '900', height: '1350' },
    { path: '/imgGallery/suknele.webp', name: 'suknele', width: '900', height: '1350' },
    { path: '/imgGallery/tapyta_suknele.webp', name: 'tapyta_suknele', width: '900', height: '1350' },
    { path: '/imgGallery/trikotazine_suknele.webp', name: 'trikotazine_suknele', width: '900', height: '1350' },
    { path: '/imgGallery/adatos.webp', name: 'adatos', width: '900', height: '1350' },
    { path: '/imgGallery/vilnone_suknele.webp', name: 'vilnone_suknele', width: '900', height: '1350' },
    { path: '/imgGallery/viskozine_suknele.webp', name: 'viskozine_suknele', width: '900', height: '1350' },
    { path: '/imgGallery/dzemperiai.webp', name: 'dzemperiai', width: '900', height: '1350' },
    { path: '/imgGallery/siulai.webp', name: 'siulai', width: '900', height: '1350' },
    { path: '/imgGallery/dzemperis.webp', name: 'dzemperis', width: '900', height: '1350' },
    { path: '/imgGallery/suknele_2.webp', name: 'suknele_2', width: '900', height: '1350' },
    { path: '/imgGallery/vyriskas_dzemperis.webp', name: 'vyriskas_dzemperis', width: '900', height: '1200' },
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
    <>
      <div className={style.picturesContainer}>
        <div className={style.imageGrid}>
          {image.map((image, index) => (
            <img
              key={index}
              width={image.width}
              height={image.height}
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
    </>
  );
}
