import { Header } from "../src/components/header/Header"
import { Main } from "../src/components/main/Main"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"

export function Home() {
  return (
    <>
      <Header />
      <SidebarMenu />
      <Main />
    </>
  )
}