import style from './New.module.css';


export const PictureMain = () => {
    return (<picture >
        <source srcSet="/images/siltas_flisinis_dzemperis_750.webp" media="(max-width: 780px)" />
        <img width={900} height={1352} className={style.img} src="images/siltas_flisinis_dzemperis_900.webp" loading='lazy' alt="šiltas flisinis džemperis" />
    </picture>
    )
};
export const Picture1 = () => {
    return (<picture >
        <source srcSet="images/zalias_dzemperis_750.webp" media="(max-width: 780px)" />
        <img width={900} height={1352} className={style.img} src="/imgGallery/zalias_dzemperis.webp" alt="žalias džemperis" />
    </picture>
    )
};
export const Picture2 = () => {
    return (<picture >
        <source srcSet="images/dzemperis_750.webp" media="(max-width: 780px)" />
        <img width={900} height={1352} className={style.img} src="/imgGallery/dzemperis.webp" loading='lazy' alt="džemperis" />
    </picture>
    )
};
export const Picture3 = () => {
    return (<picture >
        <source srcSet="images/melynas_dzemperis_750.webp" media="(max-width: 780px)" />
        <img width={900} height={1352} className={style.img} src="/imgGallery/melynas_dzemperis.webp" loading='lazy' alt="melynas dzemperis" />
    </picture>
    )
};
export const Picture4 = () => {
    return (<picture >
        <source srcSet="images/moteriskas_flisinis_dzemperis_750.webp" media="(max-width: 780px)" />
        <img width={900} height={1352} className={style.img} src="/imgGallery/moteriskas_flisinis_dzemperis.webp" loading='lazy' alt="moteriskas flisinis džemperis" />
    </picture>
    )
};
export const Picture5 = () => {
    return (<picture >
        <source srcSet="images/pilkas_flisinis_dzemperis_750.webp" media="(max-width: 780px)" />
        <img width={900} height={1350} className={style.img} src="/imgGallery/pilkas_flisinis_dzemperis.webp" loading='lazy' alt="pilkas flisinis džemperis" />
    </picture>
    )
};