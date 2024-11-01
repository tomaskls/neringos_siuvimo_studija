import { Adata } from '../svg';
import style from './About.module.css';
import { useEffect } from 'react';

export const PictureAbout = () => {
    return (<picture >
        <source srcSet="/siuvykla_siauliai_750.webp" media="(max-width: 780px)" />
        <img className={style.img} src="/siuvykla_siauliai_900.webp" alt="siuvykla siuvimo studija šiauliuose" />
    </picture>
    )
};
export function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div id='about' className={style.container}>
            <div>
                <PictureAbout />
            </div>
            <div className={style.content}>
                <h2 className={style.h2}>Apie Studiją</h2>
                <p className={style.p}>Labas, mano vardas Neringa. Esu profesionali siuvimo meistrė, konstruktorė ir modeliuotoja. Nuo 2007 m. siuvykla teikia rūbų siuvimo ir taisymo paslaugas. Daugiametė patirtis užtikrina, kad jums bus suteikta kvalifikuota konsultacija apie audinius, jų pasirinkimą ir pritaikymą pagal figūrą. <br /><br /> Kviečiu apsilankyti ir kreiptis visais siuvimo ir rūbų taisymo klausimais. </p>
                <div className={style.svg} ><Adata /></div>
            </div>
        </div>
    );
}