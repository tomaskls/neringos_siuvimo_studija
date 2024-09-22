import style from './Contacts.module.css'

export function Contacts() {
    return (

        <div className={style.contactsContainer} id="kontaktai">
            <div className={style.social}>
                <a className={style.fbLink} href="https://www.facebook.com/share/yoFQcUC5cKKnLSb7/" target="_blank">Sekite mus Facebook<img src="./img/facebook_icon.png" alt="facebook icon" /></a>
                <a className={style.fbLink} href="https://www.instagram.com/neringossiuvimostudija">Instagram<img src="./img/instagram_logo.png" alt="instagram icon" /></a>
            </div>
            <div className={style.contacts}>
                <h2 >Kontaktai</h2>
                <a href="+37065073547">Skambinkite tel: +370 650 73547</a>
                <p className="">Mus rasite adresu: <br/>Vytauto g. 80 <br/>Šiauliai</p>
                    <p>Artimiausias nemokamas parkingas uz 200 metrų - rudės g.  14(maxima)</p>
                </div>
            </div>


            )
}