import style from './Sewing.module.css';
import siuvimas from '/img/skaitmenines_spaudos_audinio_suknele.jpg';

export function Sewing(){
    return (
        <div className={style.container}>
        <a className={style.alink} id="sewing" href=""><img className={style.img} src={siuvimas} alt="rubu siuvimas"/></a>
        <div className={style.content}>
            <h2 className={style.h2}>Ateik su idėja, išeik su drabužiu !</h2>
            <p className={style.p}>Kiekvienas turi savo unikalų stilių, bet ne visada lengva jį rasti parduotuvėje. Čia mes įžengiame į žaidimą - siuvame pagal jūsų norus ir poreikius. Nesvarbu, ar tai būtų kostiumas su per dideliais atlapais, suknelė, kuri privers suktis galvas kiekviename žingsnyje, ar džemperis, kuriame norėtumėt praleisti visą žiemą, mes pasirūpinsime, kad tai taptų realybe.</p>
            <ul className={style.repairList}>
                <li>Moteriškų drabužių siuvimas</li>
                <li>Vyriškų drabužių siuvimas</li>
                <li>Vaikiškų drabužių siuvimas</li>
                <li>Darbo drabužių,uniformų siuvimas</li>
            </ul>
        </div>
    </div>
    );
}
