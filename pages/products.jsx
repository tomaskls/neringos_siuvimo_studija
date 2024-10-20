import { Footer } from "../src/components/footer/Footer"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { New } from "../src/components/new_product/New";
import { Repair } from "../src/components/repair/Repair";
import { Sewing } from "../src/components/sewing/Sewing";
import { Design } from "../src/components/design/Design";
import { Space } from "../src/components/Space";


export function Product() {
  return (
    <>
        <Header />
    <main className={style.merriweatherRegular}>
      <div className={style.mainContainer}>
        <SidebarMenu />
        <Space />
        <New />
        <Repair />
        <Design />
        <Sewing />
        <Footer />
      </div>
    </main>
    </>
  )
}