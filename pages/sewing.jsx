import { Footer } from "../src/components/footer/Footer"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { Sewing } from "../src/components/sewing/Sewing";


export function Sew() {
  return (
    <>
        <Header />
    <main className={style.merriweatherRegular}>
      <div className={style.mainContainer}>
        <SidebarMenu />
        <Sewing />
        <Footer />
      </div>
    </main>
    </>
  )
}