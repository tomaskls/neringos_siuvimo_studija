import { Footer } from "../src/components/footer/Footer"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { Space } from "../src/components/Space";
import { NewProduct } from "../src/components/new_product/Newproduct";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function Product() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content="Sušilkite stilingai su unikaliais, pagal užsakymą siuvamais flisiniais džemperiais Šiauliuose! Rinkitės iš plataus vyriškų ir moteriškų modelių asortimento, pritaikykite dydį, spalvą ir detales. Užsisakykite ir mėgaukitės šiluma!" />
          <title>Neringos Siuvimo Studija Džemperiai</title>
        </Helmet>
        <Header />
        <main className={style.merriweatherRegular}>
          <div className={style.mainContainer}>
            <SidebarMenu />
            <Space />
            <NewProduct />
            <Footer />
          </div>
        </main>
      </HelmetProvider>
    </>
  )
}