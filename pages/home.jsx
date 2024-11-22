import { About } from "../src/components/about/About"
import { Footer } from "../src/components/footer/Footer"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { Header } from "../src/components/header/Header";
import { Space } from "../src/components/Space";
import { Services } from "../src/components/services/Services";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CanonicalUrl from "../src/components/CanonicalUrl";

export function Home() {
  return (
    <>
      <HelmetProvider>
        <CanonicalUrl />
        <Helmet>
          <title>Neringos Siuvimo Studija</title>
          <meta name="description" content="Profesionalios siuvimo paslaugos Šiauliuose. Siuvykla. Drabužių taisymas. Individualus siuvimas.Aplikacijos ant drabužių.Vienetinių lekalų konstravimas" />
          <meta property="og:title" content="Neringos Siuvimo Studija" />
          <meta property="og:description" content="Profesionalios siuvimo paslaugos Šiauliuose. Siuvykla. Drabužių taisymas. Individualus siuvimas.Aplikacijos ant drabužių. Vienetinių lekalų konstravimas" />
          <meta property="og:image" content="https://www.neringos-siuvimo-studija.lt/neringos_siuvimo_studija.webp" />
          <meta property="og:image:width" content="900" />
          <meta property="og:image:height" content="1600" />
          <meta property="og:url" content="https://www.neringos-siuvimo-studija.lt" />
          <meta property="og:site_name" content="Neringos Siuvimo Studija" />
          <meta property="og:type" content="website" />
          <link rel="preload" href="images/siuvykla_siauliai_700.webp" as="image"/>
          <link rel="preload" href="images/siuvykla_siauliai_900.webp" as="image"/>
        </Helmet>
        <Header />
        <main className={style.merriweatherRegular}>
          <div className={style.mainContainer}>
            <SidebarMenu />
            <Space />
            <About />
            <Services />
            <Footer />
          </div>
        </main>
      </HelmetProvider>
    </>
  )
}