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
          <meta name="description" content="Sušilkite stilingai su unikaliais, pagal užsakymą siuvamais flisiniais džemperiais Šiauliuose! Rinkitės ir pritaikykite dydį, spalvą ir detales. Užsisakykite ir mėgaukitės šiluma!" />
          <title>Šilti flisiniai džemperiai</title>
          <meta property="og:title" content="Šilti flisiniai džemperiai" />
          <meta property="og:description" content="Sušilkite stilingai su unikaliais, pagal užsakymą siuvamais flisiniais džemperiais Šiauliuose! Rinkitės ir pritaikykite dydį, spalvą ir detales. Užsisakykite ir mėgaukitės šiluma!" />
          <meta property="og:image" content="https://www.neringos-siuvimo-studija.lt/imgGallery/moteriskas_flisinis_dzemperis.webp" />
          <meta property="og:image:width" content="896" />
          <meta property="og:image:height" content="1346" />
          <meta property="og:url" content="https://www.neringos-siuvimo-studija.lt/product" />
          <meta property="og:site_name" content="Neringos Siuvimo Studija" />
          <meta property="og:type" content="product" />
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