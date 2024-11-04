import { Footer } from "../src/components/footer/Footer"
import { Pictures } from "../src/components/gallery/Gallery"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import { Space } from "../src/components/Space"
import { Helmet, HelmetProvider } from "react-helmet-async";

export function Gallery() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content="Neringos Siuvimo Studijos galerija: Peržiūrėkite mūsų sukurtų drabužių nuotraukas. Įkvėpkite savo stilių!" />
          <title>Galerija</title>
        </Helmet>
        <Header />
        <SidebarMenu />
        <Space />
        <Pictures />
        <Footer />
      </HelmetProvider>
    </>
  )
}