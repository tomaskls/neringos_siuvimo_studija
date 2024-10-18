import { About } from "../src/components/about/About"
import { Footer } from "../src/components/footer/Footer"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { HeaderDesktopFixed } from "../src/components/header/DesktopFixed";


export function Home() {
  return (
    <>
        <HeaderDesktopFixed />
    <main className={style.merriweatherRegular}>
      <div className={style.mainContainer}>
        <SidebarMenu />
        <About />
        <Footer />
      </div>
    </main>
    </>
  )
}