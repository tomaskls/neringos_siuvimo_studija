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
                    <h2 ref={neringosRef} className={style.neringos}>Neringos Siuvimo Studija</h2>
                    <Link to="/" className={style.link} ><button className={style.navButton}>Studija</button></Link>
                    <Link to="/flisiniai-dzemperiai"><button className={style.navButton}>Džemperiai</button></Link>
                    <Link to="/drabuziu-taisymas"><button className={style.navButton}>Taisymas</button></Link>
                    <Link to="/siuvykla"><button className={style.navButton}>Siuvimas</button></Link>
                    <Link to="/gallery"><button className={style.navButton}>Galerija</button></Link>
                    {/* <Link to="/design"><button className={style.navButton}>Pavyzdziai</button></Link> */}
                    <Link to="/drabuziu-taisymo-kainos"><button className={style.navButton}>Kainos</button></Link>
                    <Link to="/kontaktai"><button className={style.navButton}>Kontaktai</button></Link>
                </div>
            </nav>
        </header>
    );
};

