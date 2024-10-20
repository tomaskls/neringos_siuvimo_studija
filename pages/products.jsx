import { Footer } from "../src/components/footer/Footer"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { New } from "../src/components/new_product/New";
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
        <Footer />
      </div>
    </main>
    </>
  )
}