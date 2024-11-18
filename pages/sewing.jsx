import { Footer } from "../src/components/footer/Footer"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { Sewing } from "../src/components/sewing/Sewing";
import { Design } from "../src/components/design/Design";
import { Space } from "../src/components/Space";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CanonicalUrl from "../src/components/CanonicalUrl";

export function Sew() {
  return (
    <>
      <HelmetProvider>
        <CanonicalUrl />
        <Helmet>
          <meta name="description" content="Ieškote siuvėjos Šiauliuose? Individualus suknelių, kelnių, kostiumėlių ir kitų drabužių siuvimas pagal Jūsų figūrą ir pageidavimus.Stilingi ir kokybiški drabužiai už patrauklią kainą." />
          <title>Siuvykla Šiauliuose</title>
          <meta property="og:title" content="Siuvykla Šiauliuose" />
          <meta property="og:description" content="Ieškote siuvėjos Šiauliuose? Individualus suknelių, kelnių, kostiumėlių ir kitų drabužių siuvimas pagal Jūsų figūrą ir pageidavimus.Stilingi ir kokybiški drabužiai už patrauklią kainą." />
          <meta property="og:image" content="https://www.neringos-siuvimo-studija.lt/images/rubu_siuvimas_900.webp" />
          <meta property="og:image:width" content="900" />
          <meta property="og:image:height" content="1350" />
          <meta property="og:url" content="https://www.neringos-siuvimo-studija.lt/siuvykla" />
          <meta property="og:site_name" content="Neringos Siuvimo Studija" />
          <meta property="og:type" content="website" />
        </Helmet>
        <Header />
        <main className={style.merriweatherRegular}>
          <div className={style.mainContainer}>
            <SidebarMenu />
            <Space />
            <Sewing />
            <Design />
            <Footer />
          </div>
        </main>
      </HelmetProvider>
    </>
  )
}