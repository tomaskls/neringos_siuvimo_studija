import { About } from "../about/About"
import { New } from '../new_product/New'
import { Repair } from "../repair/Repair"
import style from './Main.module.css'

export function Main() {
    return (
        <main className={style.merriweatherRegular}>
            <div className={style.mainContainer}>
                <About />
                <New />
                <Repair />


            </div>

        </main>
    )

}