import { useState, useEffect, useRef } from 'react';
import './sideMenu.css';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
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
    // Pridedame arba pašaliname 'no-scroll' klasę prie body elemento
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Išvalome efektą, kai komponentas išmontuojamas
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <div>
      {!isOpen && (
        <button onClick={toggleMenu} className="sidebar-toggle">
          <MenuIcon />
        </button>
      )}

      <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button onClick={closeMenu} className="sidebar-close">
          <CloseIcon />
        </button>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="#" onClick={closeMenu}>Pagrindinis</a></li>
            <li><a href="#" onClick={closeMenu}>Apie mus</a></li>
            <li><a href="#" onClick={closeMenu}>Paslaugos</a></li>
            <li><a href="#" onClick={closeMenu}>Kontaktai</a></li>
          </ul>
        </nav>
      </div>
      {isOpen && <div className="dimmer" onClick={closeMenu}></div>}
    </div>
  );
};