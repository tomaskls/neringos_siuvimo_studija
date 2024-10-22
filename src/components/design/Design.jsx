import { Adata } from '../svg';
import style from './Design.module.css';
import { useEffect } from 'react';

const PictureSewing = () => {
    return (<picture >
        <source srcSet="/design_750.webp" media="(max-width: 780px)" />
        <img className={style.img} src="/design_900.webp" alt="moteriškų rūbų siuvykla" />
    </picture>
    )
};

export function Design() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div id='design' className={style.container}>
            <div><PictureSewing /></div>
            <div className={style.content}>
                <h2 className={style.h2}>Modeliavimas Išskirtiniai Drabužiai Jums</h2>
                <p className={style.p}>„Nuo idėjos iki podiumo - mūsų modeliavimo paslaugos jūsų sėkmei!“ Ieškote tobulo drabužio, bet nerandate jo parduotuvėje? Laikas sukurti jį patiems! Mūsų modeliavimo paslauga leis jums realizuoti savo kūrybines vizijas ir sukurti drabužį, kuris bus unikalus, stilingas ir puikiai pritaikytas būtent jums.</p>
                <div className={style.svg} ><Adata /></div>
            </div>
        </div>
    );
}