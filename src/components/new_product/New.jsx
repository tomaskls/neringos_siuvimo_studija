import style from './New.module.css';
import { Link } from 'react-router-dom';
import dzemperis from '/img/siltas_flisinis_dzemperis.jpg';
import { useTouch } from '../Usetouch';

export function New() {
    const { isTouched, handleTouchStart, handleTouchEnd } = useTouch();

    return (
        <div id='new' className={style.container}>
            <img className={style.img} src={dzemperis} alt="ranku darbo flisiniai dzemperiai" />
            <div className={style.contentNewItems}>
                <h2 className={style.h2}>Norvegiški kalnai įkvėpė šildyti lietuviškas širdis</h2>
                <p className={style.p}>Po kelionių per ledinius Norvegijos kalnus supratome, kad yra vienas dalykas, kurio lietuviams tikrai trūksta - flisinio jaukumo, kuris būtų nepamainomas drėgnomis ir vėsiomis dienomis. Grįžę namo, nusprendėme pasidalinti savo atradimu ir pradėjome gaminti flisinius džemperius, kurie yra tokie šilti, kad net pingvinai pavydėtų. Dar geriau - mes leidžiame jums tapti savo džemperio dizaineriu! Galite rinktis dydį, spalvą ir netgi pritaikyti detales pagal savo norus – nuo kišenių vietos iki užtrauktuko dydžio!</p>
                <p className={style.p}>
                    Pavyzdžius rasite :
                    <Link
                        className={`${style.plink} ${isTouched ? style.touched : ''}`}
                        to="/gallery"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        Galerijoje
                    </Link>
                </p>
            </div>
        </div>
    );
}
