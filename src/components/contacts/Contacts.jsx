import style from './Contacts.module.css';
import Fbicon from '/facebook_icon.png';
import Inicon from '/instagram_logo.webp';
import { useTouch } from '../Usetouch';
import { useState, useEffect, useRef } from 'react';

export function Contacts() {
    const { isTouched: isFbTouched, handleTouchStart: handleFbTouchStart, handleTouchEnd: handleFbTouchEnd } = useTouch();
    const { isTouched: isInTouched, handleTouchStart: handleInTouchStart, handleTouchEnd: handleInTouchEnd } = useTouch();
    const [mapLoaded, setMapLoaded] = useState(false);
    const mapRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setMapLoaded(true);
                observer.disconnect(); // Stop observing once the map is loaded
            }
        });

        if (mapRef.current) {
            observer.observe(mapRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect(); // Clean up on unmount
            }
        };
    }, []);

    return (
        <div className={style.contactsContainer} id="contacts">
            <div className={style.mainContainer}>
                <div className={style.social}>
                    <a className={`${style.fbLink} ${isFbTouched ? style.touched : ''}`}
                        href="https://www.facebook.com/neringossiuvimostudija"
                        target="_blank"
                        onTouchStart={handleFbTouchStart}
                        onTouchEnd={handleFbTouchEnd}>Sekite mus Facebook<img src={Fbicon} alt="facebook icon" />
                    </a>
                    <a className={`${style.fbLink} ${isInTouched ? style.touched : ''}`}
                        href="https://www.instagram.com/neringossiuvimostudija"
                        target="_blank"
                        onTouchStart={handleInTouchStart}
                        onTouchEnd={handleInTouchEnd}>Instagram<img src={Inicon} alt="instagram icon" />
                    </a>
                </div>
                <div className={style.contacts}>
                    <h2>Kontaktai</h2>
                    <a href="tel:+37060055316">Skambinkite tel: +370 600 55316</a>
                    <p>Mus rasite adresu: <br />Vytauto g. 8O <br />Šiauliai</p>
                    <p>Artimiausias nemokamas parkingas už 200 metrų - Rūdės g. 14 (Maxima)</p>
                </div>
            </div>
            <div ref={mapRef} style={{ width: '600px', height: '450px' }}> {/* Added width/height and ref */}
                {mapLoaded && (
                    <iframe
                        className={style.map}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2235.234194280573!2d23.31294907676809!3d55.92797787848508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5e330649f95bb%3A0x37e61039db777fb7!2sNERINGOS%20SIUVIMO%20STUDIJA!5e0!3m2!1slt!2slt!4v1727020354296!5m2!1slt!2slt"
                        width="100%" // Changed to 100%
                        height="100%" // Changed to 100%
                        style={{ border: 0 }}
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        title="NERINGOS SIUVIMO STUDIJA žemėlapis"
                        loading="lazy"
                    ></iframe>
                )}
                {!mapLoaded && (
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#eee' }}>
                        Loading map...
                    </div>
                )}
            </div>
        </div>
    );
}