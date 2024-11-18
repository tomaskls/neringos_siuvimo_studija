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
          <title>Neringos Siuvimo Studijos Galerija</title>
          <meta property="og:title" content="Neringos Siuvimo Studijos Galerija" />
          <meta property="og:description" content="Neringos Siuvimo Studijos galerija: Peržiūrėkite mūsų sukurtų drabužių nuotraukas. Įkvėpkite savo stilių!" />
          <meta property="og:image" content="https://www.neringos-siuvimo-studija.lt/imgGallery/medvilninis_laisvalaikio_bliuzonas.webp" />
          <meta property="og:image:width" content="900" />
          <meta property="og:image:height" content="1200" />
          <meta property="og:url" content="https://www.neringos-siuvimo-studija.lt/gallery" />
          <meta property="og:site_name" content="Neringos Siuvimo Studija" />
          <meta property="og:type" content="website" />
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