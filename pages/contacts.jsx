import { Footer } from "../src/components/footer/Footer"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { Contacts } from "../src/components/contacts/Contacts";
import { Space } from "../src/components/Space";

export function Contacting() {
  return (
    <>
        <Header />
    <main className={style.merriweatherRegular}>
      <div className={style.mainContainer}>
        <SidebarMenu />
        <Space />
        <Contacts />
        <Footer />
      </div>
    </main>
    </>
  )
}