import { Footer } from "../src/components/footer/Footer"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { Design } from "../src/components/design/Design";


export function Designing() {
  return (
    <>
        <Header />
    <main className={style.merriweatherRegular}>
      <div className={style.mainContainer}>
        <SidebarMenu />
        <Design />
        <Footer />
      </div>
    </main>
    </>
  )
}