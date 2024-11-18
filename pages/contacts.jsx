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
          <title>Kontaktai</title>
          <meta property="og:title" content="Kontaktai" />
          <meta property="og:description" content="Mus rasite adresu: Vytauto g. 8O Šiauliai. Skambinkite tel: +370 600 55316" />
          <meta property="og:image" content="https://www.neringos-siuvimo-studija.lt/imgGallery/suknele_su_ornamentais_2.webp" />
          <meta property="og:image:width" content="900" />
          <meta property="og:image:height" content="1354" />
          <meta property="og:url" content="https://www.neringos-siuvimo-studija.lt/kontaktai" />
          <meta property="og:site_name" content="Neringos Siuvimo Studija" />
          <meta property="og:type" content="website" />
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