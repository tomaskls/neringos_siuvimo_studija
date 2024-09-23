import { useState, useEffect, useRef } from 'react';
import style from './SideMenu.module.css';
import { Link } from 'react-router-dom';


const MenuIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
);

const CloseIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path></svg>
);

const Scissors = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M12 13.4108L9.44618 15.9646C9.79807 16.5601 10 17.2548 10 17.9966C10 20.2057 8.20914 21.9966 6 21.9966C3.79086 21.9966 2 20.2057 2 17.9966C2 15.7874 3.79086 13.9966 6 13.9966C6.74181 13.9966 7.43645 14.1985 8.03197 14.5504L10.5858 11.9966L4.56497 5.97577C3.78392 5.19472 3.78392 3.92839 4.56497 3.14734L12 10.5824L19.435 3.14734C20.2161 3.92839 20.2161 5.19472 19.435 5.97577L13.4142 11.9966L15.968 14.5504C16.5635 14.1985 17.2582 13.9966 18 13.9966C20.2091 13.9966 22 15.7874 22 17.9966C22 20.2057 20.2091 21.9966 18 21.9966C15.7909 21.9966 14 20.2057 14 17.9966C14 17.2548 14.2019 16.5601 14.5538 15.9646L12 13.4108ZM6 19.9966C7.10457 19.9966 8 19.1012 8 17.9966C8 16.892 7.10457 15.9966 6 15.9966C4.89543 15.9966 4 16.892 4 17.9966C4 19.1012 4.89543 19.9966 6 19.9966ZM18 19.9966C19.1046 19.9966 20 19.1012 20 17.9966C20 16.892 19.1046 15.9966 18 15.9966C16.8954 15.9966 16 16.892 16 17.9966C16 19.1012 16.8954 19.9966 18 19.9966Z"></path></svg>
);

export const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <div className={style.sideMenu}>
      {!isOpen && (
        <button onClick={toggleMenu} className={style.sidebarToggle}>
          <MenuIcon />
        </button>
      )}

      <div ref={sidebarRef} className={`${style.sidebar} ${isOpen ? style.open : ''}`}>
        <button onClick={closeMenu} className={style.sidebarClose}>
          <CloseIcon />
        </button>
        <nav className={style.sidebarNav}>
          <ul>
            <li>
              <Scissors />
              <a href="#about" onClick={closeMenu}>Pagrindinis</a></li>
            <li>
              <Scissors />
              <a href="#new" onClick={closeMenu}>Naujiena!!!</a></li>
            <li>
              <Scissors />
              <a href="#repair" onClick={closeMenu}>Taisymas</a></li>
            <li>
              <Scissors />
              <a href="#sewing" onClick={closeMenu}>Siuvimas</a></li>
            <li>
              <Scissors />
              <a href="#design" onClick={closeMenu}>Modeliavimas</a></li>
            <li className={style.liGallery}>
              <Scissors />
              <Link to="/gallery">
                <span onClick={closeMenu}>Galerija</span>
              </Link>
            </li>
            <li>
              <Scissors />
              <a href="#kontaktai" onClick={closeMenu}>Kontaktai</a></li>
          </ul>
        </nav>
      </div>
      {isOpen && <div className={style.dimmer} onClick={closeMenu}></div>}
    </div>
  );
};