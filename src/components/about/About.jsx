import style from './About.module.css';
import studija from '/img/ivairios_spalvos.jpg';

export function About() {
    return (
        <div className={style.container}>
            <img className={style.img} src={studija} alt="Siuvimo studija siauliu mieste" />
            <div className={style.content}>
                <h2 className={style.h2}>Apie Mus</h2>
                <p className={style.p}>Siuvimo studija, kurioje siūlai visada randa kelią namo Nuo 2007 metų esame Šiaulių siuvimo meistrai, sugebantys iš bet kokios medžiagos sukurti šedevrą. Kai mūsų studija atveria duris, siūlai pradeda dainuoti, o adatos - šokti. Ateikite ir mes jums parodysime, kaip galima prikelti net seniausią audinį naujam gyvenimui!</p>
            </div>
        </div>
    );
}