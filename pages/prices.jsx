import { Footer } from "../src/components/footer/Footer"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { Price } from "../src/components/price/Price";
import { Space } from "../src/components/Space";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function Pricing() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content="Greitas ir profesionalus drabužių taisymas Šiauliuose. Kelnių palenkimas, užtrauktukų keitimas, siuvimas ir taisymas - konkurencingomis kainomis. Peržiūrėkite mūsų kainoraštį!" />
          <title>Drabužių taisymo kainos Šiauliuose</title>
          <meta property="og:title" content="Drabužių taisymo kainos Šiauliuose" />
          <meta property="og:description" content="Greitas ir profesionalus drabužių taisymas Šiauliuose. Kelnių palenkimas, užtrauktukų keitimas, siuvimas ir taisymas - konkurencingomis kainomis. Peržiūrėkite mūsų kainoraštį!" />
          <meta property="og:image" content="https://www.neringos-siuvimo-studija.lt/imgGallery/pakabos.webp" />
          <meta property="og:image:width" content="1800" />
          <meta property="og:image:height" content="1200" />
          <meta property="og:url" content="https://www.neringos-siuvimo-studija.lt/drabuziu-taisymo-kainos" />
          <meta property="og:site_name" content="Neringos Siuvimo Studija" />
          <meta property="og:type" content="website" />
        </Helmet>
        <Header />
        <main className={style.merriweatherRegular}>
          <div className={style.mainContainer}>
            <SidebarMenu />
            <Space />
            <Price />
            <Footer />
          </div>
        </main>
      </HelmetProvider>
    </>
  )
}