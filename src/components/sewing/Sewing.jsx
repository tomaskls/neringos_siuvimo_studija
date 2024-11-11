import { Zirkles } from '../svg';
import style from './Sewing.module.css';
import { useEffect } from 'react';

const PictureSewing = () => {
    return (<picture >
        <source srcSet="images/rubu_siuvimas_700.webp" media="(max-width: 780px)" />
        <img width={900} height={1350} className={style.img} src="images/rubu_siuvimas_900.webp" alt="siuvykla šiauliuose" />
    </picture>
    )
};
export function Sewing() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='sewing' className={style.container}>
            <div><PictureSewing /></div>
            <div className={style.content}>
                <h2 className={style.h2}>Ateik su idėja, išeik su drabužiu!</h2>
                <p className={style.p}>Kiekvienas turi savo unikalų stilių, bet ne visada lengva jį rasti parduotuvėje. Čia mes įžengiame į žaidimą - siuvame pagal jūsų norus ir poreikius. Nesvarbu, ar tai būtų kostiumas su per dideliais atlapais, suknelė, kuri privers suktis galvas kiekviename žingsnyje, ar džemperis, kuriame norėtumėt praleisti visą žiemą, mes pasirūpinsime, kad tai taptų realybe.</p>
                <ul className={style.repairList}>
                    <li>Moteriškų drabužių siuvimas</li>
                    <li>Vyriškų drabužių siuvimas</li>
                    <li>Vaikiškų drabužių siuvimas</li>
                </ul>
                <div className={style.svg}><Zirkles /></div>
            </div>
        </div>
    );
}
