import { HeaderDesktopFixed } from './DesktopFixed.jsx';
import style from './Header.module.css';
import { HeaderMobile } from './Mobile.jsx';

export function Header() {
  return (
    <header className={style.merriweatherRegular}>
      <div className={style.desktopHeader}>
        <HeaderDesktopFixed />
      </div>
      <div className={style.mobileHeader}>
        <HeaderMobile />
      </div>
    </header >
  );
}
