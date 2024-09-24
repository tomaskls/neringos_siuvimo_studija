import { useEffect, useRef } from 'react';
import styles from './Desktop.module.css';

const HeaderD = () => {
    const titleRef = useRef(null);
    const navRef = useRef(null);
    const neringosRef = useRef(null);

    useEffect(() => {
        const title = titleRef.current;
        const nav = navRef.current;
        const neringos = neringosRef.current;

        if (title) {
            title.innerHTML = title.textContent.replace(/\S/g, `<span class='${styles.letter}'>$&</span>`);
            const letters = title.querySelectorAll(`.${styles.letter}`);
            letters.forEach((letter, index) => {
                letter.style.animationDelay = `${index * 0.2}s`;
            });
        }

        const handleScroll = () => {
            const navTop = nav.getBoundingClientRect().top;
            if (window.scrollY > navTop) {
                nav.classList.add(styles.fixed);
                nav.classList.add(styles.scrolled);
                neringos.classList.add(styles.visible);
            } else {
                nav.classList.remove(styles.fixed);
                nav.classList.remove(styles.scrolled);
                neringos.classList.remove(styles.visible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={styles.header}>
            <h1 ref={titleRef} className={styles.title}>Neringos Siuvimo Studija</h1>
            <nav ref={navRef} className={styles.nav}>
                <div className={styles.navContent}>
                    <button className={styles.navButton}>Naujiena!!!</button>
                    <button className={styles.navButton}>Taisymas</button>
                    <button className={styles.navButton}>Siuvimas</button>
                    <button className={styles.navButton}>Galerija</button>
                    <button className={styles.navButton}>Modeliavimas</button>
                    <button className={styles.navButton}>Kontaktai</button>
                    <h2 ref={neringosRef} className={styles.neringos}>Neringos Siuvimo Studija</h2>
                </div>
            </nav>
        </header>
    );
};

export default HeaderD;