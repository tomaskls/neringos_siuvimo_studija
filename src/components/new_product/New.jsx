import style from './New.module.css'
import { Link } from 'react-router-dom';
import dzemperis from '/img/siltas_flisinis_dzemperis.jpg'
const Arrow = () => ( 
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z"></path></svg>

);
export function New() {
    return (
        <div className={style.container}>
            <a className={style.alink} id="new" href=""><img className={style.img} src={dzemperis} alt="ranku darbo flisiniai dzemperiai"/></a>
            <div className={style.contentNewItems}>
                <h2 className={style.h2}>Norvegiški kalnai įkvėpė šildyti lietuviškas širdis</h2>
                <p className={style.p}>Po kelionių per ledinius Norvegijos kalnus supratome, kad yra vienas dalykas, kurio lietuviams tikrai trūksta - flisinio jaukumo, kuris būtų nepamainomas drėgnomis ir vėsiomis dienomis. Grįžę namo, nusprendėme pasidalinti savo atradimu ir pradėjome gaminti flisinius džemperius, kurie yra tokie šilti, kad net pingvinai pavydėtų. Dar geriau - mes leidžiame jums tapti savo džemperio dizaineriu! Galite rinktis dydį, spalvą ir netgi pritaikyti detales pagal savo norus – nuo kišenių vietos iki užtrauktuko dydžio. Dabar jūs galite jaustis kaip tikri vikingai, bet su daugiau jaukumo ir visiškai individualizuotu stiliumi!</p>
                <p className={style.p}>Pavyzdžius rasite  <Link className={style.plink} to="/gallery">Galerijoje<Arrow /><Arrow /><Arrow /></Link></p>
                
            </div>
        </div>
    )
}