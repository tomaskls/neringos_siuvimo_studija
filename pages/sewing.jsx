import { Footer } from "../src/components/footer/Footer"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { Sewing } from "../src/components/sewing/Sewing";
import { Design } from "../src/components/design/Design";
import { Space } from "../src/components/Space";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function Sew() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content="Ieškote siuvėjos Šiauliuose? Individualus suknelių, kelnių, kostiumėlių ir kitų drabužių siuvimas pagal Jūsų figūrą ir pageidavimus.Stilingi ir kokybiški drabužiai už patrauklią kainą." />
          <title>Siuvykla Šiauliuose</title>
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