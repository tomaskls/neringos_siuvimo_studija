import style from './New.module.css';


export const PictureMain = () => {
    return (<picture >
        <source srcSet="/siltas_flisinis_dzemperis_750.webp" media="(max-width: 780px)" />
        <img width={750} height={1352} className={style.img} src="/siltas_flisinis_dzemperis_900.webp" loading='lazy' alt="šiltas flisinis džemperis" />
    </picture>
    )
};
export const Picture1 = () => {
    return (<picture >
        <source srcSet="/zalias_dzemperis_750.webp" media="(max-width: 780px)" />
        <img width={750} height={1352} className={style.img} src="/img/zalias_dzemperis.webp" loading='lazy' alt="žalias džemperis" />
    </picture>
    )
};
export const Picture2 = () => {
    return (<picture >
        <source srcSet="/dzemperis_750.webp" media="(max-width: 780px)" />
        <img width={750} height={1352} className={style.img} src="/img/dzemperis.webp" loading='lazy' alt="džemperis" />
    </picture>
    )
};
export const Picture3 = () => {
    return (<picture >
        <source srcSet="/melynas_dzemperis_750.webp" media="(max-width: 780px)" />
        <img width={750} height={1352} className={style.img} src="/img/melynas_dzemperis.webp" loading='lazy' alt="melynas dzemperis" />
    </picture>
    )
};
export const Picture4 = () => {
    return (<picture >
        <source srcSet="/moteriskas_flisinis_dzemperis_750.webp" media="(max-width: 780px)" />
        <img width={750} height={1352} className={style.img} src="/img/moteriskas_flisinis_dzemperis.webp" loading='lazy' alt="moteriskas flisinis džemperis" />
    </picture>
    )
};
export const Picture5 = () => {
    return (<picture >
        <source srcSet="/pilkas_flisinis_dzemperis_750.webp" media="(max-width: 780px)" />
        <img className={style.img} src="/img/pilkas_flisinis_dzemperis.webp" loading='lazy' alt="pilkas flisinis džemperis" />
    </picture>
    )
};