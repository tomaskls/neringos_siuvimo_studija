import { Adata } from '../svg';
import style from './About.module.css';

export const PictureAbout = () => {
    return (<picture >
        <source srcSet="/siuvimo_studija_siauliuose_750.webp" media="(max-width: 780px)" />
        <img className={style.img} src="/siuvimo_studija_siauliuose_900.webp" alt="siuvimo studija šiauliuose" />
    </picture>
    )
};


export function About() {
    return (
        <div className={style.container}>
            <div>
                <PictureAbout />
            </div>
            <div className={style.content}>
                <h2 className={style.h2}>Apie Mus</h2>
                <p className={style.p}>Siuvimo studija, kurioje siūlai visada randa kelią namo Nuo 2007 metų esame Šiaulių siuvimo meistrai, sugebantys iš bet kokios medžiagos sukurti šedevrą. Kai mūsų studija atveria duris, siūlai pradeda dainuoti, o adatos - šokti. Ateikite ir mes jums parodysime, kaip galima prikelti net seniausią audinį naujam gyvenimui!</p>
                <div className={style.svg} ><Adata /></div>
            </div>
        </div>
    );
}