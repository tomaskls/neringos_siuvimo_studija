import style from './New.module.css';
import { Link } from 'react-router-dom';
import { useTouch } from '../Usetouch';
import { Smasina } from '../svg';
import { useEffect } from 'react';

const PictureNew = () => {
    return (<picture >
        <source srcSet="/siltas_flisinis_dzemperis_750.webp" media="(max-width: 780px)" />
        <img className={style.img} src="/siltas_flisinis_dzemperis_900.webp" loading='lazy' alt="šiltas flisinis džemperis" />
    </picture>
    )
};

export function New() {
    const { isTouched, handleTouchStart, handleTouchEnd } = useTouch();
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
                    <h2 className={style.h2}>Kalnai įkvėpė šildyti lietuviškas širdis</h2>
                    <p className={style.p}>Po kelionių per ledinius Norvegijos kalnus supratome, kad yra vienas dalykas, kurio lietuviams tikrai trūksta - flisinio jaukumo, kuris būtų nepamainomas drėgnomis ir vėsiomis dienomis. Grįžę namo, nusprendėme pasidalinti savo atradimu ir pradėjome gaminti flisinius džemperius, kurie yra tokie šilti, kad net pingvinai pavydėtų. Dar geriau - mes leidžiame jums tapti savo džemperio dizaineriu! Galite rinktis dydį, spalvą ir netgi pritaikyti detales pagal savo norus – nuo kišenių vietos iki užtrauktuko dydžio!</p>
                    <p className={style.p}>
                        Pavyzdžius rasite :&nbsp;&nbsp;
                        <Link
                            className={`${style.plink} ${isTouched ? style.touched : ''}`}
                            to="/gallery"
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >Galerijoje
                        </Link>
                    </p>
                    <div className={style.svg}><Smasina /></div>
                </div>
            </div>
        </>
    );
}
