import { Footer } from "../src/components/footer/Footer"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { Price } from "../src/components/price/Price";
import { Space } from "../src/components/Space";
import { Helmet } from "react-helmet";


export function Pricing() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Drabužių taisymo kainos - kelnių palenkimas, džinsų palenkimas, užtrauktukų keitimas, trumpinimas, ilginimas, siaurinimas, pamušalo keitimas: Konkrečios paslaugos, kad klientai greičiau rastų reikiamą informaciją." />
        <title>Drabužių taisymo kainos Šiauliuose</title>
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
    </>
  )
}