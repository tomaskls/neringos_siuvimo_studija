import { Siulai } from '../svg';
import style from './Price.module.css'
import { useEffect } from 'react';

const PictureRepair = () => {
    return (<picture >
        <source srcSet="/pakabos_750.webp" media="(max-width: 780px)" />
        <img className={style.img} src="/pakabos_750.webp" loading='lazy' alt="rūbų taisymas šiauliuose" />
    </picture>
    )
};
export function Price() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='price' className={style.container}>
            <div className={style.content1}>
                <div><PictureRepair /></div>
                <div className={style.content}>
                    <h2 className={style.h2}>Drabužių taisymo darbų kainoraštis</h2>
                    <div className={style.list}>
                        <h3 className={style.h3}>Kelnių trumpinimas :</h3>
                        <p className={style.p}>Džinsų trumpinimas - 10€</p>
                        <p className={style.p}>Kelnių trumpinimas mašina - 10€</p>
                        <p className={style.p}>Kelnių trumpinimas su juostele - 12€</p>
                        <p className={style.p}>Kelnių trumpinimas su atvartais - 10€</p>
                        <p className={style.p}>Sportiniu kelnių su užtrauktukais - 12€</p>
                        <p className={style.p}>Kelnių trumpinimas paslėptu dygsniu - 10€</p>
                        <p className={style.p}>Kelnių siaurinimas per liemenį - 15-20€</p>
                        <p className={style.p}>Kelnių siaurinimas - 20-30€</p>
                    </div>
                </div>
            </div>
            <div className={style.content2}>
                <div className={style.list}>
                    <h3 className={style.h3}>Sijonų taisymas :</h3>
                    <p className={style.p}>Sijono trumpinimas - 10-15€</p>
                    <p className={style.p}>Sijono trumpinimas su pamušalu - 12-15€</p>
                    <p className={style.p}>Sijono siaurinimas - 15€</p>
                    <p className={style.p}>Sijono siaurinimas su pamušalu - 20€</p>
                </div>
                <div className={style.list}>
                    <h3 className={style.h3}>Švarkų taisymas:</h3>
                    <p className={style.p}>Švarko siaurinimas (1 siūlė)- 8€</p>
                    <p className={style.p}>Švarko apačios trumpinimas - 15-20€</p>
                    <p className={style.p}>Švarko rankovių trumpinimas - 15€</p>
                    <p className={style.p}>Švarko rankovių perstatymas - 20€</p>
                    <p className={style.p}>Švarko su pamušalu siaurinimas (1 siūlė) - 10€</p>
                </div>
                <div className={style.list}>
                    <h3 className={style.h3}>Suknelių taisymas :</h3>
                    <p className={style.p}>Suknelės siaurinimas per šonines siūles - 20€</p>
                    <p className={style.p}>Suknelės apačios lenkimas - 15€</p>
                    <p className={style.p}>Suknelės plačia apačia su pamušalu trumpinimas - 20€</p>
                    <p className={style.p}>Suknelės petnešų trumpinimas - 10€</p>
                    <p className={style.p}>Suknelės rankovių trumpinimas - 10€</p>
                    <p className={style.p}>Suknelės rankovių perstatymas - 15€</p>
                </div>
                <div className={style.list}>
                    <h3 className={style.h3}>Vyr. kostiumų taisymas:</h3>
                    <p className={style.p}>Švarko siaurinimas - 20€</p>
                    <p className={style.p}>Švarko rankovių trumpinimas - 25€</p>
                    <p className={style.p}>Švarko apačios trumpinimas - 20€</p>
                    <p className={style.p}>Švarko rankovių perstatymas - 40€</p>
                    <p className={style.p}>Kelnių apačios lenkimas su juostele - 12€</p>
                    <p className={style.p}>Kelnių siaurinimas - 20-40€</p>
                </div>
                <div className={style.list}>
                    <h3 className={style.h3}>Paltų taisymas:</h3>
                    <p className={style.p}>Apačios lenkimas - 30€</p>
                    <p className={style.p}>Rankovių trumpinimas - 20€</p>
                    <p className={style.p}>Rankovių perstatymas - 30€</p>
                    <p className={style.p}>Palto siaurinimas - 20-40 €</p>
                    <p className={style.p}>Apykaklės persiuvimas - 20€</p>
                </div>
                <div className={style.list}>
                    <h3 className={style.h3}>Pamušalų keitimas:</h3>
                    <p className={style.p}>Paltui - 35€</p>
                    <p className={style.p}>Puspalčiui - 30€</p>
                    <p className={style.p}>Švarkui - 30€</p>
                    <p className={style.p}>Sijonui - 15€</p>
                    <p className={style.p}>Suknelei - 15€</p>
                    <p className={style.p}>Striukei - 25-35€</p>
                    <p className={style.p}>Kailiniams - 50€</p>
                </div>
                <div className={style.list}>
                    <h3 className={style.h3}>Užtrauktukų keitimas:</h3>
                    <p className={style.p}>Striukė (žieminė) - 25€</p>
                    <p className={style.p}>Striukė (plona) - 20€</p>
                    <p className={style.p}>Vaikiška striukė - 15€</p>
                    <p className={style.p}>Džinsų užtrauktuko keitimas - 10€</p>
                    <p className={style.p}>Sijono užtrauktuko keitimas - 10€</p>
                    <p className={style.p}>Vyr. kelnių užtrauktukas - 15€</p>
                    <p className={style.p}>Puspalčiui - 25€</p>
                    <p className={style.p}>Paltui - 30€</p>
                </div>
                <div className={style.svg}><Siulai /></div>
            </div>
        </div>
    )
}