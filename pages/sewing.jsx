import { Footer } from "../src/components/footer/Footer"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { Sewing } from "../src/components/sewing/Sewing";
import { Design } from "../src/components/design/Design";
import { Repair } from "../src/components/repair/Repair";


export function Sew() {
  return (
    <>
        <Header />
    <main className={style.merriweatherRegular}>
      <div className={style.mainContainer}>
        <SidebarMenu />
        <Sewing />
        <Design />
        <Repair />
        <Footer />
      </div>
    </main>
    </>
  )
}