import { useEffect, useRef } from 'react';
import styles from './Desktop.module.css';

const HeaderD = () => {
    const titleRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        const title = titleRef.current;
        const nav = navRef.current;

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
            } else {
                nav.classList.remove(styles.fixed);
                nav.classList.remove(styles.scrolled);
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
                <button className={styles.navButton}>Naujiena!!!</button>
                <button className={styles.navButton}>Taisymas</button>
                <button className={styles.navButton}>Siuvimas</button>
                <button className={styles.navButton}>Galerija</button>
                <button className={styles.navButton}>Modeliavimas</button>
                <button className={styles.navButton}>Kontaktai</button>
            </nav>
            {[...Array(7)].map((_, index) => (
                <div key={index} className={styles.needle} style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${index * 2}s` }} />
            ))}
        </header>
    );
};

export default HeaderD;
