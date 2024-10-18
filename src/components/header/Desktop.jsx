import { useEffect, useRef } from 'react';
import style from './Desktop.module.css';
import { Link } from 'react-router-dom';

export const HeaderD = () => {
    const navRef = useRef(null);
    const neringosRef = useRef(null);

    useEffect(() => {
        const nav = navRef.current;
        const neringos = neringosRef.current;
    
        const handleScroll = () => {
            const navTop = nav.getBoundingClientRect().top;
            if (window.scrollY > navTop) {
                nav.classList.add(style.fixed);
                nav.classList.add(style.scrolled);
                neringos.classList.add(style.visible);
            } else {
                nav.classList.remove(style.fixed);
                nav.classList.remove(style.scrolled);
                neringos.classList.remove(style.visible);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={style.header}>
            <h1 className={style.title}>Neringos Siuvimo Studija</h1>
            <nav ref={navRef} className={style.nav}>
                <div className={style.navContent}>
                    <h2 ref={neringosRef} className={style.neringos}><a href="#about">Neringos Siuvimo Studija</a></h2>
                    <a href="#new"><button className={style.navButton}>Naujiena!!!</button></a>
                    <a href="#repair"><button className={style.navButton}>Taisymas</button></a>
                    <a href="#sewing"><button className={style.navButton}>Siuvimas</button></a>
                    <Link to="/gallery"><button className={style.navButton}>Galerija</button></Link>
                    <a href="#design"><button className={style.navButton}>Modeliavimas</button> </a>
                    <a href="#price"><button className={style.navButton}>Kainos</button> </a>
                    <a href="#contacts"><button className={style.navButton}>Kontaktai</button></a>
                </div>
            </nav>
        </header>
    );
};

