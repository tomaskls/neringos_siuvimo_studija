import style from './New.module.css';
import { Smasina } from '../svg';
import { useEffect } from 'react';
import { Picture1, Picture2, Picture3, Picture4, Picture5, PictureMain } from './ProductPictures';



export function NewProduct() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div id='flisiniai-dzemperiai' className={style.container}>
                <div>
                    <PictureMain />
                </div>
                <div className={style.contentNewItems}>
                    <h1 className={style.h2}>Tapk savo džemperio dizaineriu!</h1>
                    <p className={style.p}>Po kelionių per ledinius kalnus supratome, kad yra vienas dalykas, kurio lietuviams tikrai trūksta - flisinio jaukumo, kuris būtų nepamainomas drėgnomis ir vėsiomis dienomis. Dar geriau - mes leidžiame jums tapti savo džemperio dizaineriu! Galite rinktis dydį, spalvą ir netgi pritaikyti detales pagal savo norus – nuo kišenių vietos iki užtrauktuko dydžio!</p>
                    <div className={style.svg}><Smasina /></div>
                </div>
            </div>
            <div className={style.fotoContainer}>
                <Picture1 />
                <Picture2 />
                <Picture3 />
                <Picture4 />
                <Picture5 />
            </div>
        </>
    );
}
