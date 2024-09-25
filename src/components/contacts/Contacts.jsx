import style from './Contacts.module.css';
import Fbicon from '/facebook_icon.png';
import Inicon from '/instagram_logo.png';
import { useTouch } from '../Usetouch';
import { useEffect, useState } from 'react';

export function Contacts() {
    const { isTouched: isFbTouched, handleTouchStart: handleFbTouchStart, handleTouchEnd: handleFbTouchEnd } = useTouch();
    const { isTouched: isInTouched, handleTouchStart: handleInTouchStart, handleTouchEnd: handleInTouchEnd } = useTouch();
    const [iframeLoaded, setIframeLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIframeLoaded(true);
        }, 1000); // Įkelti iframe po 1 sekundės

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={style.contactsContainer} id="contacts">
            <div className={style.social}>
                <a className={`${style.fbLink} ${isFbTouched ? style.touched : ''}`}
                    href="https://www.facebook.com/share/yoFQcUC5cKKnLSb7/"
                    target="_blank"
                    onTouchStart={handleFbTouchStart}
                    onTouchEnd={handleFbTouchEnd}>Sekite mus Facebook<img src={Fbicon} alt="facebook icon" />
                </a>
                <a className={`${style.fbLink} ${isInTouched ? style.touched : ''}`}
                    href="https://www.instagram.com/neringossiuvimostudija"
                    onTouchStart={handleInTouchStart}
                    onTouchEnd={handleInTouchEnd}>Instagram<img src={Inicon} alt="instagram icon" />
                </a>
            </div>
            <div className={style.contacts}>
                <h2>Kontaktai</h2>
                <a href="tel:+37065073547">Skambinkite tel: +370 650 73547</a>
                <p>Mus rasite adresu: <br />Vytauto g. 8O <br />Šiauliai</p>
                <p>Artimiausias nemokamas parkingas už 200 metrų - rudės g. 14 (maxima)</p>
            </div>
            {iframeLoaded && (
                <iframe
                    className={style.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2235.234194280573!2d23.31294907676809!3d55.92797787848508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5e330649f95bb%3A0x37e61039db777fb7!2sNERINGOS%20SIUVIMO%20STUDIJA!5e0!3m2!1slt!2slt!4v1727020354296!5m2!1slt!2slt"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                     title="NERINGOS SIUVIMO STUDIJA žemėlapis"
                ></iframe>
            )}
        </div>
    );
}
