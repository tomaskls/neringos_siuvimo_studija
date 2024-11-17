import { Footer } from "../src/components/footer/Footer"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { Repair } from "../src/components/repair/Repair";
import { Space } from "../src/components/Space";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function Repairing() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content="Profesionalus drabužių taisymas  Šiauliuose.Trumpiname, ilginame, siauriname, keičiame užtrauktukus ir atliekame kitus remonto darbus. Užsukite ir suteikite savo drabužiams antrą gyvenimą!"/>
          <title>Rūbų Remonto Dirbtuvės</title>
          <meta property="og:title" content="Rūbų Remonto Dirbtuvės" />
          <meta property="og:description" content="Profesionalus drabužių taisymas  Šiauliuose.Trumpiname, ilginame, siauriname, keičiame užtrauktukus ir atliekame kitus remonto darbus. Užsukite ir suteikite savo drabužiams antrą gyvenimą!" />
          <meta property="og:image" content="https://www.neringos-siuvimo-studija.lt/images/rubu_taisymas_900.webp" />
          <meta property="og:image:width" content="900" />
          <meta property="og:image:height" content="1350" />
          <meta property="og:url" content="https://www.neringos-siuvimo-studija.lt/drabuziu-taisymas" />
          <meta property="og:site_name" content="Neringos Siuvimo Studija" />
          <meta property="og:type" content="local.business" />
        </Helmet>
        <Header />
        <main className={style.merriweatherRegular}>
          <div className={style.mainContainer}>
            <SidebarMenu />
            <Space />
            <Repair />
            <Footer />
          </div>
        </main>
      </HelmetProvider>
    </>
  )
}