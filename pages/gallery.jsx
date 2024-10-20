import { Footer } from "../src/components/footer/Footer"
import { Pictures } from "../src/components/gallery/Gallery"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import { Space } from "../src/components/Space"

export function Gallery() {
  return (
    <>
      <Header />
      <SidebarMenu />
      <Space />
      <Pictures />
      <Footer />
    </>
  )
}