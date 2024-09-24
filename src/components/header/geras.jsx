import { useEffect, useRef } from 'react';
import styles from './Desktop.module.css';

const HeaderD = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    console.log('Title element:', title);
    if (title) {
      title.innerHTML = title.textContent.replace(/\S/g, `<span class='${styles.letter}'>$&</span>`);
      console.log('Updated title HTML:', title.innerHTML);
      
      const letters = title.querySelectorAll(`.${styles.letter}`);
      letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.2}s`;
        console.log(`Letter ${index} animation delay: ${letter.style.animationDelay}`);
      });
    }
  }, []);

  return (
    <header className={styles.header}>
      <h1 ref={titleRef} className={styles.title}>Neringos Siuvimo Studija</h1>
      <nav className={styles.nav}>
        <button className={styles.navButton}>Naujiena!!!</button>
        <button className={styles.navButton}>Taisymas</button>
        <button className={styles.navButton}>Siuvimas</button>
        <button className={styles.navButton}>Galerija</button>
        <button className={styles.navButton}>Modeliavimas</button>
        <button className={styles.navButton}>Kontaktai</button>
      </nav>
      {/* {[...Array(5)].map((_, index) => (
        <div key={index} className={styles.thread} style={{top: `${20 + index * 40}px`, animationDelay: `${index * 2}s`}} />
      ))} */}
    </header>
  );
};

// export default HeaderD;
