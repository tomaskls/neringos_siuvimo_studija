import style from './About.module.css'
import studija from '../../assets/img/studija.png'

export function About() {
    return (
        <div className={style.container}>
            <a className={style.alink} href=""><img className={style.img} src={studija} alt="Siuvimo studija siauliu mieste" /></a>
            <div className={style.contentAbout}>
                <h2>Apie Mus</h2>
                <p>Siuvimo studija, kurioje siūlai visada randa kelią namo Nuo 2007 metų esame Šiaulių siuvimo meistrai, sugebantys iš bet kokios medžiagos sukurti šedevrą. Kai mūsų studija atveria duris, siūlai pradeda dainuoti, o adatos - šokti. Ateikite ir mes jums parodysime, kaip galima prikelti net seniausią audinį naujam gyvenimui!</p>
            </div>
        </div>
    )
}