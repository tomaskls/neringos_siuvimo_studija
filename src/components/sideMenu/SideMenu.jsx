import { useState } from 'react';
import './SideMenu.css';

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className="sidebar-toggle">
        <MenuIcon />
      </button>

      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <button onClick={toggleMenu} className="sidebar-close">
          <CloseIcon />
        </button>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="#">Pagrindinis</a></li>
            <li><a href="#">Apie mus</a></li>
            <li><a href="#">Paslaugos</a></li>
            <li><a href="#">Kontaktai</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
