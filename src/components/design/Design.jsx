import style from './Design.module.css'
import Modeliavimas from '/img/rubu_eskizai.webp'

export function Design() {
    return(
        <div className={style.container}>
                    <a className={style.alink} id="design" href=""><img className={style.img} src={Modeliavimas} alt="rubu modeliavimas"/></a>
                    <div className={style.content}>
                        <h2 className={style.h2}>Modeliavimas</h2>
                        <h2 className={style.h2}>Išskirtiniai Drabužiai Jums</h2>
                        <p className={style.p}>„Nuo idėjos iki podiumo - mūsų modeliavimo paslaugos jūsų sėkmei!“ Ieškote tobulo drabužio, bet nerandate jo parduotuvėje? Laikas sukurti jį patiems! Mūsų modeliavimo paslauga leis jums realizuoti savo kūrybines vizijas ir sukurti drabužį, kuris bus unikalus, stilingas ir puikiai pritaikytas būtent jums.</p>
                    </div>
                </div>
    )
}