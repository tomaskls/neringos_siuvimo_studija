import { About } from "../about/About"
import { Design } from "../design/Design"
import { New } from '../new_product/New'
import { Repair } from "../repair/Repair"
import { Sewing } from "../sewing/Sewing"
import style from './Main.module.css'

export function Main() {
    return (
        <main className={style.merriweatherRegular}>
            <div className={style.mainContainer}>
                <About />
                <New />
                <Repair />
                <Sewing />
                <Design />
            </div>

        </main>
    )

}