import logo from '../../assets/logo.png'
import "./Header.css";

export function Header() {
  return (
    <header>
      <nav className="desktopHeader">
        <div className="topLine">
          <div className="navTop">
            <a className="navTopLink" href="#">
              Pagrindinis
            </a>
            <a className="navTopLink" href="#">
              Galerija
            </a>
            <a className="navTopLink" href="#">
              Paslaugos
            </a>
            <a className="navTopLink" href="#">
              D.U.K.
            </a>
            <a className="navTopLink" href="#">
              Kontaktai
            </a>
          </div>
        </div>
        <div className="midleLine">
          <img src={logo} alt="logo" />
          <h2>Turite klausimu skambinkite +37065584554</h2>
        </div>
        <div className="bottomLine">
          <div className="navBottom">
            <a className="navBottomLink" href="#kolekcija">
              Naujiena !!!
            </a>
            <a className="navBottomLink" href="#">
              Modeliavimas
            </a>
            <a className="navBottomLink" href="#">
              {" "}
              Siuvimas
            </a>
            <a className="navBottomLink" href="#">
              Taisymas
            </a>
          </div>
        </div>
      </nav>
      <div className="mobileHeader">
            <a className="line1" href="+37065073547">Turite klausimu? +370 650 73547</a>
            <div className="line2">
                <img className="logo-img" src={logo} alt="logo"/>
                <h2>Neringos Siuvimo Studija</h2>
            </div>
            
        </div>
    </header>
  );
}
