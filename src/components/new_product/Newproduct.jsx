import style from './New.module.css';
// import { Link } from 'react-router-dom';
// import { useTouch } from '../Usetouch';
import { Smasina } from '../svg';
import { useEffect } from 'react';

const PictureNew = () => {
    return (<picture >
        <source srcSet="/siltas_flisinis_dzemperis_750.webp" media="(max-width: 780px)" />
        <img className={style.img} src="/siltas_flisinis_dzemperis_900.webp" loading='lazy' alt="šiltas flisinis džemperis" />
    </picture>
    )
};

export function NewProduct() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div id='new' className={style.container}>
                <div>
                    <PictureNew />
                </div>
                <div className={style.contentNewItems}>
                    <h2 className={style.h2}>Tapk savo džemperio dizaineriu!</h2>
                    <p className={style.p}>Po kelionių per ledinius kalnus supratome, kad yra vienas dalykas, kurio lietuviams tikrai trūksta - flisinio jaukumo, kuris būtų nepamainomas drėgnomis ir vėsiomis dienomis. Dar geriau - mes leidžiame jums tapti savo džemperio dizaineriu! Galite rinktis dydį, spalvą ir netgi pritaikyti detales pagal savo norus – nuo kišenių vietos iki užtrauktuko dydžio!</p>
                    <div className={style.svg}><Smasina /></div>
                </div>
            </div>
            <div className={style.fotoContainer}>
                <img className={style.img} loading='lazy' src="/img/zalias_dzemperis.webp" alt="" />
                <img className={style.img} loading='lazy' src="/img/dzemperis.webp" alt="" />
                <img className={style.img} loading='lazy' src="/img/melynas_dzemperis.webp" alt="" />
                <img className={style.img} loading='lazy' src="/img/moteriskas_flisinis_dzemperis.webp" alt="" />
                <img className={style.img} loading='lazy' src="/img/pilkas_flisinis_dzemperis.webp" alt="" />
                <img className={style.imgvyr} src="/img/vyriskas_dzemperis.webp" alt="" />
            </div>
        </>
    );
}
