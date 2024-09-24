import style from './Footer.module.css';

export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className={style.footer}>&copy; Neringos Siuvimo Studija {currentYear}</div>
    );
}