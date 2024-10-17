import { About } from "../about/About";
import { Contacts } from "../contacts/Contacts";
import { Design } from "../design/Design";
import { Footer } from "../footer/Footer";
import { New } from '../new_product/New';
import { Price } from "../price/Price";
import { Repair } from "../repair/Repair";
import { Sewing } from "../sewing/Sewing";
import style from './Main.module.css';

export function Main() {
    return (
        <main className={style.merriweatherRegular}>
            <div className={style.mainContainer}>
                <About />
                <Repair />
                <New />
                <Sewing />
                <Design />
                <Price />
                <Contacts />
                <Footer />
            </div>
        </main>
    );
}