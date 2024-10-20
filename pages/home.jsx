import { About } from "../src/components/about/About"
import { Footer } from "../src/components/footer/Footer"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { Repair } from "../src/components/repair/Repair";
import { Sewing } from "../src/components/sewing/Sewing";
import { New } from "../src/components/new_product/New";
import { Header } from "../src/components/header/Header";
import { Space } from "../src/components/Space";


export function Home() {
  return (
    <>
        <Header />
    <main className={style.merriweatherRegular}>
      <div className={style.mainContainer}>
        <SidebarMenu />
        <Space />
        <About />
        <Repair />
        <New />
        <Sewing />
        <Footer />
      </div>
    </main>
    </>
  )
}