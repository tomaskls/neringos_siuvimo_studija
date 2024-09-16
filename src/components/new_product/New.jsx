import style from './New.module.css'
import dzemperis from '../../../img/flisinis_dzemperis.webp'

export function New() {
    return (
        <div className={style.container}>
            <a className={style.alink} id="new" href=""><img className={style.img} src={dzemperis} alt="ranku darbo flisiniai dzemperiai"/></a>
            <div className={style.contentNewItems}>
                <h2 className={style.h2}>Norvegiški kalnai įkvėpė šildyti lietuviškas širdis</h2>
                <p className={style.p}>Po kelionių per ledinius Norvegijos kalnus supratome, kad yra vienas dalykas, kurio lietuviams tikrai trūksta - flisinio jaukumo, kuris būtų nepamainomas drėgnomis ir vėsiomis dienomis. Grįžę namo, nusprendėme pasidalinti savo atradimu ir pradėjome gaminti flisinius džemperius, kurie yra tokie šilti, kad net pingvinai pavydėtų. Dar geriau - mes leidžiame jums tapti savo džemperio dizaineriu! Galite rinktis dydį, spalvą ir netgi pritaikyti detales pagal savo norus – nuo kišenių vietos iki užtrauktuko dydžio. Dabar jūs galite jaustis kaip tikri vikingai, bet su daugiau jaukumo ir visiškai individualizuotu stiliumi!</p>
                <p className={style.p}>Pavyzdžius rasite galerijoje <a className={style.linkGallery} href="./galerija.html">Galerijoje</a></p>
            </div>
        </div>
    )
}