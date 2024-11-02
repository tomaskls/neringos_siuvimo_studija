import { Footer } from "../src/components/footer/Footer"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { Contacts } from "../src/components/contacts/Contacts";
import { Space } from "../src/components/Space";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function Contacting() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content="Mus rasite adresu: Vytauto g. 8O Šiauliai. Skambinkite tel: +370 600 55316 " />
          <title>Neringos Siuvimo Studija - Kontaktai</title>
        </Helmet>
        <Header />
        <main className={style.merriweatherRegular}>
          <div className={style.mainContainer}>
            <SidebarMenu />
            <Space />
            <Contacts />
            <Footer />
          </div>
        </main>
      </HelmetProvider>
    </>
  )
}