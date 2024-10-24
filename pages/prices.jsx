import { Footer } from "../src/components/footer/Footer"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { Price } from "../src/components/price/Price";
import { Space } from "../src/components/Space";


export function Pricing() {
  return (
    <>
        <Header />
    <main className={style.merriweatherRegular}>
      <div className={style.mainContainer}>
        <SidebarMenu />
        <Space />
        <Price />
        <Footer />
      </div>
    </main>
    </>
  )
}