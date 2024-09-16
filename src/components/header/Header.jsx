import logo from '../../assets/logo.png'
import style from './Header.module.css';

export function Header() {
  return (
    <header className={style.merriweatherRegular}>
        <nav className={style.desktopHeader}>
        <div className={style.topLine}>
          <div className={style.navTop}>
            <a className={style.navTopLink} href="#">
              Pagrindinis
            </a>
            <a className={style.navTopLink} href="#">
              Galerija
            </a>
            <a className={style.navTopLink} href="#">
              Paslaugos
            </a>
            <a className={style.navTopLink} href="#">
              D.U.K.
            </a>
            <a className={style.navTopLink} href="#">
              Kontaktai
            </a>
          </div>
        </div>
        <div className={style.midleLine}>
          <img src={logo} alt="logo" />
          <h2>Turite klausimu skambinkite +37065584554</h2>
        </div>
        <div className={style.bottomLine}>
        <div className={style.navBottom}>
            <a className={style.navBottomLink} href="#kolekcija">
              Naujiena !!!
            </a>
            <a className={style.navBottomLink} href="#">
              Modeliavimas
            </a>
            <a className={style.navBottomLink} href="#">
              {" "}
              Siuvimas
            </a>
            <a className={style.navBottomLink} href="#">
              Taisymas
            </a>
          </div>
        </div>
      </nav>
      <div className={style.mobileHeader}>
            <a className={style.line1} href="+37065073547">Turite klausimu? +370 650 73547</a>
            <div className={style.line2}>
                <img className={style.logoImg} src={logo} alt="logo"/>
                <h2>Neringos Siuvimo Studija</h2>
            </div>
            
        </div>
    </header>
  );
}
