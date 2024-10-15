import { Siulai } from '../svg';
import style from './Design.module.css';

const PictureSewing = () => {
    return (<picture >
        <source srcSet="/design_750.webp" media="(max-width: 780px)" />
        <img className={style.img} src="/design_900.webp" alt="moterisku rubu siuvimas" />
    </picture>
    )
};

export function Design() {
    return (
        <div id='design' className={style.container}>
            <div><PictureSewing /></div>
            <div className={style.content}>
                <h2 className={style.h2}>Modeliavimas Išskirtiniai Drabužiai Jums</h2>
                <p className={style.p}>„Nuo idėjos iki podiumo - mūsų modeliavimo paslaugos jūsų sėkmei!“ Ieškote tobulo drabužio, bet nerandate jo parduotuvėje? Laikas sukurti jį patiems! Mūsų modeliavimo paslauga leis jums realizuoti savo kūrybines vizijas ir sukurti drabužį, kuris bus unikalus, stilingas ir puikiai pritaikytas būtent jums.</p>
                <div className={style.svg} ><Siulai /></div>            
            </div>
        </div>
    );
}