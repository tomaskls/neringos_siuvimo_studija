import { useState, useEffect } from 'react';
import style from './Gallery.module.css';
import { Link } from 'react-router-dom';


export const Pictures = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Slinkti į puslapio viršų, kai komponentas užkraunamas
  }, []);

  const image = [
    { path: '/img/pilkas_flisinis_dzemperis.webp', name: 'pilkas_flisinis_dzemperis' },
    { path: '/img/bliuzonas_intelektas.webp', name: 'bliuzonas_intelektas' },
    { path: '/img/ivairios_spalvos.webp', name: 'ivairios_spalvos' },
    { path: '/img/apykakle.webp', name: 'apykakle' },
    { path: '/img/custom_diszaino_suknele.webp', name: 'custom_diszaino_suknele' },
    { path: '/img/demisezoninis_paltas.webp', name: 'demisezoninis_paltas' },
    { path: '/img/moteriskas_flisinis_dzemperis.webp', name: 'moteriskas_flisinis_dzemperis' },
    { path: '/img/kasmyro_puspaltis.webp', name: 'kasmyro_puspaltis' },
    { path: '/img/kilpinio_trikotazo_suknele.webp', name: 'kilpinio_trikotazo_suknele' },
    { path: '/img/medvilninis_laisvalaikio_bliuzonas.webp', name: 'medvilninis_laisvalaikio_bliuzonas' },
    { path: '/siltas_flisinis_dzemperis_900.webp', name: 'siltas_flisinis_dzemperis' },
    { path: '/img/kavos_pertraukele.webp', name: 'kavos_pertraukele' },
    { path: '/img/papludimio_suknele.webp', name: 'papludimio_suknele' },
    { path: '/img/placios_kelnes.webp', name: 'placios_kelnes' },
    { path: '/img/siltas_moteriskas_dzemperis.webp', name: 'siltas_moteriskas_dzemperis' },
    { path: '/img/skaitmenines_spaudos_audinio_suknele.webp', name: 'skaitmenines_spaudos_audinio_suknele' },
    { path: '/img/sportinio_tipo_trikotazine_suknele.webp', name: 'sportinio_tipo_trikotazine_suknele' },
    { path: '/img/svarkelis.webp', name: 'svarkelis' },
    { path: '/img/dekoracijos.webp', name: 'dekoracijos' },
    { path: '/img/deriniai.webp', name: 'deriniai' },
    { path: '/img/juoda_suknele.webp', name: 'juoda_suknele' },
    { path: '/img/laisvalaikio_kostiumelis.webp', name: 'laisvalaikio_kostiumelis' },
    { path: '/img/lininiai_marskiniai.webp', name: 'lininiai_marskiniai' },
    { path: '/img/medvilniniai_dzemperiai_su_gobtuvu.webp', name: 'medvilniniai_dzemperiai_su_gobtuvu' },
    { path: '/img/paltai.webp', name: 'paltai' },
    { path: '/img/progine_suknele.webp', name: 'progine_suknele' },
    { path: '/img/proginis_kostiumelis.webp', name: 'proginis_kostiumelis' },
    { path: '/img/Rudeninis_paltas.webp', name: 'Rudeninis_paltas' },
    { path: '/img/salikas_apykakle.webp', name: 'salikas_apykakle' },
    { path: '/img/stilizuotas_vilnonis_kostiumas.webp', name: 'stilizuotas_vilnonis_kostiumas' },
    { path: '/img/suknele_1.webp', name: 'suknele_1' },
    { path: '/img/suknele_su_rombais.webp', name: 'suknele_su_rombais' },
    { path: '/img/suknele.webp', name: 'suknele' },
    { path: '/img/tapyta_suknele.webp', name: 'tapyta_suknele' },
    { path: '/img/trikotazine_suknele.webp', name: 'trikotazine_suknele' },
    { path: '/img/vilnone_suknele.webp', name: 'vilnone_suknele' },
    { path: '/img/viskozine_suknele.webp', name: 'viskozine_suknele' },
    { path: '/img/adatos.webp', name: 'adatos' },
    { path: '/img/dzemperiai.webp', name: 'dzemperiai' },
    { path: '/img/dzemperis.webp', name: 'dzemperis'},
    { path: '/img/pakabos.webp', name: 'pakabos'},
    { path: '/img/peteliske.webp', name: 'peteliske'},
    { path: '/img/siulai.webp', name: 'siulai'},
    { path: '/img/suknele_2.webp', name: 'suknele_2'},
    { path: '/img/suknele_su_RASTAIS.webp', name: 'suknele_su_RASTAIS'},
    { path: '/img/suknele_zalia.webp', name: 'suknele_zalia'},
    { path: '/img/vyriskas_dzemperis.webp', name: 'vyriskas_dzemperis'},


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
    </>
  );
}