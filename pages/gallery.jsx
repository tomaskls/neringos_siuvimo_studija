import { Helmet } from "react-helmet"
import { Footer } from "../src/components/footer/Footer"
import { Pictures } from "../src/components/gallery/Gallery"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import { Space } from "../src/components/Space"

export function Gallery() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Neringos Siuvimo Studijos galerija: Peržiūrėkite mūsų sukurtų drabužių nuotraukas. Įkvėpkite savo stilių!" />
        <title>Neringos Siuvimo Studija - Galerija</title>
      </Helmet>
      <Header />
      <SidebarMenu />
      <Space />
      <Pictures />
      <Footer />
    </>
  )
}