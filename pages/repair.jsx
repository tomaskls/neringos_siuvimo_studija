import { Footer } from "../src/components/footer/Footer"
import { Header } from "../src/components/header/Header"
import { SidebarMenu } from "../src/components/sideMenu/SideMenu"
import style from '../src/components/main/Main.module.css';
import { Repair } from "../src/components/repair/Repair";
import { Space } from "../src/components/Space";
import { Helmet } from "react-helmet";


export function Repairing() {
  return (
    <>
    <Helmet>
    <meta name="description" content="Profesionalus drabužių taisymas ir pritaikymas - kelnių, sijonų, suknelių, švarkų, kostiumų,striukių, paltų, džinsų ir kitų drabužių trumpinimas, ilginimas, siaurinimas, pamušalo keitimas, užtrauktuko keitimas, sagų įsiuvimas, džinsų lopymas, darbo drabužių taisymas." />
    <title>Rūbų Remonto Dirbtuvės</title>
    </Helmet>
        <Header />
    <main className={style.merriweatherRegular}>
      <div className={style.mainContainer}>
        <SidebarMenu />
        <Space />
        <Repair />
        <Footer />
      </div>
    </main>
    </>
  )
}