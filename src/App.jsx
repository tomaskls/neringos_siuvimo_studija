import { Gallery } from "./components/gallery/Gallery"
import { Header } from "./components/header/Header"
import { Main } from "./components/main/Main"
import { SidebarMenu } from "./components/sideMenu/SideMenu"

export function App() {
  return (
    <>
      <Header />
      <SidebarMenu />
      <Main />
      <Gallery />
    </>
  )
}

