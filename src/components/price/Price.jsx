import { useState } from 'react';
import { Siulai } from '../svg';
import style from './Price.module.css'

// const ScissorsIcon = () => (
//     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="14px" width="14px" xmlns="http://www.w3.org/2000/svg"><path d="M9.68347 7.55885L12 9.87538L18.3744 3.50102C19.1554 2.71997 20.4217 2.71997 21.2028 3.50102L21.9099 4.20812L9.68347 16.4346C9.88726 16.9145 10 17.4424 10 17.9967C10 20.2058 8.20914 21.9967 6 21.9967C3.79086 21.9967 2 20.2058 2 17.9967C2 15.7876 3.79086 13.9967 6 13.9967C6.55427 13.9967 7.08222 14.1094 7.56215 14.3132L9.87868 11.9967L7.56215 9.68017C7.08222 9.88397 6.55427 9.9967 6 9.9967C3.79086 9.9967 2 8.20584 2 5.9967C2 3.78756 3.79086 1.9967 6 1.9967C8.20914 1.9967 10 3.78756 10 5.9967C10 6.55098 9.88726 7.07892 9.68347 7.55885ZM6 7.9967C7.10457 7.9967 8 7.10127 8 5.9967C8 4.89213 7.10457 3.9967 6 3.9967C4.89543 3.9967 4 4.89213 4 5.9967C4 7.10127 4.89543 7.9967 6 7.9967ZM6 19.9967C7.10457 19.9967 8 19.1013 8 17.9967C8 16.8921 7.10457 15.9967 6 15.9967C4.89543 15.9967 4 16.8921 4 17.9967C4 19.1013 4.89543 19.9967 6 19.9967ZM15.5346 13.41L21.9099 19.7853L21.2028 20.4924C20.4217 21.2734 19.1554 21.2734 18.3744 20.4924L13.4133 15.5313L15.5346 13.41Z"></path></svg>
// );
const PictureRepair = () => {
    return (<picture >
        <source srcSet="/pakabos_750.webp" media="(max-width: 780px)" />
        <img className={style.img} src="/pakabos_750.webp" loading='lazy' alt="rūbų taisymas šiauliuose" />
    </picture>
    )
};
export function Price() {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div id='price' className={style.container}>
            <div className={style.content1}>
                <div><PictureRepair /></div>
                <div className={style.content}>
                    <h2 className={style.h2}>Drabužių taisymo darbų kainoraštis</h2>
                    <div className={style.list}>
                        <h3 className={style.h3}>Kelnių trumpinimas :</h3>
                        <p className={style.p}>Džinsų trumpinimas - 10-15€</p>
                        <p className={style.p}>Kelnių trumpinimas mašina - 10€</p>
                        <p className={style.p}>Kelnių trumpinimas su juostele - 12€</p>
                        <p className={style.p}>Kelnių trumpinimas su atvartais - 10€</p>
                        <p className={style.p}>Sportiniu kelnių su užtrauktukais - 12€</p>
                        <p className={style.p}>Kelnių trumpinimas paslėptu dygsniu - 10€</p>
                        <p className={style.p}>Kelnių siaurinimas - 20-40€</p>
                    </div>
                </div>
            </div>
            <button 
                onClick={toggleShowMore} 
                className={`${style.showMoreBtn} ${showMore ? style.hidden : ''}`}
            >
                Rodyti daugiau
            </button>
            {showMore && (

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
                        <p className={style.p}>Paltui - 30€</p>
                        <p className={style.p}>Puspalčiui - 25€</p>
                        <p className={style.p}>Švarkui - 20.4924C20€</p>
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
                    <button onClick={toggleShowMore} className={style.showLessBtn}>
                        Rodyti mažiau
                    </button>
                    </div>
                    <div className={style.svg}><Siulai /></div>
                </div>
            )}
        </div>
    )
}