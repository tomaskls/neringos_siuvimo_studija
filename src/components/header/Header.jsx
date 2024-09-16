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
        <div className={style.sticky}>
          <a className={style.line1} href="+37065073547">Turite klausimu? +370 650 73547</a>
          <div className={style.line2}>
            <img className={style.logoImg} src={logo} alt="logo" />
            <h2>Neringos Siuvimo Studija</h2>
            <svg className={style.icon} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>

          </div>
        </div>
      </div>
    </header>
  );
}
