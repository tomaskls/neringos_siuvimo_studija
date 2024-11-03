import { useState, useEffect } from 'react';
import style from './Gallery.module.css';

export const Pictures = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const image = [
    { path: '/img/peteliske.webp', name: 'peteliske', width: '900', height: '900' },
    { path: '/img/suknele_su_ornamentais.webp', name: 'suknele_su_ornamentais', width: '900', height: '1350' },
    { path: '/img/pilkas_flisinis_dzemperis.webp', name: 'pilkas_flisinis_dzemperis', width: '900', height: '1350' },
    { path: '/img/bliuzonas_intelektas.webp', name: 'bliuzonas_intelektas', width: '900', height: '1350' },
    { path: '/img/ivairios_spalvos.webp', name: 'ivairios_spalvos', width: '900', height: '1350' },
    { path: '/img/melynas_dzemperis.webp', name: 'vyriskas_dzemperis', width: '900', height: '1350' },
    { path: '/img/apykakle.webp', name: 'apykakle', width: '900', height: '1350' },
    { path: '/img/custom_diszaino_suknele.webp', name: 'custom_diszaino_suknele', width: '900', height: '1350' },
    { path: '/img/demisezoninis_paltas.webp', name: 'demisezoninis_paltas', width: '900', height: '1350' },
    { path: '/img/moteriskas_flisinis_dzemperis.webp', name: 'moteriskas_flisinis_dzemperis', width: '900', height: '1350' },
    { path: '/img/kasmyro_puspaltis.webp', name: 'kasmyro_puspaltis', width: '900', height: '1350' },
    { path: '/img/kilpinio_trikotazo_suknele.webp', name: 'kilpinio_trikotazo_suknele', width: '900', height: '1350' },
    { path: '/img/medvilninis_laisvalaikio_bliuzonas.webp', name: 'medvilninis_laisvalaikio_bliuzonas', width: '900', height: '1350' },
    { path: '/siltas_flisinis_dzemperis_900.webp', name: 'siltas_flisinis_dzemperis', width: '900', height: '1350' },
    { path: '/img/kavos_pertraukele.webp', name: 'kavos_pertraukele', width: '900', height: '1350' },
    { path: '/img/papludimio_suknele.webp', name: 'papludimio_suknele', width: '900', height: '1350' },
    { path: '/img/placios_kelnes.webp', name: 'placios_kelnes', width: '900', height: '1350' },
    { path: '/img/siltas_moteriskas_dzemperis.webp', name: 'siltas_moteriskas_dzemperis', width: '900', height: '1350' },
    { path: '/img/skaitmenines_spaudos_audinio_suknele.webp', name: 'skaitmenines_spaudos_audinio_suknele', width: '900', height: '1350' },
    { path: '/img/pakabos.webp', name: 'pakabos', width: '900', height: '600' },
    { path: '/img/sportinio_tipo_trikotazine_suknele.webp', name: 'sportinio_tipo_trikotazine_suknele', width: '900', height: '1350' },
    { path: '/img/svarkelis.webp', name: 'svarkelis', width: '900', height: '1350' },
    { path: '/img/dekoracijos.webp', name: 'dekoracijos', width: '900', height: '1350' },
    { path: '/img/deriniai.webp', name: 'deriniai', width: '900', height: '1350' },
    { path: '/img/suknele_su_ornamentais_2.webp', name: 'suknele_su_ornamentais', width: '900', height: '1350' },
    { path: '/img/juoda_suknele.webp', name: 'juoda_suknele', width: '900', height: '1350' },
    { path: '/img/laisvalaikio_kostiumelis.webp', name: 'laisvalaikio_kostiumelis', width: '900', height: '1350' },
    { path: '/img/suknele_zalia.webp', name: 'suknele_zalia', width: '900', height: '1350' },
    { path: '/img/lininiai_marskiniai.webp', name: 'lininiai_marskiniai', width: '900', height: '1350' },
    { path: '/img/medvilniniai_dzemperiai_su_gobtuvu.webp', name: 'medvilniniai_dzemperiai_su_gobtuvu', width: '900', height: '1350' },
    { path: '/img/paltai.webp', name: 'paltai', width: '900', height: '1350' },
    { path: '/img/progine_suknele.webp', name: 'progine_suknele', width: '900', height: '1350' },
    { path: '/img/proginis_kostiumelis.webp', name: 'proginis_kostiumelis', width: '900', height: '1350' },
    { path: '/img/suknele_su_RASTAIS.webp', name: 'suknele_su_RASTAIS', width: '900', height: '1350' },
    { path: '/img/Rudeninis_paltas.webp', name: 'Rudeninis_paltas', width: '900', height: '1350' },
    { path: '/img/salikas_apykakle.webp', name: 'salikas_apykakle', width: '900', height: '1350' },
    { path: '/img/stilizuotas_vilnonis_kostiumas.webp', name: 'stilizuotas_vilnonis_kostiumas', width: '900', height: '1350' },
    { path: '/img/suknele_1.webp', name: 'suknele_1', width: '900', height: '1350' },
    { path: '/img/zalias_dzemperis.webp', name: 'vyriskas_dzemperis', width: '900', height: '1350' },
    { path: '/img/suknele_su_rombais.webp', name: 'suknele_su_rombais', width: '900', height: '1350' },
    { path: '/img/suknele.webp', name: 'suknele', width: '900', height: '1350' },
    { path: '/img/tapyta_suknele.webp', name: 'tapyta_suknele', width: '900', height: '1350' },
    { path: '/img/trikotazine_suknele.webp', name: 'trikotazine_suknele', width: '900', height: '1350' },
    { path: '/img/adatos.webp', name: 'adatos', width: '900', height: '1350' },
    { path: '/img/vilnone_suknele.webp', name: 'vilnone_suknele', width: '900', height: '1350' },
    { path: '/img/viskozine_suknele.webp', name: 'viskozine_suknele', width: '900', height: '1350' },
    { path: '/img/dzemperiai.webp', name: 'dzemperiai', width: '900', height: '1350' },
    { path: '/img/siulai.webp', name: 'siulai', width: '900', height: '1350' },
    { path: '/img/dzemperis.webp', name: 'dzemperis', width: '900', height: '1350' },
    { path: '/img/suknele_2.webp', name: 'suknele_2', width: '900', height: '1350' },
    { path: '/img/vyriskas_dzemperis.webp', name: 'vyriskas_dzemperis', width: '900', height: '1200' },
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
