import style from './Repair.module.css'


export function Repair() {

    return (
        <div className={style.container}>
            <a className={style.alink} id="repair" href=""><img className={style.img} src="./img/rubu_taisymas.webp" alt="kelniu trumpinimas"/></a>
            <div className={style.content}>
                <h2>Rūbų Taisymas</h2>
                <p>Ar jūsų mėgstamiausia suknelė prarado būrį sagų? O gal madingos kelnytės tapo per ilgos? Mūsų drabužių taisymas - tai lyg stebuklų dirbtuvės jūsų spintai! Ateikite pas mus ir mes paverčiame bet kokį &quot;oops&quot; į &quot;wow&quot;!</p>
                <ul className={style.repairList}>
                    <li>Drabužių taisymas ir pritaikymas</li>
                    <li>Kelnių trumpinimas/pailginimas</li>
                    <li>Užtrauktukų keitimas</li>
                    <li>Sagų įsiuvimas</li>
                    <li>Odininų taisymas</li>
                    <li>Sijonų ir suknelių trumpinimas/pailginimas</li>
                    <li>Drabužių siaurinimas/praplatinimas</li>
                    <li>Pamušalo keitimas</li>
                    <li>Džinsų lopymas</li>
                    <li>Rankovių trumpinimas/pailginimas</li>
                    <li>Uniformų ir darbo drabužių taisymas</li>
                    <li>Proginių drabužių taisymas</li>
                    <li>Striukių ir paltų taisymas</li>
                </ul>
            </div>
        </div>
    )
}