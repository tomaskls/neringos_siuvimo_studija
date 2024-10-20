import { Footer } from "../src/components/footer/Footer"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { Repair } from "../src/components/repair/Repair";
import { Design } from "../src/components/design/Design";
import { Sewing } from "../src/components/sewing/Sewing";
import { New } from "../src/components/new_product/New";
import { Space } from "../src/components/Space";


export function Repairing() {
  return (
    <>
        <Header />
    <main className={style.merriweatherRegular}>
      <div className={style.mainContainer}>
        <SidebarMenu />
        <Space />
        <Repair />
        <Design />
        <Sewing />
        <New />
        <Footer />
      </div>
    </main>
    </>
  )
}