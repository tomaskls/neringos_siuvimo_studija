import { About } from "../src/components/about/About"
import { Footer } from "../src/components/footer/Footer"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { Header } from "../src/components/header/Header";
import { Space } from "../src/components/Space";
import { Services } from "../src/components/services/Services";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content="Profesionalios siuvimo paslaugos Šiauliuose. Siuvykla. Drabužių taisymas. Individualus siuvimas. Siuvimas pagal uzsakymą.Aplikacijos ant drabužių.Vienetinių lekalų konstravimas" />
          <title>Neringos Siuvimo Studija</title>
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