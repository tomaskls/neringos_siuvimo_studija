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
          <img src="./img/logo.png" alt="logo" />
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
    </header>
  );
}
