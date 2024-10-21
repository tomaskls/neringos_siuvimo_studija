import logo from '../../assets/logo.webp';
import style from './Mobile.module.css';

export function HeaderMobile() {
  return (
    <div className={style.mobileHeader}>
      <div className={style.sticky}>
        <a className={style.line1} href="tel:+37060055316">Turite klausimu? +370 600 55316</a>
        <div className={style.line2}>
          <img className={style.logoImg} src={logo} alt="logo" />
          <h2>Neringos Siuvimo Studija</h2>
          <svg className={style.icon} stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 512 512" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
        </div>
      </div>
    </div>
  );
}
