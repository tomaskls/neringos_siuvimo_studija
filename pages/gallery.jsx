import { Footer } from "../src/components/footer/Footer"
import { Pictures } from "../src/components/gallery/Gallery"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"

export function Gallery() {
  return (
    <>
    <Header />
    <SidebarMenu />
     <Pictures />
     <Footer />
    </>
  )
}