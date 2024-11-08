import style from './Contacts.module.css';
import { useEffect } from 'react';
import { FbLink, InLink, PinLink } from './SocialLinks';

const PictureCoffee = () => {
    return (<picture >
        <source srcSet="/kava_700.webp" media="(max-width: 780px)" />
        <img width={900} height={1136} className={style.img} src="/kava_900.webp" alt="kavos pertraukele" />
    </picture>
    )
};
export function Contacts() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={style.contactsContainer} id="contacts">
            <div className={style.mainContainer}>
                <div className={style.social}>
                    <FbLink />
                    <InLink />
                    <PinLink />
                </div>
                <div className={style.contacts}>
                    <h2>Kontaktai</h2>
                    <a href="tel:+37060055316">Skambinkite tel: +370 600 55316</a>
                    <p>Mus rasite adresu: <br />Vytauto g. 8O <br />Šiauliai</p>
                    <p>Planuojate apsilankyti? Mums būtų malonu, jei prieš tai paskambintumėte.<br/>Taip galėsime užtikrinti, kad Jums nereikės laukti.</p>
                </div>
            </div>
            <div className={style.hours}>
                <h3>Darbo laikas</h3>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th>Diena</th>
                            <th>Laikas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pirmadienis</td>
                            <td>9:00 - 18:00</td>
                        </tr>
                        <tr>
                            <td>Trečiadienis</td>
                            <td>9:00 - 18:00</td>
                        </tr>
                        <tr>
                            <td>Penktadienis</td>
                            <td>9:00 - 18:00</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={style.img}>
                <PictureCoffee />
            </div>
            <p className={style.parking}>Artimiausias nemokamas parkingas už 200 metrų - Rūdės g. 14 (Maxima)</p>
            <iframe
                className={style.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2235.234194280573!2d23.31294907676809!3d55.92797787848508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5e330649f95bb%3A0x37e61039db777fb7!2sNERINGOS%20SIUVIMO%20STUDIJA!5e0!3m2!1slt!2slt!4v1727020354296!5m2!1slt!2slt"
                width={600}
                height={400}
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                loading='lazy'
                title="NERINGOS SIUVIMO STUDIJA žemėlapis"
            ></iframe>
        </div>
    );
}
