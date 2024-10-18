import { useEffect, useRef } from 'react';
import style from './DesktopFixed.module.css';
import { Link } from 'react-router-dom';

export const HeaderD = () => {
    const headerRef = useRef(null);

    useEffect(() => {
        const header = headerRef.current;
        const headerHeight = header.offsetHeight;
    
        const handleScroll = () => {
            if (window.scrollY > headerHeight) {
                header.classList.add(style.fixed);
            } else {
                header.classList.remove(style.fixed);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header ref={headerRef} className={style.header}>
            <h1 className={style.title}>Neringos Siuvimo Studija</h1>
            <nav className={style.nav}>
                <div className={style.navContent}>
                    <Link to="/"><button className={style.navButton}>Pagrindinis</button></Link>
                    <Link to="/product"><button className={style.navButton}>Naujiena!</button></Link>
                    <Link to="/repair"><button className={style.navButton}>Taisymas</button></Link>
                    <Link to="/sewing"><button className={style.navButton}>Siuvimas</button></Link>
                    <Link to="/gallery"><button className={style.navButton}>Galerija</button></Link>
                    <Link to="/design"><button className={style.navButton}>Modeliavimas</button></Link>
                    <Link to="/prices"><button className={style.navButton}>Kainos</button></Link>
                    <Link to="/contacts"><button className={style.navButton}>Kontaktai</button></Link>
                </div>
            </nav>
        </header>
    );
};